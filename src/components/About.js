import React from 'react'
import about from '../assets/about.json'
import Lottie from "lottie-react";

export default function About() {
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 mt-0 mt-md-2 py-0">
        <div className="col-12 col-sm-12 col-lg-6" data-aos="fade-up">
          {/* <img src={about} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width='500' loading="lazy" /> */}
          <Lottie className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" animationData={about} style={{maxWidth:'500px'}} loop={true} />
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-2">The Lyadkhor Couple</h1>
          <p className='lead col-lg-11'>Welcome to the 'USinfinity'. We are Soubhik (25, Graphic Designer) and Udhrity (24, Lab Technologist), a pair of kindred spirits who found love in each other's arms. Our journey of togetherness began on 18 November, 2023 and since then, we have been on an adventure filled with laughter, love and countless unforgettable moments. In this website, we shall be sharing our story, our dreams and our deepest thoughts as we continue to write the chapters of our love story together. &#128522;&#x2665;&#xfe0f;</p>
        </div>
      </div>
    </div>
  )
}
