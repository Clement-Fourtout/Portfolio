// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projet from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Projet />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
