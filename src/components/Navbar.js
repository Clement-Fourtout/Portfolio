// src/components/Navbar.js
import React from 'react';
import '../style/Navbar.css';  // Nous ajouterons du CSS plus tard

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mon Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#about">À propos de moi</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#espace">Mon Espace</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
