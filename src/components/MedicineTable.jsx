import React, { useContext } from "react"
import { MedicinesContext } from "../context/MedicinesContext";
import { FaTrashAlt } from "react-icons/fa";
import Alert from "./Alert"

const MedicineTable = () => {


  const {medicines, setMedicines, alert, showAlert} = useContext(MedicinesContext);

  const removeMedicine = (medicineIndex) => {
    setMedicines(medicines.filter((medicine, index) => index !== medicineIndex))
    showAlert(true, "danger", "Drug removed from the list")
  }



  return (
    <div className="tableContainer">
      <div className="alertEmptyForm alertMargin alertMarginLeft">
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      </div>
      <table className="appointmentsTable">
        <thead>
          <tr>
            <th scope="col">Medicine</th>
            <th scope="col">Active ingredients</th>
            <th scope="col">Additional info</th>
            <th scope="col">Remove drug</th>
          </tr>
        </thead>
        <tbody>
          {medicines.length === 0 && <tr><td colSpan="4" className="tableCenter">No drugs yet</td></tr>}
          {medicines.map((medicine, index) => {
            return (
              <tr key={index}>
                <td>
                  {medicine.name}
                </td>
                <td>
                  {medicine.activeIngredients}
                </td>
                <td>
                  <div className="chip marketing">
                    { medicine.marketingStatus }
                  </div>
                  { medicine.manufacturer && <div className="chip manufacturer">{ medicine.manufacturer }</div>} 
                  { medicine.productType && <div className="chip product"> { medicine.productType}</div> }
                </td>
                <td>
                  <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                    <button type="button" className="deleteButton" onClick={()=>removeMedicine(index)}><FaTrashAlt /></button>
                  </div>
                </td>
              </tr>
            )
          })}      
        </tbody>
      </table>
    </div>
  );
}

export default MedicineTable