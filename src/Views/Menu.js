// src/Views/Menu.js

import React from 'react';
import espressoImg from '../assets/images/espresso.jpg';
import cappuccinoImg from '../assets/images/cappuccino.jpg';
import coldbrewImg from '../assets/images/coldbrew.jpg';
import './Menu.css'; // optional, if you want to extract styling

const items = [
  {
    name: 'Sunrise Espresso',
    description: 'Bright, citrusy, and bold—kickstarts your morning with a spark.',
    image: espressoImg
  },
  {
    name: 'Velvet Cappuccino',
    description: 'Smooth steamed milk folded into dark roasted perfection.',
    image: cappuccinoImg
  },
  {
    name: 'Cold Brew Rush',
    description: 'Steeped 16 hours. Naturally sweet. Surprisingly smooth.',
    image: coldbrewImg
  }
];

const Menu = () => {
  return (
    <section className="menu-container">
      {items.map((item, index) => (
        <div className="menu-item" key={index}>
          <div className="steam"></div> {/* This creates the steam layer */}
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};



  

export default Menu;

