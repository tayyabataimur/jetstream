import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cities = [
  { name: "London", country: "United Kingdom" },
  { name: "Manchester", country: "United Kingdom" },
  { name: "Glasgow", country: "United Kingdom" },
  { name: "Dubai", country: "UAE" },
  { name: "Sharjah", country: "UAE" },
  { name: "Abu Dhabi", country: "UAE" },
  { name: "Manama", country: "Bahrain" },
  { name: "Muscat", country: "Oman" },
  { name: "Karachi", country: "Pakistan" },
  { name: "Islamabad", country: "Pakistan" },
  { name: "Al Ain", country: "UAE" },
];

const images = [
  { src: "/dubai.webp", alt: "Dubai", city: "Dubai" },
  { src: "/abudhabi.jpg", alt: "Abu Dhabi", city: "Abu Dhabi" },
  { src: "/manama.jpg", alt: "Manama", city: "Manama" },
  { src: "/london.webp", alt: "London", city: "London" },
  { src: "/islamabad.webp", alt: "Islamabad", city: "Islamabad" },
  { src: "/muscat.png", alt: "Muscat", city: "Muscat" },
];

const SectionContainer = styled.section`
  width: 100%;
  padding: 120px 2rem;
  background: #fff;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #0d3e5c;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1rem;
  color: #777;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: #eee;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DestinationCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: pointer;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: #fff;
`;

const CityName = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.25rem;
`;

const CountryName = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
`;

const LocationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
  margin-bottom: 60px;
  padding: 0 1rem;
`;

const LocationTag = styled(motion.span)`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #777;
  letter-spacing: 0.05em;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: #0d3e5c;
  }
`;

const Divider = styled.span`
  color: #ddd;
  font-weight: 300;
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const CTALink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  background: #0d3e5c;
  padding: 1rem 2.5rem;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background: #0a6e7f;
    color: #fff;
    text-decoration: none;
  }
`;

const GlobalExistence = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionLabel>Destinations</SectionLabel>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Worldwide Network
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Founded in 2009, JSI is a global provider of flight operations
            support with a presence across Pakistan, UAE, Bahrain, Oman, and the
            UK.
          </SectionDescription>
        </SectionHeader>

        <DestinationsGrid>
          {images.map((image, index) => (
            <DestinationCard
              key={image.alt}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={image.src} alt={image.alt} />
              <CardOverlay>
                <CityName>{image.city}</CityName>
                <CountryName>
                  {cities.find((c) => c.name === image.city)?.country}
                </CountryName>
              </CardOverlay>
            </DestinationCard>
          ))}
        </DestinationsGrid>

        <LocationsList>
          {cities.map((city, index) => (
            <span key={city.name}>
              <LocationTag
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {city.name}
              </LocationTag>
              {index < cities.length - 1 && <Divider> &middot; </Divider>}
            </span>
          ))}
        </LocationsList>

        <CTAContainer>
          <CTALink to="/contactus">Get in Touch</CTALink>
        </CTAContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default GlobalExistence;
