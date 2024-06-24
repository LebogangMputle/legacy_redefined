import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
<<<<<<< HEAD
import Courses from "../../pages/Courses";
import AboutUs from "../../pages/AboutUs";
import Insights from "./Insights";

=======
import Courses from "../../pages/Courses/Courses";
import About from "../../pages/AboutUs";
// import './LandingPage.css'
>>>>>>> 7bfbbc3f29b323d0efa93057427af71b99c98a5a

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
<<<<<<< HEAD
      <section className="hero">

        
      </section>
      <Courses />
      <AboutUs />
      <Insights/>
=======
      <img
        src="https://media.licdn.com/dms/image/C4D0BAQHyCvbAh6do1g/company-logo_200_200/0/1669926955056?e=1727308800&v=beta&t=89bPiTA-CwAzAP3YjkakrCB1u4OZvykuEdZZUl5BCgc"
        alt="Courses Logo"
        className="background-image animated fadeIn" // Apply animation class
      />
      <div className="content">
        <h1>Legacy Redefined</h1>
        <p>Redefining business processes and risk</p>
        <p>Your distinguished business process and risk experts</p>
      </div>
      <Courses />
      <About />
>>>>>>> 7bfbbc3f29b323d0efa93057427af71b99c98a5a
    </div>
  );
};

export default LandingPage;
