import React from "react";
import './Facilities.css'
import { Container, Row } from "react-bootstrap";
import FacIconBox from "./FacIconBox";
import { FaBed, FaDna, FaHospital, FaHospitalUser, FaNotesMedical, FaWheelchair } from "react-icons/fa";
const Facilities = () => {
    
  return (
    <section id="services" className="services">
      <Container>
        <div className="section-title">
          <h2>Our Facilities</h2>
          <p>
            Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam
            volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
            Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
            Phasellus placerat mi et suscipit pulvinar. Donec quis tristique
            lectus.
          </p>
        </div>

        <Row>
          <FacIconBox  fIcon={<FaHospital/>}  h4="24x7 Emergency Available" faP="Nullam accumsan, velit et porta consequat, purus leo congue risus"/>
          <FacIconBox  fIcon={<FaBed/>}  h4="40+ Bed Facilities" faP=" Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum"/>
          <FacIconBox  fIcon={<FaHospitalUser/>}  h4="Cardiogram Machine" faP="  Donec lacinia finibus tortor. Curabitur luctus eleifend odio."/>
          <FacIconBox  fIcon={<FaDna/>}  h4="X-ray and Sonography" faP="  Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis."/>
          <FacIconBox  fIcon={<FaWheelchair/>}  h4="Semi Special, Special and Delux Room Available" faP=" Etiam in massa eu neque euismod consectetur."/>
          <FacIconBox  fIcon={<FaNotesMedical/>}  h4="Medical" faP="Morbi vulputate, tortor nec pellentesque molestie"/>
          
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
