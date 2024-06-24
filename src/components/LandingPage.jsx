import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Courses from "../../pages/Courses";
import About from "../../pages/AboutUs";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header/>
      <section className="hero">
        <h1>Here is a Hero section</h1>
      </section>
      <Courses/>
      <About/>
    </div>
  );
};

export default LandingPage;
