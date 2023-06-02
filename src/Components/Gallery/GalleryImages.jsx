import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import { Col } from "react-bootstrap";

const GalleryImages = ({img}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Col lg={3} md={4} className="d-flex justify-content-center align-items-center px-0 ">
      <div className="gallery-item">
        <img
          src={img}
          alt="image"
          onClick={() => setIsOpen(!isOpen)}
          className="img-fluid"
        />
        <FsLightbox
          sources={[img]}
          toggler={isOpen}
        />
      </div>
    </Col>
  );
};

export default GalleryImages;
