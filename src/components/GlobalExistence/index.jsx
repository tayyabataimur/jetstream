import styles from "./GlobalExistence.module.css";
import { useState, useEffect } from "react";

const cities = [
  "London",
  "Manchester",
  "Glasgow",
  "Dubai",
  "Sharjah",
  "Al Ain",
  "Abu Dhabi",
  "Manama",
  "Muscat",
  "Karachi",
  "Islamabad"
];

const images = [
  { src: "/dubai.webp", alt: "Dubai" },
  { src: "/abudhabi.jpg", alt: "Abu Dhabi" },
  { src: "/manama.jpg", alt: "Manama" },
  { src: "/london.webp", alt: "London" }
];

const GlobalExistence = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Soaring Across Borders: Our Worldwide Network</h2>
      <p className={styles.description}>
        Founded in 2009, JSI is a global provider of flight operations support
        services with a physical presence in Pakistan, UAE, Bahrain, Oman, and
        the UK.
      </p>
      
      <div className={styles.content}>
        <div className={styles.imageCarousel}>
          {images.map((image, index) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className={`${styles.carouselImage} ${index === activeImage ? styles.active : ''}`}
            />
          ))}
        </div>
        
        <div className={styles.citiesGrid}>
          {cities.map((city) => (
            <div key={city} className={styles.city}>
              {city}
            </div>
          ))}
        </div>
      </div>
      
      <a href="/aircraftcharter" className={styles.ctaButton}>
        Learn more about us
      </a>
    </section>
  );
};

export default GlobalExistence;
