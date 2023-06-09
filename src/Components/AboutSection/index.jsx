import React from 'react'
import './aboutSection.css'

const AboutSection = () => {
  return (
  <>
      <section  className="about">
    <div className="container">

      <div className="row">


        <div
          className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
          <h3 className='fw-bold mb-2'>Fusce nec risus at enim congue bibendum quis at augue. </h3>
          <p>Proin tincidunt blandit fermentum. Ut gravida arcu non mi dapibus ullamcorper. Curabitur mollis, turpis eu
            pellentesque finibus, nisi ex mattis quam, mollis aliquet mi massa non nunc. Pellentesque id felis elit.
            Pellentesque blandit sem a nisi dictum, in pretium ante tincidunt.</p>
          <p>Maecenas lobortis, nunc eu porttitor posuere, neque lectus rutrum leo, sit amet rutrum orci eros aliquam
            mauris. Aliquam erat volutpat. Aenean eget dui ac lectus rutrum aliquam pulvinar ut massa. Duis sagittis
            rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem </p>
        </div>
      </div>

    </div>
  </section>
  <div className="py-5"></div>
  <div className="py-5"></div>
  <div className="py-4"></div>
  </>
  )
}

export default AboutSection