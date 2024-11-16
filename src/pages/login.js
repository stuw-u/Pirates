import React from "react";
import "./login.css"; // Add custom CSS styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <h2>Need webdesign for your business?</h2>
        <h1>
          <strong>Design Spacee</strong> will help you.
        </h1>
        <div className="logo">S</div>
        <p>figma.com/@designspacee</p>
      </div>
      <div className="right-panel">
        <form className="login-form">
          <h2>Sign-in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Signup Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;