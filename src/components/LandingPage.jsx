import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Courses from "../../pages/Courses/Courses";
import AboutUs from "../../pages/AboutUs";
import Insights from "./Insights";
import '../../src/components/LandingPage.css'




const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      <img
        src="https://media.licdn.com/dms/image/C4D0BAQHyCvbAh6do1g/company-logo_200_200/0/1669926955056?e=1727308800&v=beta&t=89bPiTA-CwAzAP3YjkakrCB1u4OZvykuEdZZUl5BCgc"
        alt="Courses Logo"
        className="background-image animated fadeIn" // Apply animation class
      />

      <div className="content">
        <h1 className="H1">Legacy Redefined</h1>
        <p>Redefining business processes and risk</p>
        <p>Your distinguished business process and risk experts</p>
      </div>
      <Courses />
      <AboutUs/>
      <Insights />
    </div>
  );
};

export default LandingPage;
