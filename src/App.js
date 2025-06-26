// src/App.js

import firebaseApp from './firebase/firebaseConfig'; // ✅ Move this to the top

// src/App.js
import React from 'react';
import './App.css';
import HomePage from './Views/HomePage';
import Header from './Views/Header';
import './Views/Header.css';
import Menu from './Views/Menu';
import About from './Views/About';
import Footer from './Views/Footer';
import Contact from './Views/Contact';
import Order from './Views/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <About />
      <Contact />
      <Order />
      <Footer />
    </div>
  );
}
export default App;

