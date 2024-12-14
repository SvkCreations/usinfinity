import React from 'react'
import img01 from '../images/gallery/gallery (1).jpg'
import img02 from '../images/gallery/gallery (2).jpg'
import img03 from '../images/gallery/gallery (3).jpg'
import img04 from '../images/gallery/gallery (4).jpg'
import img05 from '../images/gallery/gallery (5).jpg'
import img06 from '../images/gallery/gallery (6).jpg'
import img07 from '../images/gallery/gallery (7).jpg'
import img08 from '../images/gallery/gallery (8).jpg'
import img09 from '../images/gallery/gallery (9).jpg'
import img10 from '../images/gallery/gallery (10).jpg'
import img11 from '../images/gallery/gallery (11).jpg'
import img12 from '../images/gallery/gallery (12).jpg'
import img13 from '../images/gallery/gallery (13).jpg'
import img14 from '../images/gallery/gallery (14).jpg'
import img15 from '../images/gallery/gallery (15).jpg'
import img16 from '../images/gallery/gallery (16).jpg'

export default function Gallery() {
  let gallery = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16]

  return (
    <div>
      <div className="py-3 my-3 my-md-5" id="custom-cards">
        <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }}>
          <h1 className="display-1 fw-bold" data-aos="fade-up">Our Gallery</h1>
        </div>
        <p className='lead' data-aos="fade-up">Welcome to our photo gallery! This space is a collection of moments we've shared—adventures, milestones, and little snippets of our everyday lives. Each photo tells a story, and together, they create a visual journey of our time together. Whether it's a candid shot from a spontaneous outing or a cherished memory from a special day, these pictures capture the essence of our love and the memories we've built.
        <br/>We hope you enjoy looking through them as much as we enjoyed living them.</p>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
          {gallery.map((img) => (
            <div className="col" key={img} data-aos="fade-up">
              <div className="card card-cover overflow-hidden rounded-4" >
                <div className="d-flex justify-content-center h-100 text-white text-shadow-1">
                  <img className='img-fluid text-center' src={img} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}
