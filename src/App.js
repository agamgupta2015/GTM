// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/login";
import Signup from "./Component/Signup/signup";
import Tracking from "./Component/Tracking/Tracking";
import Success from "./Component/LoginSucess/LoginSuccess";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
