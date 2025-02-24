import React from 'react';
import { Link } from 'react-router-dom';
import footerStyle from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <span className={footerStyle.span}>Made with ❤️ by <Link to="/" className={footerStyle.link}>pratyul-kr</Link></span>
      <span className={footerStyle.span}>Copyright ©️ 2025. All rights Reserved.</span>
    </footer>
  );
};

export default Footer;