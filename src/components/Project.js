// src/components/Projects.js
import React from 'react';
import '../style/Project.css';
import Slider from './Slider';

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className='h1'>Mon Projet</h1>
      <Slider></Slider>
      <div className="project-card">
        <h3>Zoo Arcadia</h3>
        <p>
          Un site interactif sur un zoo virtuel où vous pouvez explorer différentes espèces d'animaux, 
          découvrir leurs habitats et en apprendre plus sur eux. Ce projet a été réalisé avec React pour le front-end, 
          et Node.js avec une base de données SQL pour le back-end.
        </p>
        <a 
          href="https://zoo-arcadia-31989dc8c54b.herokuapp.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link">
          Voir le projet
        </a>
      </div>
    </section>
  );
};

export default Project;
