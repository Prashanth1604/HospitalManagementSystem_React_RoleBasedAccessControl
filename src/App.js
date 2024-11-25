import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import PatientPage from "./components/PatientPage";
import DoctorPage from "./components/DoctorPage";
import AdminPage from "./components/AdminPage";

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (role) => {
    setRole(role); // Update role after login
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/patient" element={role === "patient" ? <PatientPage /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/doctor" element={role === "doctor" ? <DoctorPage /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/admin" element={role === "admin" ? <AdminPage /> : <LoginPage onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
