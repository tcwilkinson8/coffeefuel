// src/Views/About.js

import React from 'react';
import './About.css';
import aboutImg from '../assets/images/coffee_about.jpg'; // make sure this image exists

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Coffeefuel</h2>
        <p>
          At Coffeefuel, we believe in more than just a caffeine kick—we craft moments. Every cup tells a story: of carefully selected beans, slow-brewed rituals, and cozy, creative spaces where ideas come to life.
        </p>
        <p>
          Whether you're powering a morning sprint or winding down with a smooth cold brew, Coffeefuel is your steady companion. Built by dreamers, brewed for doers.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="Fresh coffee beans and a warm brew" />
      </div>
    </section>
  );
};

export default About;
