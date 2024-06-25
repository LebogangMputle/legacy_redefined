// import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <Link to="/" className="logo">Legacy</Link>
        <nav className="nav">
          <a to="#services">Our Services</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a to="#contact">Contact Us</a>
          <Link to="/login">Log In</Link>
        </nav>
      </header>
  )
}

export default Header
