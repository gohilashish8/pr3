import React from "react";
import { Container } from "react-bootstrap";
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";



function TopBar() {
  return (
    <div className="d-flex align-items-center  topbar">
      <Container className=" d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <BsEnvelope />
          <a href="mailto:contact@example.com">cityhospital@example.com</a>
          <BsPhone /> +91 9988776655
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter">
            <BsTwitter />
          </a>
          <a href="#" className="facebook">
            <BsFacebook />
          </a>
          <a href="#" className="instagram">
            <BsInstagram />
          </a>
          <a href="#" className="linkedin">
            <BsLinkedin />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
