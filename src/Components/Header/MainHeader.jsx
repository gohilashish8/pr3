import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className=" header">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <Link to="/">
            <h1 className="logo me-auto">City</h1>
            <br />
            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </Link>
        </div>
        <Nav className="navbar order-last order-lg-0 ">
          <Nav.Item>
            <Link
              className={`nav-link scrollto ${
                pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link scrollto ${
                pathname === "/departments" ? "active" : ""
              }`}
              to="/departments"
            >
              Departments
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link scrollto ${
                pathname === "/doctors" ? "active" : ""
              }`}
              to="/doctors"
            >
              Doctors
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link scrollto ${
                pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link scrollto ${
                pathname === "/contact" ? "active" : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </Nav.Item>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Nav>

        <Link to="/appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an </span>
          Appointment
        </Link>
        <a href="#" className={`appointment-btn scrollto d-none ${pathname === "/" ? "d-none d-md-inline" : ""} `}>
          <span className="d-none d-md-inline">Login/ Signup</span>
        </a>
      </div>
    </header>
  );
};

export default MainHeader;
