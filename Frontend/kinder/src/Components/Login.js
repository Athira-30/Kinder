// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Nav.js';
import Dashboard from './Dashboard.js'; 

function App() {
  return (
    
    <>
    <Navbar />
      
      <Dashboard />
      </>
        
       

  );
}

export default App;
