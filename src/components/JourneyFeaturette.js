import React from 'react'
import journey from '../images/journey.png'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router'

export default function JourneyFeaturette() {
    return (
        <div>
            <div className="row featurette d-flex flex-row-reverse align-items-center my-3 py-3 py-md-5">
                <div className="col-md-7 order-md-2" data-aos="fade-up">
                    <h1 className="featurette-heading fw-bold display-1" data-aos="fade-up">Our Journey So far</h1>
                    <p className='col col-md-10'>Looking back on our journey together fills my heart with so much gratitude. We’ve shared beautiful highs, faced challenges with strength, and grown closer through it all. Every laugh, every adventure, and even the quiet moments have made our bond deeper and more meaningful.</p>
                    <p className="lead fw-bold mt-3 pb-0 mb-0 d-flex align-items-center gap-2" style={{ color: '#365c1e' }} data-aos="fade-up"><span className="material-symbols-outlined">calendar_month</span>18th November,2023</p>
                    <p data-aos="fade-up">That was the first time we talked to each other on facebook.</p>
                    <p className="lead fw-bold mt-3 pb-0 mb-0 d-flex align-items-center gap-2" style={{ color: '#365c1e' }} data-aos="fade-up"><span className="material-symbols-outlined">calendar_month</span>5th December,2023</p>
                    <p data-aos="fade-up">We met the first time at Patuli. We had tea of 100/- from Nachiketa's tea.</p>
                    <p className="lead fw-bold mt-3 pb-0 mb-0 d-flex align-items-center gap-2" style={{ color: '#365c1e' }} data-aos="fade-up"><span className="material-symbols-outlined">calendar_month</span>14th December,2023</p>
                    <p data-aos="fade-up">Soubhik first time confessed to Udhrity that he likes her, like really likes her.</p>
                    <p className="lead fw-bold mt-3 pb-0 mb-0 d-flex align-items-center gap-2" style={{ color: '#365c1e' }} data-aos="fade-up"><span className="material-symbols-outlined">calendar_month</span>24th December,2023</p>
                    <p data-aos="fade-up">Our first movie date - "Pradhan" at Hiland Park.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start my-4" data-aos="fade-up">
                        <Link onClick={()=>{window.scrollTo(0, 0)}} to='/journey' type="button" className="btn primary-btn btn-lg px-4 me-md-2 d-flex align-items-center gap-2 justify-content-center" fdprocessedid="dotu0j"><Icon icon="lsicon:path-filled" width="24" height="24" />Explore Complete Journey</Link>
                    </div>
                </div>
                <div className="col-md-5 order-md-1" data-aos="fade-up">
                    <img src={journey} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-5" width="600" />
                </div>
            </div>
        </div>
    )
}
