import React from 'react';
import './global.css';
import Welcome from './loginPage/Welcome.js'
import LoadingScreen from './loginPage/LoadingScreen.js';

function App() {
  return (
    <React.Fragment>
      <LoadingScreen/>
      <Welcome/>
    </React.Fragment>
  );
}

export default App;
