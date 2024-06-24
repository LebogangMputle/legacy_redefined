import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Courses from "../pages/Courses";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import OurServices from "../pages/OurServices";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="courses" element={<Courses />} />
            <Route path="aboutUs" element={<AboutUs/>} />
            <Route path="contactUs" element={<ContactUs/>} />
            <Route path="services" element={<OurServices />} />
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
