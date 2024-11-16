import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">
          <img
            src="https://via.placeholder.com/50" // Replace with your logo URL
            alt="Logo"
          />
        </div>
        <div className="profile">
          <img
            src="https://via.placeholder.com/40" // Replace with profile icon URL
            alt="Profile"
          />
        </div>
      </header>
      <main className="content">
        <h1>Hello Umer!</h1>
        <section className="actions">
          <h2>Actions</h2>
          <p>Digital Assets</p>
          <div className="cards">
            <div className="card">
              <h3>Register</h3>
              <p>Total Sales</p>
            </div>
            <div className="card">
              <h3>Borrow</h3>
              <p>Total Order</p>
            </div>
            <div className="card">
              <h3>Distribute</h3>
              <p>Product Sold</p>
            </div>
          </div>
        </section>
        <section className="ip-management">
          <h2>Manage all your IPs with ease</h2>
          <div className="ip-content">
            <img
              src="https://via.placeholder.com/100" // Replace with IP globe image URL
              alt="IP Management"
              className="ip-image"
            />
            <button className="learn-more-btn">Learn More</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;