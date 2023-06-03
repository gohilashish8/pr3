import React from "react";
import { Col, Row, Tab } from "react-bootstrap";

const DTab = ({tab , h3 , firstP , secP , img}) => {
  return (
    <Tab.Pane eventKey={tab}>
      <Row>
        <Col lg={8} className="details order-2 order-lg-1">
          <h3>{h3}</h3>
          <p className="fst-italic">
           {firstP}
          </p>
          <p>
           {secP}
          </p>
        </Col>
        <Col lg={4} className=" text-center order-1 order-lg-2">
          <img
            src={img}
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Tab.Pane>
  );
};

export default DTab;
