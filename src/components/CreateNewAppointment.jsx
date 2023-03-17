import React, { useState } from "react"
import Modal from "./Modal"

const CreateAppointment = props => {

  const [show, setShow] = useState(false)

  const [formData, setFormData] = useState({appointmentType: "", description: "", date: ""});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
  };

  const closeModal = () => {
    setShow(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment type: ${formData.appointmentType}, Description: ${formData.description}`);
    setShow(false);
  };



  return (
    <div>
      <button onClick={() => setShow(true)}>Add appointment</button>
      <Modal title="Add new appointment" onClose={closeModal} onSubmit={handleSubmit} show={show}>
        <form className="formContainer">
            <div className="inputContainer mb-400">
              <label htmlFor="appointmentType" className="label">Appointment type</label>
              <input type="text" id="appointmentType" name="appointmentType" value={formData.appointmentType} onChange={handleChange}/>
            </div>
            <div className="inputContainer mb-400">
              <label htmlFor="date" className="label">Date</label>
              <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} onFocus={(e)=>console.log(e)}/>
            </div>
            <div className="inputContainer">
              <label className="label" htmlFor="description">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange}/>
            </div>
        </form>
      </Modal>
    </div>
  )
}

export default CreateAppointment