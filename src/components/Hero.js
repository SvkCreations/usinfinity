import React from 'react'
import hero from '../images/hero.png'
import { Icon } from "@iconify/react";
import { saveAs } from 'file-saver'
import { Link } from 'react-router';

export default function Hero() {
  const downloadImage = () => {
    saveAs('https://drive.google.com/file/d/1PQPPT7n3xP9Qdvd11ZuwXS6V8XtyhGh1/view?usp=sharing', 'HBD.jpg')
  }
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 mt-0 mt-md-2 py-0 py-md-4">
      <div className="col-12 col-sm-12 col-lg-6" data-aos="fade-up">
        <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height='600' loading="lazy"/>
      </div>
      <div className="col-lg-6" data-aos="fade-up">
        <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-2">Happy Birthday my dear!</h1>
        <p className='lead col-lg-11'>Happy Birthday to one of the most beautiful, amazing, and loving person I know! Today is all about celebrating you, and I feel incredibly lucky to be the one by your side on this special day. Every moment we’ve shared has been a treasure, and I can’t wait to make even more memories with you. I made this website for you as your birthday gift. Hope you like it!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start my-4">
          <button onClick={downloadImage} type="button" className="btn primary-btn btn-lg px-4 me-md-2 d-flex align-items-center gap-2 justify-content-center" fdprocessedid="dotu0j"><Icon icon="line-md:download-loop" width="24" height="24" />Download Card</button>
          <Link to='/journey' onClick={()=>{window.scrollTo(0, 0)}} type="button" className="btn secondary-btn btn-lg px-4 d-flex align-items-center gap-2 justify-content-center" fdprocessedid="tpw6zi"><Icon icon="lsicon:path-filled" width="24" height="24" />Our Journey</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
