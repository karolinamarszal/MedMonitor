import React, { useContext , useEffect, useRef} from "react"
import { FaBriefcaseMedical, FaBookMedical, FaFileMedical, FaCalendarAlt, FaPlus } from "react-icons/fa";
import Modal from "./Modal"
import CustomInput from "./CustomInput"
import CustomTextarea from "./CustomTextarea"
import { AppointmentsContext } from "../context/AppointmentsContext";
import Alert from "./Alert"

const CreateAppointment = () => {

  const {
    appointments,
    showAppointmentForm, 
    setShowAppointmentForm, 
    formData, setFormData, 
    initialFormData, 
    handleSubmit,
    setEditIndex,
    alert,
    showAlert,
  } = useContext(AppointmentsContext);

  

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
    setShowAppointmentForm(false);
    showAlert()
  }

  const handleNewAppointmentBtnClick = () => {
    setEditIndex(-1);
    setShowAppointmentForm(true);
    showAlert()
    setFormData(initialFormData);
  }


  const ref = useRef(null);

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit(event);
      }
    };
    ref.current.addEventListener('keydown', keyDownHandler);

    return () => {
      ref.current.removeEventListener('keydown', keyDownHandler);
    };
  }, [showAppointmentForm]);

  return (
    <div ref={ref}>
      <div className="buttonContainer" >
        {alert.show && <Alert {...alert} removeAlert={showAlert} appointments={appointments}/>}
        <button className="buttonAdd" onClick={handleNewAppointmentBtnClick}><i className="mr-400"><FaPlus/></i><span>Add appointment</span></button>
      </div>
      <Modal title="Add new appointment" onClose={closeModal} onSubmit={handleSubmit} show={showAppointmentForm} >
        <form >
          <div className="alertEmptyForm">
            {alert.show && <Alert {...alert} removeAlert={showAlert} appointments={appointments}/>}
          </div>
          <CustomInput 
            label="Appointment type" 
            type="text" 
            className="mb-400"
            icon={<FaBriefcaseMedical/>}
            name="appointmentType" 
            value={formData.appointmentType.value} 
            onChange={handleChange}
            />
          <CustomInput 
            label="Date"
            className="mb-400"
            icon={<FaCalendarAlt />}
            type="date"
            name="date"
            value={formData.date.value}
            onChange={handleChange}
          />
          <CustomTextarea
            label="Description" 
            className="mb-400"
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