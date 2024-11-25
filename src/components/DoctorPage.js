import React, { useState } from "react";
import "./Styles.css";

const DoctorPage = () => {
  // Mock Data
  const [doctorDetails] = useState({
    name: "Dr. Sarah Connor",
    specialization: "Cardiology",
    contact: "+1234567890",
    email: "sarah.connor@example.com",
  });

  const [schedule] = useState([
    { day: "Monday", time: "10:00 AM - 1:00 PM" },
    { day: "Wednesday", time: "2:00 PM - 5:00 PM" },
  ]);

  const [patients] = useState([
    { name: "John Doe", age: 35, issue: "Chest Pain" },
    { name: "Jane Smith", age: 42, issue: "Shortness of Breath" },
  ]);

  return (
    <div className="doctor-page">
      <header className="header">
        <h1>Welcome, {doctorDetails.name}</h1>
      </header>

      {/* Doctor Details */}
      <section className="section">
        <h2>Doctor Details</h2>
        <div className="card">
          <p><strong>Name:</strong> {doctorDetails.name}</p>
          <p><strong>Specialization:</strong> {doctorDetails.specialization}</p>
          <p><strong>Contact:</strong> {doctorDetails.contact}</p>
          <p><strong>Email:</strong> {doctorDetails.email}</p>
        </div>
      </section>

      {/* Schedule */}
      <section className="section">
        <h2>Schedule</h2>
        <div className="card">
          <ul>
            {schedule.map((slot, index) => (
              <li key={index}>{slot.day}: {slot.time}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Assigned Patients */}
      <section className="section">
        <h2>Assigned Patients</h2>
        <div className="card">
          <ul>
            {patients.map((patient, index) => (
              <li key={index}>{patient.name} (Age: {patient.age}) - {patient.issue}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DoctorPage;
