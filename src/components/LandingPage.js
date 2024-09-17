// components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Eduverse</h1>
      <p>Empowering classrooms with technology.</p>
      <Link to="/login" className="btn">Login</Link>
      <Link to="/signup" className="btn">Sign Up</Link>
    </div>
  );
}

export default LandingPage;
