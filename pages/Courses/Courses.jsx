import React from "react";
import "./Courses.css"; // Assuming courses.css is in the same directory

const Courses = () => {
  return (
    <div className="courses">
      <div className="background-image animated fadeIn">
      {/* <img
        src="https://media.licdn.com/dms/image/C4D0BAQHyCvbAh6do1g/company-logo_200_200/0/1669926955056?e=1727308800&v=beta&t=89bPiTA-CwAzAP3YjkakrCB1u4OZvykuEdZZUl5BCgc"
        alt="Courses Logo" // Descriptive alt text for accessibility
   Name="animated fadeIn" // Apply both class names for animation
      /> */}
      </div>

      <div className="content">
      <h1 className="animated bounceIn">Courses</h1>
        <ul>
        <h2 className="animated zoomIn">Individual Workshops</h2>
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
