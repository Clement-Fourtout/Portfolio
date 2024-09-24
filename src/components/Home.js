import React from 'react';
import '../style/Home.css';

const Home = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-message-container">
        <h1 className="welcome-message">
          <i className="fas fa-laptop-code"></i> Bienvenue dans ce portfolio
        </h1>
        <p className="subtitle">
          Découvrez mes projets et compétences en développement web
        </p>
      </div>
    </section>
  );
};

export default Home;
