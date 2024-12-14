import React from 'react'
import pic from '../images/pic.jpg'

export default function Explore() {
    return (
        <div>
            <div className="row featurette mt-3 mb-3 align-items-center">
                <div className="col-md-8 order-md-2" data-aos="fade-up">
                    <h1 className="featurette-heading fw-normal display-3" data-aos="fade-up">My Dearest Love,</h1>
                    <p className="lead" data-aos="fade-up">From the moment you came into my life, everything changed for the better. Your laughter is the sweetest melody, your smile the brightest light, and your love the greatest gift I could ever receive. You have a way of making even the simplest moments feel magical, and I’m endlessly grateful for the joy and warmth you bring to my world.<br />
                        I hope today brings you as much happiness as you’ve given me. May your dreams soar higher than the stars, and may every wish you make come true. I promise to be by your side, loving you fiercely and endlessly, through every adventure and challenge that life brings our way.<br/>
                        On your birthday and always, know that you are my heart, my home, and my greatest blessing. I love you more than words can ever express, and I’m so excited for all the beautiful memories we have yet to create together.</p>
                </div>
                <div className="col-md-4 order-md-1" data-aos="fade-up">
                    <img src={pic} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-5" width="500" height="500" />
                </div>
            </div>
        </div>
    )
}
