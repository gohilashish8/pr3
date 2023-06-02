import React from "react";
import { Col } from "react-bootstrap";

const FacIconBox = ({h4 , fIcon , faP}) => {
  return (
    <Col lg={4} md={6}  className="d-flex align-items-stretch" style={{padding :12}}>
      <div className="icon-box w-100">
        <div className="icon">
          <i className="fas fa-hospital-alt">{fIcon}</i>
        </div>
        <h4>
          <a href="#">{h4}</a>
        </h4>
        <p>{faP}</p>
      </div>
    </Col>
  );
};

export default FacIconBox;
