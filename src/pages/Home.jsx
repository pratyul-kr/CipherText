import React from 'react';
import { Link } from 'react-router-dom';
import homeStyle from './Home.module.css';

const Home = () => {
  return (
    <main className={homeStyle.main}>
      <span className={homeStyle.guest}>Select a cipher technique...</span>
      <div className={homeStyle.div}>
        <Link to="/caesar" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Caesar Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/monoalphabetic" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Monoalphabetic Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/homophonic" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Homophonic Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/playfair" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Playfair Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
      </div>
    </main>
  );
};

export default Home;