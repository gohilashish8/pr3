import React from "react";
import "./DoctorsSection.css";

import { Col, Row } from "react-bootstrap";
import DoctorBox from "./DoctorBox";

const DoctorsSection = () => {
  return (
    <section className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
            Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
            Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
            erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam
            ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu sagittis nec.
            Phasellus a eleifend elit.
          </p>
        </div>

        <Row >
         
            <DoctorBox img="/images/doctors/doctors-1.jpg" title='Atha Smith' subTitle="Chief Medical Officer"  description="Duis sagittis rutrum neque, quis tincidunt arcu pretium ac." />
            
            <DoctorBox img="/images/doctors/doctors-2.jpg" title='John White' subTitle="Anesthesiologist"  description="Aenean ac turpis ante. Mauris velit sapien." />
            
            <DoctorBox img="/images/doctors/doctors-3.jpg" title='Umika Loha' subTitle="Cardiology"  description="Curabitur luctus eleifend odio. Phasellus placerat mi." />
            
        
            <DoctorBox img="/images/doctors/doctors-4.jpg" title='Daimy Smith' subTitle="Neurosurgeon"  description=" Duis sagittis rutrum neque, quis tincidunt arcu pretium ac." />
            
        
        </Row>
      </div>
    </section>
  );
};

export default DoctorsSection;
