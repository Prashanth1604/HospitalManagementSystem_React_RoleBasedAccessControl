import React from "react";
import "./Styles.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <header className="header">
        <h1>Admin Dashboard</h1>
      </header>

      {/* User Management Section */}
      <section className="section">
        <h2>User Management</h2>
        <div className="card">
          <p>Manage doctors, patients, and staff from here.</p>
          <button>View All Users</button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section">
        <h2>Hospital Statistics</h2>
        <div className="card">
          <p>Total Patients: 120</p>
          <p>Doctors: 15</p>
          <p>Appointments Today: 30</p>
        </div>
      </section>

      {/* Settings Section */}
      <section className="section">
        <h2>System Settings</h2>
        <div className="card">
          <p>Configure hospital system settings here.</p>
          <button>Go to Settings</button>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
