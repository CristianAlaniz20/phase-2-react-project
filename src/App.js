import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
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
      <Header />
      <NavBar />
      <Outlet context={{ balls, setBalls }} />
    </div>
  );
}

export default App;
