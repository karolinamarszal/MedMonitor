import React from "react";
import CreateNewAppointment from "./CreateNewAppointment"
import AppointmentsTable from "./AppointmentsTable"
import { AppointmentsContextProvider } from "../context/AppointmentsContext";


const Appointments = () => {

  return (
    <AppointmentsContextProvider>
      <div className="contentContainer">
        <div>
          <CreateNewAppointment />
        </div>
        <div>
          <AppointmentsTable />
        </div>
      </div>
    </AppointmentsContextProvider>
  )
}

export default Appointments