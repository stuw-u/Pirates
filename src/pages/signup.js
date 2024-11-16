import React from "react";
import "./signup.css"; // Add styling for the signup page

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="left-panel">
        <h2>Need webdesign for your business?</h2>
        <h1>
          <strong>Design Spacee</strong> will help you.
        </h1>
        <div className="logo">S</div>
        <p>figma.com/@designspacee</p>
      </div>
      <div className="right-panel">
        <form className="signup-form">
          <h2>Create Account</h2>
          <div className="social-buttons">
            <button type="button" className="social-button google">
              Sign up with Google
            </button>
            <button type="button" className="social-button facebook">
              Sign up with Facebook
            </button>
          </div>
          <p className="divider">— OR —</p>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="submit-button">
            Create Account
          </button>
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;