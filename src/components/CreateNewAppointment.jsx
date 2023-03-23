import React, { useState, useContext } from "react"
import { FaBriefcaseMedical, FaBookMedical, FaFileMedical, FaCalendarAlt, FaPlus } from "react-icons/fa";
import Modal from "./Modal"
import CustomInput from "./CustomInput"
import CustomTextarea from "./CustomTextarea"
import { AppointmentsContext } from "../context/AppointmentsContext";

const CreateAppointment = props => {

  const { unshiftToAppointments} = useContext(AppointmentsContext);

  const [show, setShow] = useState(false)
  
  const initialFormData = {appointmentType: {value:"", error: null}, description: {value:"", error: null}, date: {value:"", error: null}, addFile: {value:"", error: null}};

  const [formData, setFormData] = useState(initialFormData);

  

  const handleChange = (e) => {
    const {name, value} = e.target;
    // console.log(name, value);
    setFormData((prevFormData) => {
      // return { ...prevFormData, [name]: {value}};
      const obj = {...prevFormData};
      // console.log(obj, prevFormData);
      obj[name]['value'] = value;
      // console.log(obj, obj[name], obj[name]["value"])
      return obj;
    });
  };

  const closeModal = () => {
    setShow(false);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    if(!formData.appointmentType.value){
      formData.appointmentType.error = "This field is required"
    }
    // alert(`Appointment type: ${formData.appointmentType.value}, Description: ${formData.description.value}, Date: ${formData.date.value}`);
    unshiftToAppointments(formData);
    setShow(false);
    setFormData(initialFormData);
  };



  return (
    <div>
      <div className="buttonContainer">
        <button className="buttonAdd" onClick={() => setShow(true)}><i className="mr-400"><FaPlus/></i><span>Add appointment</span></button>
      </div>
      <Modal title="Add new appointment" onClose={closeModal} onSubmit={handleSubmit} show={show}>
        <form>
            <CustomInput 
              label="Appointment type" 
              type="text" 
              icon={<FaBriefcaseMedical/>}
              name="appointmentType" 
              value={formData.appointmentType.value} 
              onChange={handleChange}
            />
            <CustomInput 
              label="Date"
              icon={<FaCalendarAlt />}
              type="date"
              name="date"
              value={formData.date.value}
              onChange={handleChange}
            />
            <CustomTextarea
              label="Description" 
              icon={<FaBookMedical/>}
              name="description" 
              value={formData.description.value} 
              onChange={handleChange}
            />
            <CustomInput 
              label="Add file" 
              type="file" 
              icon={<FaFileMedical/>}
              name="addFile" 
              value={formData.addFile.value} 
              onChange={handleChange}
            />
        </form>
      </Modal>
    </div>
  )
}

export default CreateAppointment