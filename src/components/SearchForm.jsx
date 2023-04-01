import React, { useContext, useState, useCallback} from "react"
import { FaSearch } from "react-icons/fa";
import CustomInput from "./CustomInput";
import { MedicinesContext } from "../context/MedicinesContext";
import { debounce } from "lodash";

const SearchForm = () => {

  const [medicines, setMedicines] = useState([]);
  const [searchedMedicines, setSearchedMedicines] = useState([]);


  const handleChange = debounce(async (value) => {
    if(!value){
      setSearchedMedicines([])
      return
    }
    try {
      const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:"${value}"&limit=100`);
      const data = await response.json();
      setSearchedMedicines(data.results.map((item)=>{
        return item.products[0].brand_name;
      }));
    }
    catch (err){
      console.log(err)
    }
  }, 500);



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
          <ul>
            {searchedMedicines.map((item, index)=>{
              return (
                <li key={index}>{item}</li>
              )
            })}
          </ul>}
      </form>
    </section>
  )
}

export default SearchForm;