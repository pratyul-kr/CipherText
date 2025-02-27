import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarStyle.nav}>
      <div className={navbarStyle.upper_nav}>
        <i className={`fa-solid fa-angle-left ${navbarStyle.icon}`}></i>
        <Link to="/" className={navbarStyle.logo}>
          CipherText
        </Link>
        <i className={`fa-regular fa-user-circle ${navbarStyle.icon}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
