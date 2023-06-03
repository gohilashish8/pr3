import React from "react";
import "./DepartmentsSection.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import DTab from "./DTab";

const DepartmentsSection = () => {
  return (
    <>
      <section id="departments" className="departments pb-4">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
          </div>
          <Tab.Container id="DepartmentsSection" defaultActiveKey="tab-1">
            <Row className="w-100 h-100 mt-2" style={{ marginBottom: 80 }}>
              <Col lg={3}>
                <Nav className="flex-column  nav-tabs">

                {
                  ['E.N.T' , 'Cancer' , 'Physiotherapy' , 'Dental' , 'Neurosurgery' ].map((val , i) => {
                   return(
                    <Nav.Item key={i}>
                      <Nav.Link  eventKey={`tab-${i+1}`}>{val}</Nav.Link>
                     </Nav.Item>
                   ) 
                  } )
                }
                  
                </Nav>
              </Col>
              <Col lg={9} className="mt-4 mt-lg-0">
                <Tab.Content>
                  <DTab
                    tab="tab-1"
                    h3="E.N.T"
                    firstP=" Q Vestibulum volutpat luctus quam sed finibus. Sed luctus odio eget ex
                             posuere hendrerit. Donec iaculis nisi ut purus dapibus."
                    secP=" Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit
                          diam. Cras quis quam suscipit, tincidunt neque non, ullamcorper
                          erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                          tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac
                          neque."
                    img="/images/Departments/departments-1.jpg"
                  />

                  <DTab
                    tab="tab-2"
                    h3="Cancer"
                    firstP="Quisque sapien ipsum, efficitur ac dui et, fringilla
                          viverra tellus. Proin urna augue, posuere ut
                          pellentesque quis, cursus ac neque."
                    secP=" Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit
                          diam. Cras quis quam suscipit, tincidunt neque non, ullamcorper
                          erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                          tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac
                          neque."
                    img="/images/Departments/departments-2.jpg"
                  />

                  <DTab
                    tab="tab-3"
                    h3="Physiotherapy"
                    firstP="Fusce placerat ornare enim sed varius. Mauris tortor
                          diam, molestie eget vulputate a, facilisis quis nibh.
                          Donec blandit efficitur nulla"
                    secP=" Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit
                          diam. Cras quis quam suscipit, tincidunt neque non, ullamcorper
                          erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                          tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac
                          neque."
                    img="/images/Departments/departments-3.jpg"
                  />

                  <DTab
                    tab="tab-4"
                    h3="Dental"
                    firstP="  sollicitudin sed est. Vestibulum volutpat luctus quam
                          sed finibus. Sed luctus odio eget ex posuere
                          hendrerit. Donec iaculis nisi ut purus."
                    secP=" Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit
                          diam. Cras quis quam suscipit, tincidunt neque non, ullamcorper
                          erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                          tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac
                          neque."
                    img="/images/Departments/departments-4.jpg"
                  />
                  <DTab
                    tab="tab-5"
                    h3="Neurosurgery"
                    firstP="Aliquam sed convallis libero. Proin in mi tempor,
                          convallis lectus sed, convallis mauris. Quisque ac
                          nulla et lorem ultricies vulputate."
                    secP=" Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit
                          diam. Cras quis quam suscipit, tincidunt neque non, ullamcorper
                          erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                          tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac
                          neque."
                    img="/images/Departments/departments-5.jpg"
                  />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
      <div className="py-5"></div>
    </>
  );
};

export default DepartmentsSection;
