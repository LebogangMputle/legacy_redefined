import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Educrat</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/course-layout">Course Layout</Link>
          <Link to="/course-detail">Course Detail</Link>
          <Link to="/integration">Integration</Link>
          <Link to="/features">Features</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>
            Educrat gives you the tools to build an Education site using WordPress like never before.
            <br />
            <span className="highlight">Premium Education & LMS WordPress Theme</span>
          </h1>
          <button className="view-demos">View Demos</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/400x400" // Placeholder image
            alt="Educrat Preview"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
