import React from "react";
import { Nav } from "react-bootstrap";

const MainHeader = () => {
  return (
    <header className=" header">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <a href="index.html">
            <h1 className="logo me-auto">City</h1>
            <br />
            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </a>
        </div>
        <Nav className="navbar order-last order-lg-0 ">
          <Nav.Item>
            <Nav.Link className="nav-link scrollto active" href="#">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link scrollto " href="#">
            Departments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link scrollto " href="#">
            Doctors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link scrollto " href="#">
            About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link scrollto " href="#">
            Contact
            </Nav.Link>
          </Nav.Item>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Nav>

        <a href="./pages/appointment.html" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an </span>
          Appointment
        </a>
        <a href="#" className="appointment-btn scrollto d-none d-md-inline">
          <span className="d-none d-md-inline">Login/ Signup</span>
        </a>
      </div>
    </header>
  );
};

export default MainHeader;
