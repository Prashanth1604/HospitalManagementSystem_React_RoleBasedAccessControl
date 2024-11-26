# HospitalManagementSystem_React_RoleBasedAccessControl 
# React Role-Based Access Control System

This is a React application that implements a role-based access control system for three types of users: **Doctor**, **Admin**, and **Patient**. Each user role has its own set of accessible pages and features, ensuring secure and tailored access based on the user's role.

## Features
- **User Authentication**: Login page to authenticate users based on roles.
- **Role-based Pages**: Different pages for Doctor, Admin, and Patient roles, each with specific functionalities.
- **Private Routes**: Routes are protected, allowing only authorized users to access certain pages.

## Roles
- **Admin**: Can manage user details, view all appointments, and handle system configurations.
- **Doctor**: Can manage their schedule, view appointments, and update health records.
- **Patient**: Can view their health records, book appointments, and check appointment history.

## Tech Stack
- **Frontend**: React, React Router, Bootstrap
- **Backend**: Simulated via a mock login system 
- **Routing**: React Router for navigation
- **Styling**: Bootstrap for layout and styling

## Installation

Follow the steps below to set up the project on your local machine.
##PREREQUISITES
Make sure you have Node.js , React.js and npm installed <br>
link for reference- https://www.geeksforgeeks.org/how-to-install-reactjs-on-windows/
### 1. Clone the repository
### 2. Then run the following command to install the required dependencies:<br>
            npm install
### 3. Start the app 
             npm start

<br>
### Structure of the file<br><br><br>

<br>
### How it works  <br>
Login System: When users visit the app, they are first presented with a login page. Upon entering their credentials (username and password), the system checks if they match any of the predefined users.<br><br><br>
Admin login credentials:<br>
username: admin@admin.com<br>
Password: admin123<br>

Doctor login credentials:<br>
username: doctor@doctor.com<br>
Password: doctor123<br>
<br>
Patient login credentials:<br>
username: patient@patient.com<br>
Password: patient123<br>






