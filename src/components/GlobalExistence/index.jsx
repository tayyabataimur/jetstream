import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

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

const SectionContainer = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(13, 62, 105, 0.02) 0%, rgba(26, 84, 144, 0.02) 100%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ImageCarouselContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  height: 500px;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
`;

const CitiesSection = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CitiesHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const CitiesIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);
`;

const CitiesTitle = styled.h3`
  font-size: 1.8rem;
  color: #0d3e69;
  font-weight: 700;
  margin: 0;
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const CityCard = styled(motion.div)`
  background: linear-gradient(135deg, #f8faff 0%, #e3f2fd 100%);
  padding: 20px 15px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: #0d3e69;
  font-size: 0.95rem;
  border: 1px solid rgba(13, 62, 105, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(13, 62, 105, 0.05), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(13, 62, 105, 0.15);
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  }

  &:hover::before {
    left: 100%;
  }
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const CTAButton = styled(motion(Link))`
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  color: white;
  border: none;
  padding: 20px 45px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(13, 62, 105, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(13, 62, 105, 0.4);
    background: linear-gradient(135deg, #1a5490 0%, #2563eb 100%);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const GlobalExistence = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Soaring Across Borders: Our Worldwide Network
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Founded in 2009, JSI is a global provider of flight operations support
            services with a physical presence in Pakistan, UAE, Bahrain, Oman, and
            the UK.
          </SectionDescription>
        </SectionHeader>

        <ContentGrid>
          <ImageCarouselContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <CarouselImage
                key={image.alt}
                src={image.src}
                alt={image.alt}
                active={index === activeImage}
              />
            ))}
          </ImageCarouselContainer>

          <CitiesSection
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CitiesHeader>
              <CitiesIcon>
                <FaGlobe />
              </CitiesIcon>
              <CitiesTitle>Global Locations</CitiesTitle>
            </CitiesHeader>
            
            <CitiesGrid>
              {cities.map((city, index) => (
                <CityCard
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMapMarkerAlt style={{ marginRight: '8px', fontSize: '0.8rem' }} />
                  {city}
                </CityCard>
              ))}
            </CitiesGrid>
          </CitiesSection>
        </ContentGrid>

        <CTAContainer>
          <CTAButton
            to="/aircraftcharter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us <FaArrowRight />
          </CTAButton>
        </CTAContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default GlobalExistence;
