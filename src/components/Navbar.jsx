import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navbarStyle from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbarStyle.nav}>
      <div className={navbarStyle.upper_nav}>
        <button className={`fa-solid fa-gear ${navbarStyle.icon}`}></button>
        <Link to="/" className={navbarStyle.logo}>CipherText</Link>
        <button className={`fa-solid fa-gear ${navbarStyle.icon}`}></button>
      </div>
    </nav>
  );
};

export default Navbar;