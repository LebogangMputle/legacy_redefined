import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Courses from "../../pages/Courses";
import AboutUs from "../../pages/AboutUs";
import Insights from "./Insights";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">

        
      </section>
      <Courses />
      <AboutUs />
      <Insights/>
    </div>
  );
};

export default LandingPage;
