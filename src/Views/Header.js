

import './Header.css'; 

const Header = () => (
  <header className="coffee-header">
    <div className="overlay">
      <nav className="navbar">
        <div className="logo">Coffeefuel</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1>Fuel Your Day with Every Sip</h1>
        <p>Crafted brews and curated beans to energize your hustle.</p>
        <a href="#menu" className="cta-button">Explore the Menu</a>
      </div>
    </div>
  </header>
);

export default Header;
