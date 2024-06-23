import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="logo">Legacy</Link>
        <nav className="nav">
          <Link to="/services">Our Services</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
  )
}

export default Header
