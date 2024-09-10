// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav.js'; // Your navigation component
import Header from './Components/Header.js';
import Facilities from './Components/Facilities.js';
import Start from './Components/Start.js';
import Add from './Components/Add.js';
import Form from './Components/Form.js';
import Teacher from './Components/Teacher.js';
import Parents from './Components/Parents.js';
import Article from './Components/Article.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login.js'; // Import the Login component
import Dashboard from './Components/Dashboard.js'; // Import the Dashboard component

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define the main page route */}
          <Route path="/" element={
            <>
              <Header />
              <Facilities />
              <Start />
              <Add />
              <Form />
              <Teacher />
              <Parents />
              <Article />
              <Footer />
            </>
          } />

        
          <Route path="/login" element={<Login />} />

          
          <Route path="/dashboard/*" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
