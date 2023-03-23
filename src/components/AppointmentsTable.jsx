import React, { useContext } from "react"
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AppointmentsContext } from "../context/AppointmentsContext";


const AppointmentsTable = () => {

  const { appointments} = useContext(AppointmentsContext);


  return (
    <div className="tableContainer">
      <table className="appointmentsTable">
        <thead>
          <tr>
            <th scope="col">Appointment type</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Add file</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments.length === 0 && 
            <tr><td colSpan="5" className="tableCenter">No appointments yet</td></tr>
          }
            {appointments.map((appointment, index)=> {
              return (
                <tr key={index}>
                  <td>
                    {appointment.appointmentType.value}
                  </td>
                  <td>
                    {appointment.date.value}
                  </td>
                  <td>
                    {appointment.description.value}
                  </td>
                  <td>
                    {appointment.addFile.value}
                  </td>
                  <td>
                    <i className="editButton"><FaEdit/></i>
                  </td>
                  <td>
                    <i className="deleteButton"><FaTrashAlt /></i>
                  </td>
                </tr>                
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default AppointmentsTable