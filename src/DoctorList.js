// DoctorList.js
import React from 'react';

const DoctorList = ({ doctors }) => {
  return (
    <div>
      <h2>Best Available Doctors</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <strong>{doctor.name}</strong> - {doctor.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
