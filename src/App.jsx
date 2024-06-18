import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CourseLayout from "./components/CourseLayout";
import CourseDetails from "./components/CourseDetails";
import Integration from "./components/Integration";
import Features from "./components/Features";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<Home />} />
            <Route path="course-layout" element={<CourseLayout />} />
            <Route path="course-detail" element={<CourseDetails />} />
            <Route path="integration" element={<Integration />} />
            <Route path="features" element={<Features />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
