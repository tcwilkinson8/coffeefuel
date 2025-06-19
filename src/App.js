// src/App.js

import firebaseApp from './firebase/firebaseConfig'; // ✅ Move this to the top

// src/App.js
import React from 'react';
import './App.css';
import HomePage from './Views/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
export default App;

