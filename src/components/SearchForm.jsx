import React, { useContext, useState, useCallback, useEffect} from "react"
import { FaSearch } from "react-icons/fa";
import CustomInput from "./CustomInput";
import { MedicinesContext } from "../context/MedicinesContext";
import { debounce } from "lodash";

const SearchForm = () => {
  
  const [searchValue, setSearchValue] = useState('');
  const {showAlert, setMedicines, searchedMedicines, setSearchedMedicines} = useContext(MedicinesContext);

  useEffect(() => {
    fetchMedicines(searchValue);
  }, [searchValue])

  const fetchMedicines = useCallback(debounce(async (value) => {
    if(!value){
      setSearchedMedicines([])
      return
    }
    try {
      const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?search=products.brand_name:"${value}"&limit=100`);
      const data = await response.json();
      setSearchedMedicines(data.results.map((item)=>{
        const obj = { 
          name: item.products[0].brand_name, 
          activeIngredients: item.products[0].active_ingredients.map((item) => {
            return item.name;
          }).join(', '),
          marketingStatus: item.products[0].marketing_status,
        };
        if (item.openfda) {
          obj['manufacturer'] = item.openfda.manufacturer_name.map((item)=> {
            return item;
          }).join(', ');
          obj['productType'] = item.openfda.product_type.map((item)=> {
            return item;
          }).join('');
        }
        return obj;
      }));
    }
    catch (err){
      console.log(err)
    }
  }, 400), []);

  const handleMedicineSubmit = (medicine, index) => {
    setMedicines(prevMedicines => [searchedMedicines[index], ...prevMedicines]);
    setSearchedMedicines([])
    showAlert(true, "success", "Drug added to the list")
    setSearchValue(''); 
    return;
  }


  return (
    <section className="searchContainer">
      <form className="formControl">
          <CustomInput 
            value={searchValue}
            label="Search Drug" 
            fullWidth={true}
            type="text" 
            icon={<FaSearch />}
            name="searchDrug" 
            onChange={(e)=> setSearchValue(e.target.value)}
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