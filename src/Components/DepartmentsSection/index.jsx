import React from "react";
import "./DepartmentsSection.css";
import { Nav, Tab } from "react-bootstrap";

const DepartmentsSection = () => {
  return (
    <>
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
          </div>
          <Tab.Container id="DepartmentsSection" defaultActiveKey="tab-1">
            <div className="row">
              <div className="col-lg-3">
                <Nav className="flex-column  nav-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-1">E.N.T</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-2">Cancer</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-3">Physiotherapy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-4">Dental</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-5">Neurosurgery</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <Tab.Content>
                  <Tab.Pane eventKey="tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>E.N.T</h3>
                        <p className="fst-italic">
                          Vestibulum volutpat luctus quam sed finibus. Sed
                          luctus odio eget ex posuere hendrerit. Donec iaculis
                          nisi ut purus dapibus
                        </p>
                        <p>
                          Vivamus nisi mauris, blandit quis sem sit amet,
                          posuere blandit diam. Cras quis quam suscipit,
                          tincidunt neque non, ullamcorper erat. Quisque sapien
                          ipsum, efficitur ac dui et, fringilla viverra tellus.
                          Proin urna augue, posuere ut pellentesque quis, cursus
                          ac neque.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/images/Departments/departments-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Cancer</h3>
                        <p className="fst-italic">
                          Quisque sapien ipsum, efficitur ac dui et, fringilla
                          viverra tellus. Proin urna augue, posuere ut
                          pellentesque quis, cursus ac neque.
                        </p>
                        <p>
                          Vivamus nisi mauris, blandit quis sem sit amet,
                          posuere blandit diam. Cras quis quam suscipit,
                          tincidunt neque non, ullamcorper erat. Quisque sapien
                          ipsum, efficitur ac dui et, fringilla viverra tellus.
                          Proin urna augue, posuere ut pellentesque quis, cursus
                          ac neque.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/images/Departments/departments-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Physiotherapy</h3>
                        <p className="fst-italic">
                          Fusce placerat ornare enim sed varius. Mauris tortor
                          diam, molestie eget vulputate a, facilisis quis nibh.
                          Donec blandit efficitur nulla
                        </p>
                        <p>
                          Vivamus nisi mauris, blandit quis sem sit amet,
                          posuere blandit diam. Cras quis quam suscipit,
                          tincidunt neque non, ullamcorper erat. Quisque sapien
                          ipsum, efficitur ac dui et, fringilla viverra tellus.
                          Proin urna augue, posuere ut pellentesque quis, cursus
                          ac neque.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/images/Departments/departments-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Dental</h3>
                        <p className="fst-italic">
                          {" "}
                          sollicitudin sed est. Vestibulum volutpat luctus quam
                          sed finibus. Sed luctus odio eget ex posuere
                          hendrerit. Donec iaculis nisi ut purus.
                        </p>
                        <p>
                          Vivamus nisi mauris, blandit quis sem sit amet,
                          posuere blandit diam. Cras quis quam suscipit,
                          tincidunt neque non, ullamcorper erat. Quisque sapien
                          ipsum, efficitur ac dui et, fringilla viverra tellus.
                          Proin urna augue, posuere ut pellentesque quis, cursus
                          ac neque.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/images/Departments/departments-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Neurosurgery</h3>
                        <p className="fst-italic">
                          Aliquam sed convallis libero. Proin in mi tempor,
                          convallis lectus sed, convallis mauris. Quisque ac
                          nulla et lorem ultricies vulputate.
                        </p>
                        <p>
                          Vivamus nisi mauris, blandit quis sem sit amet,
                          posuere blandit diam. Cras quis quam suscipit,
                          tincidunt neque non, ullamcorper erat. Quisque sapien
                          ipsum, efficitur ac dui et, fringilla viverra tellus.
                          Proin urna augue, posuere ut pellentesque quis, cursus
                          ac neque.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/images/Departments/departments-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                   </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
    </>
  );
};

export default DepartmentsSection;
