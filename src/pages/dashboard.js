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
        <nav className="menu">
        </nav>
        <div className="profile">
          <img
            src="https://via.placeholder.com/40" // Replace with profile icon URL
            alt="Profile"
          />
        </div>
      </header>
      <main className="content">
        <h1>Hello Umer!</h1>
        <div className="dashboard-container">
          {/* Left Panel - Actions */}
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
          </section>

          {/* Right Panel - IPs Registered */}
          <section className="ip-registered">
            <h2>IPs Registered</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Verification Status</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Home Decor Range</td>
                  <td>Verified</td>
                  <td><span className="role distributor">Distributor</span></td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Disney Princess Dress</td>
                  <td>Pending</td>
                  <td><span className="role pending">Pending</span></td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Bathroom Essentials</td>
                  <td>Verified</td>
                  <td><span className="role borrower">Borrower</span></td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Apple Smartwatch</td>
                  <td>Owner</td>
                  <td><span className="role owner">Owner</span></td>
                </tr>
              </tbody>
            </table>
            <button className="view-more-btn">View More</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;