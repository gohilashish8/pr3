import React from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialSlider from "./TestimonialSlider";

const Reviews = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Reviews</h2>
        </div>

        <Swiper
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="testimonials-slider"
        >
          <SwiperSlide>
            <TestimonialSlider
              imgSrc={"/images/testimonials/testimonials-1.jpg"}
              h3="Ava Smith"
              h4="Artist"
              p="  Praesent pellentesque leo vestibulum, facilisis ante eget,
                  pharetra mi. Curabitur risus mauris, dignissim ullamcorper
                  vehicula id, aliquet ut turpis. Nunc euismod nec nulla non
                  tincidunt. Vivamus nisi mauris, blandit quis sem sit amet,
                  posuere blandit diam. Cras quis quam suscipit."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialSlider
              imgSrc={"/images/testimonials/testimonials-2.jpg"}
              h3="Abigail Martin"
              h4="Teacher"
              p="  Praesent pellentesque leo vestibulum, facilisis ante eget,
                  pharetra mi. Curabitur risus mauris, dignissim ullamcorper
                  vehicula id, aliquet ut turpis. Nunc euismod nec nulla non
                  tincidunt. Vivamus nisi mauris, blandit quis sem sit amet,
                  posuere blandit diam. Cras quis quam suscipit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlider
              imgSrc={"/images/testimonials/testimonials-5.jpg"}
              h3="Alexander Tremblay"
              h4="Designer"
              p="  Praesent pellentesque leo vestibulum, facilisis ante eget,
                  pharetra mi. Curabitur risus mauris, dignissim ullamcorper
                  vehicula id, aliquet ut turpis. Nunc euismod nec nulla non
                  tincidunt. Vivamus nisi mauris, blandit quis sem sit amet,
                  posuere blandit diam. Cras quis quam suscipit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlider
              imgSrc={"/images/testimonials/testimonials-4.jpg"}
              h3="Jacob Wilsson"
              h4="Writer"
              p="  Praesent pellentesque leo vestibulum, facilisis ante eget,
                  pharetra mi. Curabitur risus mauris, dignissim ullamcorper
                  vehicula id, aliquet ut turpis. Nunc euismod nec nulla non
                  tincidunt. Vivamus nisi mauris, blandit quis sem sit amet,
                  posuere blandit diam. Cras quis quam suscipit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlider
              imgSrc={"/images/testimonials/testimonials-5.jpg"}
              h3="Jayden Brown"
              h4="Entrepreneur"
              p="  Praesent pellentesque leo vestibulum, facilisis ante eget,
                  pharetra mi. Curabitur risus mauris, dignissim ullamcorper
                  vehicula id, aliquet ut turpis. Nunc euismod nec nulla non
                  tincidunt. Vivamus nisi mauris, blandit quis sem sit amet,
                  posuere blandit diam. Cras quis quam suscipit."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
