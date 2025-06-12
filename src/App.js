// src/App.js

import firebaseApp from './firebase/firebaseConfig'; // ✅ Move this to the top

// App.js
const App = () => {
    return (
      <div style={{ backgroundColor: 'white', color: 'black', padding: '50px' }}>
        <h1>Coffeefuel is brewing...</h1>
      </div>
    );
  };
  
  export default App;
  

