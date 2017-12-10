import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-white.png';

export default function(props) {
  return (
    <nav className="navbar is-black">
      <div className="navbar-menu container ">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={Logo} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </Link>
          <div className="navbar-burger burger" data-target="navMenuColorblack-example">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <div className="navbar-start">
          <a className="navbar-item" href="#">Home</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#">Menu</a>
          </div>
          <div className="navbar-dropdown">
              <a className="navbar-item" href="#">
                Overview
              </a>
            </div>
        </div> */}
      </div>
    </nav>
  );
}
