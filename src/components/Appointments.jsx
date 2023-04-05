import React from "react";
import CreateNewAppointment from "./CreateNewAppointment"
import AppointmentsTable from "./AppointmentsTable"
import { AppointmentsContextProvider } from "../context/AppointmentsContext"



const Appointments = () => {

  return (
    <AppointmentsContextProvider>
      <div className="contentContainer">
        <CreateNewAppointment />
        <AppointmentsTable />
      </div>
    </AppointmentsContextProvider>
  )
}

export default Appointments