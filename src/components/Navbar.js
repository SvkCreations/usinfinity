import React from 'react'
import logo from '../images/Logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid p-0 m-0">
    <Link className="navbar-brand d-flex align-items-center justify-content-center gap-2 fw-bold" style={{color:'#365c1e'}} to="/"><img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width='30' loading="lazy"/>USinfinity</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/journey">Our Journey</Link>
        </li>
        <li className="nav-item">
          <Link to='/gallery' className="nav-link">Our Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo">ToDoList</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
