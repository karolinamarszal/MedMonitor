import React, { useContext, useState, useCallback} from "react"
import { FaSearch } from "react-icons/fa";
import CustomInput from "./CustomInput";
import { MedicinesContext } from "../context/MedicinesContext";
import { debounce } from "lodash";

const SearchForm = () => {

  // const [medicines, setMedicines] = useState([]);
  // const [searchedMedicines, setSearchedMedicines] = useState([]);

  const {searchedMedicines, setSearchedMedicines, handleMedicineSubmit} = useContext(MedicinesContext);

  const handleChange = debounce(async (value) => {
    if(!value){
      setSearchedMedicines([])
      return
    }
    try {
      const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:"${value}"&limit=100`);
      const data = await response.json();
      console.log(data)
      setSearchedMedicines(data.results.map((item)=>{
        console.log(item.products[0].active_ingredients.map((item) => {
          return item.name;
        }).join(', '))
        return { 
          name: item.products[0].brand_name, 
          activeIngredients: item.products[0].active_ingredients.map((item) => {
            return item.name;
          }).join(', ')
      };
      }));
    }
    catch (err){
      console.log(err)
    }
  }, 500);



  // const handleMedicineSubmit = (medicine, index) => {
  //   setMedicines(prevMedicines => [searchedMedicines[index], ...prevMedicines]);
  //   setSearchedMedicines([])
  //   return;
  // }
  


  return (
    <section className="searchContainer">
      <form className="formControl">
          <CustomInput 
            label="Search Drug" 
            fullWidth={true}
            type="text" 
            icon={<FaSearch />}
            name="searchDrug" 
            onChange={e => handleChange(e.target.value)}
          />
          {searchedMedicines.length > 0 && 
          <ul className="searchList">
            {searchedMedicines.map((medicine, index)=>{
              return (
                <li key={index} onClick={()=>handleMedicineSubmit(medicine, index)}>{medicine.name}</li>
              )
            })}
          </ul>}
      </form>
    </section>
  )
}

export default SearchForm;