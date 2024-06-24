import React from "react";
import "./Courses.css"; // Assuming courses.css is in the same directory

const Courses = () => {
  return (
    <div className="courses">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJFT9qQIfHwyTt65KjJApgl65Ej7nlfDjSGBqmX0V3wTdx9px4HFN-Be3-KURhdjvr3xtaRgy_LV3gyav1qfHDzPt7azvb2bk7frXDX6H30JeJBGBEzDCJDRbLLy-IBHN-odrvEel8EkBU/s320/2.png"
        alt="Courses Logo" // Add a descriptive alt text for accessibility
      />
      <div className="content">
        <h1>Courses</h1>
        <p id="Browse-courses">Browse Courses</p>
        <ul>
          <h2>Individual Workshops</h2>
          <li>Personal Mastery</li>
          <li>Basic Accounting</li>
          <li>Business and personal finance</li>
          <li>Data-led and digital business marketing</li>
          <li>Effective business communication</li>
          <li>Business management and process risk management</li>
          <li>Fraud risk management</li>
          <li>Cyber security management</li>
        </ul>
        <p>Business development program package</p>
        <p>Online and/or in-person options</p>
        <p>Book via our email: <a href="https://legacy.redefined1@gmail.com">legacy.redefined1@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Courses;
