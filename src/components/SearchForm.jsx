import React, { useState, useEffect} from "react"
import { uniqueId } from "lodash";
import { FaSearch } from "react-icons/fa";
import classNames from "../utils/helpers";
import CustomInput from "./CustomInput";

const SearchForm = () => {

  const uId = uniqueId();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const {value} = e.target;
    // const value = e.target.value;
    setSearch(value)
  };

  return (
    <section className="searchContainer">
      <form className="searchForm">
        <div className="formControl">
          <CustomInput 
            label="Search Drug" 
            fullWidth={true}
            type="text" 
            name="searchDrug" 
            value={search} 
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;