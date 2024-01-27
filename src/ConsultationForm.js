// ConsultationForm.js
import React, { useState } from 'react';
import DoctorList from './DoctorList';
import './ConsultationForm.css';

const ConsultationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctors = [
    { name: 'Dr. Smith', expertise: 'Cardiologist', city: 'New York' },
    { name: 'Dr. Johnson', expertise: 'Dermatologist', city: 'Los Angeles' },
    { name: 'Dr. Lee', expertise: 'Pediatrician', city: 'Chicago' },
    // Add more doctors as needed
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (step === 4) {
      // Filter doctors based on the city
      const filteredDoctors = doctors.filter((doctor) => doctor.city === formData.city);
      setFilteredDoctors(filteredDoctors);
    }
    setStep(step + 1);
  };

  return (
    <section className="consultation-form">
      {step === 1 && (
        <>
          {/* <h2>Step 1: Name + Phone Number</h2> */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required /><br />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required /><br />

            <button type="button" onClick={handleNextStep}>Next</button>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          {/* <h2>Age + City + Company</h2> */}
          <form>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} required /><br />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required /><br />

            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} /><br />

            <button type="button" onClick={handleNextStep}>Next</button>
          </form>
        </>
      )}

      {step === 3 && (
        <>
          {/* <h2>Chief Complaints</h2> */}
          <form>
            <label htmlFor="chiefComplaints">Chief Complaints:</label>
            <textarea id="chiefComplaints" name="chiefComplaints" value={formData.chiefComplaints} onChange={handleInputChange} rows="4" required></textarea><br />

            <button type="button" onClick={handleNextStep}>Next</button>
          </form>
        </>
      )}

      {step === 4 && (
        <>
          {/* <h2>Any Previous Experience with Physiotherapy</h2> */}
          <form>
            <label htmlFor="previousExperience">Previous Experience:</label>
            <textarea id="previousExperience" name="previousExperience" value={formData.previousExperience} onChange={handleInputChange} rows="4"></textarea><br />

            <button type="button" onClick={handleNextStep}>Next</button>
          </form>
        </>
      )}

      {step === 5 && (
        <>
          <h2>Show Best Available Doctors</h2>
          <DoctorList doctors={filteredDoctors} />
        </>
      )}
    </section>
  );
}

export default ConsultationForm;
