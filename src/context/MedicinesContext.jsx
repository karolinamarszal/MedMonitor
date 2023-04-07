import React, { useState, useEffect, createContext } from "react";



export const MedicinesContext = createContext(null);

const getLocalStorage = ()=> {
  let medicines = localStorage.getItem("medicines");
  if(medicines){
    return JSON.parse(localStorage.getItem("medicines"))
  } 
  else {
    return []
  }
}

export const MedicinesContextProvider = ({ children }) => {

  const [medicines, setMedicines] = useState(getLocalStorage([]));
  const [searchedMedicines, setSearchedMedicines] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show=false, type="", msg="")=>{
    setAlert({show, type, msg})
  }

  useEffect(()=> {
    localStorage.setItem("medicines", JSON.stringify(medicines))
  }, [medicines])

  const value = {
    medicines,
    setMedicines,
    searchedMedicines,
    setSearchedMedicines,
    alert,
    showAlert,
  }

  return (
    <MedicinesContext.Provider value={value}>
      { children }
    </MedicinesContext.Provider>
  );

};

export default MedicinesContext;