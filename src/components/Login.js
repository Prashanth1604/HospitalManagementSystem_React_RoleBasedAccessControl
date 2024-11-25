import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ onLogin }) { // Ensure that onLogin is passed as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are correct (this can be based on your app's logic)
    if (email === "admin@admin.com" && password === "admin123") {
      onLogin("admin"); // Passing the role to the parent (which will be used for redirection)
      navigate("/admin");
    } else if (email === "doctor@doctor.com" && password === "doctor123") {
      onLogin("doctor");
      navigate("/doctor");
    } else if (email === "patient@patient.com" && password === "patient123") {
      onLogin("patient");
      navigate("/patient");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
