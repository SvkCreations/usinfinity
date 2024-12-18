import React, { useEffect, useState } from 'react'
import hero from '../images/hero.png'
import { Icon } from "@iconify/react";
import { Link } from 'react-router';
import party from 'party-js';
import img from '../images/about.jpg'

export default function Hero() {
  const downloadBtnClick = (event) => {
    party.confetti(event.target, {
      count: 200,
      color: party.Color.fromHex("#FF69B4"),
      size: party.variation.range(0.8, 1.5),
      spread: 100
    })
  }

  const [letter, setLetter] = useState('');

  const fullLetter = `Haappy Birthday my dear!`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullLetter.length-1) {
        setLetter((prev) => prev + fullLetter[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 mt-0 mt-md-2 py-0 py-md-4">
        <div className="col-12 col-sm-12 col-lg-6" data-aos="fade-up">
          <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height='600' loading="lazy" />
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <h1 className="display-1 fw-bold text-body-emphasis lh-1 mb-2">{letter}</h1>
          <p className='lead col-lg-11'>Happy Birthday to one of the most beautiful, amazing, and loving person I know! Today is all about celebrating you, and I feel incredibly lucky to be the one by your side on this special day. Every moment we’ve shared has been a treasure, and I can’t wait to make even more memories with you. I made this website for you as your birthday gift. Hope you like it!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start my-4">
            <a href={img} download={img} onClick={downloadBtnClick} type="button" className="btn primary-btn btn-lg px-4 me-md-2 d-flex align-items-center gap-2 justify-content-center" fdprocessedid="dotu0j"><Icon icon="line-md:download-loop" width="24" height="24" />Download Card</a>
            <Link to='/journey' onClick={() => { window.scrollTo(0, 0) }} type="button" className="btn secondary-btn btn-lg px-4 d-flex align-items-center gap-2 justify-content-center" fdprocessedid="tpw6zi"><Icon icon="lsicon:path-filled" width="24" height="24" />Our Journey</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
