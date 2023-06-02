import React, { useState } from "react";
import "./Gallery.css";
import GalleryImages from "./GalleryImages";

const Gallery = () => {
  const [toggler, setToggler] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row ">
          {[
            "/images/gallery/gallery-1.jpg",
            "/images/gallery/gallery-2.jpg",
            "/images/gallery/gallery-3.jpg",
            "/images/gallery/gallery-4.jpg",
            "/images/gallery/gallery-5.jpg",
            "/images/gallery/gallery-6.jpg",
            "/images/gallery/gallery-7.jpg",
            "/images/gallery/gallery-8.jpg",
          ].map((e, i) => (
            <GalleryImages key={i} img={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
