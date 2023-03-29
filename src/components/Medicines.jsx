import React from "react"
import SearchForm from "./SearchForm"
import MedicineTable from "./MedicineTable"

const Medicines = () => {

  return (
    <div className="contentContainer">
      <SearchForm />
      <MedicineTable />
    </div>
  )
}

export default Medicines