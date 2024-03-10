import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>World Cup Soccer Balls</h1>
        <img 
          src='https://i.pinimg.com/736x/aa/e1/81/aae1810d59c7908b8b54e5c949b9b2c7.jpg'
          alt='World Cup' 
        />
        <br />
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
