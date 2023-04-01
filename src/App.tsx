import React from 'react';
import axios from 'axios'
import './App.css';
import Welcome from './loginPage/Welcome'

function App() {
  const request = axios('http://localhost:8000/create-user').then(data => {
    console.log(data)
  })

  return (
    <div className="App">
     <Welcome/>
    </div>
  );
}

export default App;
