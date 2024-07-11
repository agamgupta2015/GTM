import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "../../Auth.css";

import go from "../../google.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      navigate("/success");
    } catch (error) {
      alert("Check your credentials!");
      alert("Error logging in with email and password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google successfully!");
      navigate("/success");
    } catch (error) {
      alert("Error logging in with Google");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to your account.</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <label class="l2">Email Address</label>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="auth-input"
          />
        </div>

        <label class="l2">Password</label>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="auth-input"
          />
        </div>
        <Link to="/forgot-password" className="forgot-password">
          Forgot password?
        </Link>
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>

      <div className="auth-divider">
        <hr className="divider-line" />
        <span className="divider-text">Or sign in with</span>
        <hr className="divider-line" />
      </div>

      <button onClick={handleGoogleLogin} className="google-button">
        <img src={go} alt="Google icon" className="google-icon" />
      </button>

      <div className="auth-footer">
        <span>Don't have an account? </span>
        <Link to="/signup" className="register-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
