import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { WorldMap } from "../WorldMap";
// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled Heading
const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #0d3e69;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.5s ease-out;
  animation: ${(props) => props.isVisible && fadeIn} 1s forwards;
`;

const GlobalPresence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  // Intersection Observer to detect when the heading is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnect once visible to avoid re-triggering
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the heading is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div style={{ width: "80%" }}>
      <CenteredContainer>
        <Heading ref={headingRef} isVisible={isVisible}>
          Our Global Presence
        </Heading>
      </CenteredContainer>
      <WorldMap />
    </div>
  );
};

export default GlobalPresence;
