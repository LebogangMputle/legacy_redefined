import React from "react";
import "./Courses.css"; // Assuming courses.css is in the same directory

const Courses = () => {
  return (
    <div className="courses">
      <div className="background-image animated fadeIn">
        {/* Your image or other background content */}
      </div>

      <div className="content">
        <h1 className="heading animated bounceIn">Courses</h1>
        <div className="workshop-grid">
          <div className="workshop-item">
            <img
              src="https://clipart-library.com/newhp/29-298131_accounting-clipart-icon-accounting.png"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Basic Accounting</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://worksheets.clipart-library.com/images2/budgeting-graphs/budgeting-graphs-8.png"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Business and personal finance</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://clipart-library.com/2023/Group-197-3.png"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Data-led and digital business marketing</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://clipart-library.com/2023/effective-communication-personality-development-communication-skills-communications-training-21st-century-skills-business-english-soft-skills-business-communication-effective-interpersonal.png"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Effective business communication</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://clipart-library.com/image_gallery/n1316759.jpg"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Business management and process risk management</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://img.clipart-library.com/2/clip-economic-competitions/clip-economic-competitions-15.jpg"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Fraud risk management</p>
          </div>
          <div className="workshop-item">
          <img
              src="https://clipart-library.com/2023/computer-network-computer-security-managed-security-service-data-loss-prevention-software-data-watercolor-paint-wet-ink-system-firewall-vulnerability-cyber-threat-intelligence-png-clipart.jpg"
              alt="Accounting Workshop"
              width="100px" // Adjust width as needed
              height="100px" // Adjust height as needed
            />
            <p>Cyber security management</p>
          </div>
        </div>
        <p>Business development program package</p>
        <p>Online and/or in-person options</p>
        <p>Book via our email: <a href="https://legacy.redefined1@gmail.com">legacy.redefined1@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Courses;
