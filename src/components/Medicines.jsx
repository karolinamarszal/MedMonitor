import React from "react"
import SearchForm from "./SearchForm"
import MedicineTable from "./MedicineTable"
import { MedicinesContextProvider } from "../context/MedicinesContext"


const Medicines = () => {

  return (
    <MedicinesContextProvider>
      <div className="contentContainer box">
        <SearchForm />
        <MedicineTable />
      </div>
    </MedicinesContextProvider>
  )
}

export default Medicines