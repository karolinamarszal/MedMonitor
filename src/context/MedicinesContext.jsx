import React, { useState, createContext } from "react";



export const MedicinesContext = createContext(null);

export const MedicinesContextProvider = ({ children }) => {

  const [medicines, setMedicines] = useState([]);
  const [searchedMedicines, setSearchedMedicines] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show=false, type="", msg="")=>{
    setAlert({show, type, msg})
  }

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