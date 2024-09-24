import React, { useEffect, useState } from 'react';
import '../style/Slider.css'; // N'oubliez pas d'ajouter les styles
import image1 from '../style/Images/Zoo-arcadia.png';
import image2 from '../style/Images/Zoo-arcadia 2.png';
import image3 from '../style/Images/Zoo-arcadia 3 .png';
import image4 from '../style/Images/Zoo-arcadia 4.png';
import image5 from '../style/Images/Zoo-arcadia 5.png';

const images = [image1, image2, image3, image4, image5 ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`} // Applique la classe active
        />
      ))}
    </div>
  );
};

export default Slider;
