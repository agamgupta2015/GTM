import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "../../Auth.css";
import go from "../../google.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      alert("Error creating account with email and password");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Account created with Google successfully!");
      navigate("/success");
    } catch (error) {
      alert("Error creating account with Google");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create your new account</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <label class="l2">Email Address</label>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="auth-input"
          />
        </div>
        <label class="l2">Username</label>
        <div className="input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
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
        <div className="terms-container">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="terms-checkbox"
          />
          <label class="l1">
            I Agree with <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" className="auth-button">
          Register
        </button>
      </form>

      <div className="auth-divider">
        <hr className="divider-line" />
        <span className="divider-text">Or sign in with</span>
        <hr className="divider-line" />
      </div>

      <button onClick={handleGoogleSignup} className="google-button">
        <img src={go} alt="Google icon" className="google-icon" />
      </button>
      <div className="auth-footer">
        <span>Have an account? </span>
        <Link to="/" className="register-link">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
