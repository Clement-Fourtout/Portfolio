import React from 'react';
import '../style/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>À propos de moi</h2>
        <p>
          Bonjour ! Je suis Clément Fourtout, 
          un développeur web junior passionné par la création d'applications intuitives et fonctionnelles.
        </p>
          <p>
            J'ai obtenu un BTS Négociation Relation Client en Commerce, 
            et j'ai suivi une formation de Développeur Web et Web Mobile auprès de l'organisme Studi.
          </p>
    
            <h3>Compétences Techniques</h3>
            <ul>
              <li>JavaScript, HTML, CSS, SQL </li>
              <li>React, Node.js</li>
              {/* Ajoutez d'autres compétences ici */}
            </ul>
              <p>
                J'ai développé un projet personnel, un site de zoo virtuel, 
                que vous pouvez explorer <a href="https://zoo-arcadia-31989dc8c54b.herokuapp.com/">ici</a>.
              </p>
                <h3>Passions et Intérêts</h3>
                  <p>
                    En dehors du développement web, j'aime le cinéma, les jeux-vidéos, la moto.
                  </p>
                <h3>Objectifs Futurs</h3>
              <p>
                Mon objectif a long terme est de continuer à apprendre
                et à me développer en tant que développeur, 
                en explorant des domaines comme l'intelligence artificielle et la cybersécurité.
              </p>
                <p>
                  Mon But est d'obtenir le diplome de Graduate Développeur Web
                  pour pouvoir intégrer Mirakl une entreprise spécialisée dans les solutions de Marketplace.
                </p>
                  <p>
                  Elle propose une platefrome qui permet aux entreprises
                   de lancer et gérer leur propre marketplace.
                  </p>
      
    </section>
  );
};

export default About;
