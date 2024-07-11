import React from "react";
import "./Loginsuccess.css";
import { useNavigate } from "react-router-dom";

const LoginSuccessful = () => {
  const navigate = useNavigate();

  const onGoToTracking = () => {
    navigate("/tracking");
  };

  const onLogout = () => {
    navigate("/");
  };

  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">
          <span role="img" aria-label="success">
            ✔️
          </span>
        </div>
        <h2>Login Successful</h2>
        <button className="tracking-button" onClick={onGoToTracking}>
          Go to Tracking Screen
        </button>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessful;
