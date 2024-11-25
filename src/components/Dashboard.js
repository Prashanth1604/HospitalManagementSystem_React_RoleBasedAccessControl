import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ role }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (role === "admin") navigate("/admin");
    else if (role === "doctor") navigate("/doctor");
    else if (role === "patient") navigate("/patient");
    else navigate("/login");
  }, [role, navigate]);

  return null; // No UI, only routing
};

export default Dashboard;
