import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
      <ul className="footer-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#about">À propos de moi</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#espace">Mon Espace</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
