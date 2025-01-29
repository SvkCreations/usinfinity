import React from 'react'
import img01 from '../images/gallery/2023/nandan_2023.jpeg'
import img02 from '../images/gallery/2023/hiland park 02_2023.jpg'
import img03 from '../images/gallery/2023/dakshineshwar 02_2024.jpg'
import img04 from '../images/gallery/2023/lake holi_2024.jpg'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router'

export default function GalleryFeaturette() {
    let gallery = [img01, img02, img03, img04]
    return (
        <div>
            <div className="py-3 py-md-5 my-3 my-md-5" id="custom-cards">
                <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }}>
                    <h1 className="display-1 fw-bold" data-aos="fade-up">Rewind our year</h1>

                </div>
                <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }}>
                    <p className='lead col-12 col-md-10 col-lg-8 text-center' data-aos="fade-up">As this year comes to a close, I can’t help but reflect on how incredible it’s been with you by my side. From our adventures to quiet moments, every day felt special because of you. We laughed, learned, and grew together, creating memories I’ll treasure forever. </p>
                    <Link onClick={() => { window.scrollTo(0, 0) }} to='/gallery' className="btn secondary-btn fw-bold d-flex align-items-center gap-2 justify-content-center" data-aos="fade-up" style={{ color: '#365c1e' }}><Icon icon="solar:gallery-bold" width="20" height="20" />Explore Gallery</Link>
                </div>
                <div className="my-4 row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
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
