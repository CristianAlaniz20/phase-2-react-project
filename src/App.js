import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/balls')
   .then(response => response.json())
   .then(data => setBalls(data));
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>World Cup Soccer Balls</h1>
        <img 
          src='https://i.pinimg.com/736x/aa/e1/81/aae1810d59c7908b8b54e5c949b9b2c7.jpg'
          alt='World Cup'
          className='WorldCup' 
        />
        <br />
        <NavBar />
      </header>
      <Outlet context={{ balls, setBalls }} />
    </div>
  );
}

export default App;
