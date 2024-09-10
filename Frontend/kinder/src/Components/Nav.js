import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./css/style.css";

const Navbar = () => {
  // Example state to simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
          <i className="flaticon-043-teddy-bear"></i>
          <span className="text-primary">KidKinder</span>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/class" className="nav-item nav-link">Classes</Link>
            <Link to="/team" className="nav-item nav-link">Teachers</Link>
            <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/blog" className="dropdown-item">Blog Grid</Link>
                <Link to="/single" className="dropdown-item">Blog Detail</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          {isLoggedIn ? (
            <button className="btn btn-secondary px-4" onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <Link to="/login" className="btn btn-primary px-4">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
