import React from 'react';
import { Link } from 'react-router-dom';
import homeStyle from './Home.module.css';

const Home = () => {
  return (
    <main className={homeStyle.main}>
      <div className={homeStyle.div}>
        <Link to="/caesar" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Caesar Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/playfair" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Playfair Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <Link to="/hill" className={homeStyle.link_container}>
          <span className={homeStyle.cipher}>Hill Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </Link>
        <ink to="/monoalphabetic" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Monoalphabetic Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/homophonic" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Homophonic Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
        <ink to="/" className={homeStyle.link_container_disable}>
          <span className={homeStyle.cipher}>Cipher</span>
          <i className={`fa-solid fa-angle-right ${homeStyle.icon}`}></i>
        </ink>
      </div>
    </main>
  );
};

export default Home;