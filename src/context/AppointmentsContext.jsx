import React, { useState, useEffect, createContext } from 'react';

export const AppointmentsContext = createContext(null)

const getLocalStorage = ()=> {
  let appointments = localStorage.getItem("appointments");
  if(appointments){
    return JSON.parse(localStorage.getItem("appointments"))
  } 
  else {
    return []
  }
}


export const AppointmentsContextProvider = ({ children }) => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false); 
  const [appointments, setAppointments] = useState(getLocalStorage([]));

  const initialFormData = {
    appointmentType: {value:"", error: null}, 
    description: {value:"", error: null}, 
    date: {value:"", error: null},
  };

  const [formData, setFormData] = useState(initialFormData);
  const [ editIndex, setEditIndex ] = useState(-1);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const unshiftToAppointments = () => {
    setAppointments((prevAppointments)=>{
      return [formData, ...prevAppointments]
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.appointmentType.value){
      return showAlert(true, "danger", "Please enter appointment")
    }
    if(!formData.date.value){
      return showAlert(true, "danger", "Please enter date")
    }
    if(editIndex < 0){
      unshiftToAppointments();
      showAlert(true, "success", "Appointment added to the list")
    } else {
      setAppointments(appointments.map((appointment, index) => {
        if (index === editIndex) {
          return {...formData}
        }
        return appointment;
      }));
      showAlert(true, "success", "Appointment changed")
    }
    setShowAppointmentForm(false);
  }

  const showAlert = (show=false, type="", msg="")=>{
    setAlert({show, type, msg})
  }

  useEffect(()=> {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])

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
    alert,
    showAlert,
  }

  return (
    <AppointmentsContext.Provider value={value}>
      {children}
    </AppointmentsContext.Provider>);

};

export default AppointmentsContext;