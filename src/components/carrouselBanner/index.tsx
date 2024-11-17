import React, { useEffect, useState } from "react";
import slideImage from "../../assets/images/Frame 18.webp";
import bellSvg from '../../assets/icons/bell-svgrepo-com 1.svg'
import "./index.css";

const slides = [slideImage, slideImage, slideImage];
const CarrouselBannr = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        className="slidesCont"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {slides.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <div className="announcementBar" style={{padding: 5, display: "flex", justifySelf: "flex-start"}}>
        <img src={bellSvg} style={{marginRight: 10}}/>
        ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
      </div>
    </div>
  );
};
export default CarrouselBannr;
