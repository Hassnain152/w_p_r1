import React from "react";
import "./Certificate.css";
import logo from "./assets/logo.jpg"
import userPhoto from "./assets/hassnn.jpg" 

const Certificate = () => {
  return (
    <div className="page">
      <div className="certificate">

        {/* Watermark */}
        <img src={logo} alt="UTTC Logo" className="watermark" />

        {/* Header */}
        <h1 className="uttc">UTTC</h1>
        <hr />
        <h2 className="heading">UNITED TECHNICAL TRAINING CENTER</h2>

        {/* Fields */}
        <div className="field">
          <label>Your Name</label>
          <input value="Muhammad Hassnain" readOnly />
        </div>

        <div className="field">
          <label>Certificate No</label>
          <input value="UTTC-004841" readOnly />
        </div>

        <div className="field">
          <label>Course Number</label>
          <input value="HSE-UT-075" readOnly />
        </div>

        <div className="field">
          <label>Course Name</label>
          <input value="Work Permit Receiver" readOnly />
        </div>

        <div className="field">
          <label>Held On</label>
          <input value="26-Jul-2025" readOnly />
        </div>

        <div className="field">
          <label>Valid Till</label>
          <input value="25-Jul-2027" readOnly />
        </div>

        {/* Photo */}
        <div className="photo-section">
          <img src={userPhoto} alt="Student" />
          <p>Student Identification</p>
        </div>

        {/* Verified */}
        <div className="verified">
          <span>✔</span>
          <p>Your Certificate Is Verified</p>
        </div>

      </div>
    </div>
  );
};

export default Certificate;