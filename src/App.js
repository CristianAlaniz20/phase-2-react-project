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
        <img 
          src='https://thumbs.dreamstime.com/b/fifa-world-cup-thropy-reproduction-original-soccer-isolated-white-gold-trophy-awarded-to-winners-41868445.jpg'
          alt='World Cup'
          className='WorldCup' 
        />
        <h1>World Cup Soccer Balls</h1>
        <img 
          src='https://thumbs.dreamstime.com/b/fifa-world-cup-thropy-reproduction-original-soccer-isolated-white-gold-trophy-awarded-to-winners-41868445.jpg'
          alt='World Cup'
          className='WorldCup' 
        />
      </header>
      <NavBar />
      <Outlet context={{ balls, setBalls }} />
    </div>
  );
}

export default App;
