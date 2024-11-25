import React, { useState } from "react";
import "./Styles.css";

const PatientPage = () => {
  // Mock Data
  const [patientDetails] = useState({
    name: "John Doe",
    age: 35,
    gender: "Male",
    contact: "+1234567890",
    email: "john.doe@example.com",
  });

  const [appointments] = useState([
    { date: "2024-11-30", time: "10:30 AM", doctor: "Dr. Smith", status: "Confirmed" },
    { date: "2024-12-15", time: "1:00 PM", doctor: "Dr. Brown", status: "Pending" },
  ]);

  const [healthRecords] = useState([
    { date: "2024-09-20", diagnosis: "Flu", prescription: "Paracetamol" },
    { date: "2024-06-10", diagnosis: "Hypertension", prescription: "Amlodipine" },
  ]);

  return (
    <div className="patient-page">
      <header className="header">
        <h1>Welcome, {patientDetails.name}</h1>
      </header>

      {/* Patient Details Section */}
      <section className="section">
        <h2>Patient Details</h2>
        <div className="card">
          <p><strong>Name:</strong> {patientDetails.name}</p>
          <p><strong>Age:</strong> {patientDetails.age}</p>
          <p><strong>Gender:</strong> {patientDetails.gender}</p>
          <p><strong>Contact:</strong> {patientDetails.contact}</p>
          <p><strong>Email:</strong> {patientDetails.email}</p>
        </div>
      </section>

      {/* Appointment Details Section */}
      <section className="section">
        <h2>Upcoming Appointments</h2>
        <div className="card">
          {appointments.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </div>
      </section>

      {/* Health Records Section */}
      <section className="section">
        <h2>Previous Health Records</h2>
        <div className="card">
          {healthRecords.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Diagnosis</th>
                  <th>Prescription</th>
                </tr>
              </thead>
              <tbody>
                {healthRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.date}</td>
                    <td>{record.diagnosis}</td>
                    <td>{record.prescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No health records found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PatientPage;
