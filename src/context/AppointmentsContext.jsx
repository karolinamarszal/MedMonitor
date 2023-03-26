import React, { useState, createContext } from 'react';

export const AppointmentsContext = createContext(null)

export const AppointmentsContextProvider = ({ children }) => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false); 
  const [appointments, setAppointments] = useState([]);
  
  const initialFormData = {appointmentType: {value:"", error: null}, description: {value:"", error: null}, date: {value:"", error: null}, addFile: {value:"", error: null}};
  const [formData, setFormData] = useState(initialFormData);
  const [ editIndex, setEditIndex ] = useState(-1);

  const unshiftToAppointments = () => {
    setAppointments((prevAppointments)=>{
      return [formData, ...prevAppointments]
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editIndex < 0){
      unshiftToAppointments();
    } else {
      setAppointments(appointments.map((appointment, index) => {
        if (index === editIndex) {
          return {...formData};
        }
        return appointment;
      }));
    }
    setShowAppointmentForm(false);
  }


  const value = {
    appointments,
    setAppointments,
    unshiftToAppointments,
    showAppointmentForm,
    setShowAppointmentForm,
    formData,
    setFormData,
    initialFormData,
    setEditIndex,
    handleSubmit,
  }

  return (
    <AppointmentsContext.Provider value={value}>
      {children}
    </AppointmentsContext.Provider>);

};

export default AppointmentsContext;