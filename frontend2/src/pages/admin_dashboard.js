import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dashboard.css'; 
import logo from './../assets/TMU-rgb.png';

function AdminDashboard() {
  // Dummy data for demonstration, keep your existing dummy data here
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  const ads = [
    { id: 1, title: 'Selling Bicycle', user: 'John Doe' },
    { id: 2, title: 'Looking for a Laptop', user: 'Jane Doe' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="grid-container1-register">
        <Link className="tmulogo_register" to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <Link className='link2 user_profile' to="/user_profile">Profile</Link>
      </div>
      
      <h1>Admin Dashboard</h1>
      
      {/* Your existing content for managing users, ads, and site content goes here */}

    </div>
  );
}

export default AdminDashboard;
