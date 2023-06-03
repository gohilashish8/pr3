import React from "react";
import { Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter ,  } from "react-icons/fa";

const DoctorBox = ({img ,title , subTitle , description}) => {
  return (
    <Col lg={6} className="p-3">
      <div className="member d-flex align-items-start">
        <div className="pic">
          <img
            src={img}
            className="img-fluid"
            alt="image"
          />
        </div>
        <div className="member-info">
          <h4>{title}</h4>
          <span>{subTitle}</span>
          <p>{description}</p>
          <div className="social">
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DoctorBox;
