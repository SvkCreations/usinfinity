import React from 'react'
import logo from '../images/Logo.png'
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Navbar() {
  const location = useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0 m-0">
          <Link className="navbar-brand d-flex align-items-center justify-content-center gap-2 fw-bold" style={{ color: '#365c1e' }} to="/usinfinity/"><img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width='30' loading="lazy" />USinfinity</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={location.pathname === '/usinfinity/'? "active nav-link": "nav-link" } aria-current="page" to="/usinfinity/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === '/about'? "active nav-link": "nav-link" } to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === '/journey'? "active nav-link": "nav-link" } to="/journey">Our Journey</Link>
              </li>
              <li className="nav-item">
                <Link to='/gallery' className={location.pathname === '/gallery'? "active nav-link": "nav-link" }>Our Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to='/playlist' className={location.pathname === '/playlist'? "active nav-link": "nav-link" }>Our Playlist</Link>
              </li>
              <li className="nav-item">
                <Link to='/countdown' className={location.pathname === '/playlist'? "active nav-link": "nav-link" }>Countdown</Link>
              </li>
              <li className="nav-item">
                <Link to='/quiz' className="d-flex align-items-center p-2 gap-1 quiz-link mx-md-3 my-2 my-md-0"><Icon icon="mage:light-bulb" width="24" height="24" />Take a Quiz</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
