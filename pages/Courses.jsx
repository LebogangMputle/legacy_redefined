import React from "react";
import './Courses.css';

const Courses = () => {
  return (
    <div style={{minHeight:"50vh"}}>
      <h1 id='courses'>Courses</h1>
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
  );
};

export default Courses;
