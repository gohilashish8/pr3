import React from "react";
import "./footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsSkype,
  BsTwitter,
} from "react-icons/bs";
import { Container } from "react-bootstrap";
const Footer = () => {
  const data = [
    <BsTwitter />,
    <BsFacebook />,
    <BsInstagram />,
    <BsSkype />,
    <BsLinkedin />,
  ];
  return (
    <>
      <footer className="footer">
        <Container className="d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div>
              <h4>Address</h4>
              <p>
                F-505, <br />
                Inovative Plazza
                <br />
                New Delhi, India
                <br />
                <br />
                <strong>Phone:</strong> +91 9988776655
                <br />
                <strong>Email:</strong> cityhospital@example.com
                <br />
              </p>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            {data.map((val, i) => {
              return (
                <a key={i} href="#">
                  {val}
                </a>
              );
            })}
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
