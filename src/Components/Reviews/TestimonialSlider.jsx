import React from 'react'

const TestimonialSlider = ({imgSrc , h3 ,h4 ,p}) => {
  return (
    <div className="testimonial-wrap">
    <div className="testimonial-item">
      <img
        src={imgSrc}
        className="testimonial-img"
        alt="Image"
      />
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
       {p}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
    </div>
  </div>
  )
}

export default TestimonialSlider