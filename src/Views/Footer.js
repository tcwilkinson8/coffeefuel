// src/Views/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Coffeefuel. Crafted with care in every cup.</p>
        <ul className="footer-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li> {/* Optional for the future */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
