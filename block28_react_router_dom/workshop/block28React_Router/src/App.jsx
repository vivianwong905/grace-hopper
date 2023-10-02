import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import "./index.css";
import RedColor from './Red';
import BlueColor from './Blue';
import Home from './Home';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
          <Link to="/">home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<BlueColor />} />
            <Route path="/red" element={<RedColor />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
