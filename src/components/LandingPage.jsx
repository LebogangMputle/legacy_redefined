import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Courses from "../../pages/Courses";
import AboutUs from "../../pages/AboutUs";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header/>
      <section className="hero">
        <h1>Here is a Hero section</h1>
      </section>
      <Courses/>
      <AboutUs/>
    </div>
  );
};

export default LandingPage;
