import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { WorldMap } from "../WorldMap";

const Section = styled.section`
  width: 100%;
  padding: 100px 2rem;
  background: #fafafa;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  text-align: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #0d3e5c;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.6s ease-out;
`;

const GlobalPresence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <Section>
      <Inner>
        <Label>Global Network</Label>
        <Heading ref={headingRef} $isVisible={isVisible}>
          Our Worldwide Presence
        </Heading>
        <WorldMap />
      </Inner>
    </Section>
  );
};

export default GlobalPresence;
