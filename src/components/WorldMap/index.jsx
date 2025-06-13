import React, { useEffect, useState, useRef, useId } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Annotation,
} from "react-simple-maps";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane } from "react-icons/fa";

const MapSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  background: #ffffff;
`;

const StyledComposableMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
  
  .rsm-geography {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    
    &:hover {
      fill: #1976d2;
      stroke: #0d3e69;
      stroke-width: 1;
    }
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px 30px;
  box-shadow: 0 20px 60px rgba(13, 62, 105, 0.15);
  border: 1px solid rgba(13, 62, 105, 0.1);
  max-width: 280px;
  z-index: 15;
  pointer-events: none;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0d3e69;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const CardSubtitle = styled.p`
  font-size: 0.9rem;
  color: #1976d2;
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
`;

const geoUrl = "/features.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#e3f2fd", "#1976d2"]);

const locations = [
  {
    title: "UK Headquarters",
    subtitle: "Hemel Hempstead",
    coordinates: [-0.4667, 51.7500],
    position: { top: '20%', left: '45%' }
  },
  {
    title: "UAE Operations",
    subtitle: "Dubai",
    coordinates: [55.2708, 25.2048],
    position: { top: '40%', right: '20%' }
  },
  {
    title: "Pakistan Operations", 
    subtitle: "Karachi & Islamabad",
    coordinates: [67.0011, 24.8607],
    position: { bottom: '25%', right: '25%' }
  }
];

export const WorldMap = () => {
  const [data, setData] = useState([]);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  
  useEffect(() => {
    csv("./vulnerabilities.csv").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <MapSection>
      <MapWrapper>
        <StyledComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 180,
          }}
        >
          <defs>
            <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8f9fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e9ecef" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <Sphere 
            fill="url(#sphereGradient)" 
            stroke="rgba(13, 62, 105, 0.1)" 
            strokeWidth={0.5} 
          />
          <Graticule 
            stroke="rgba(13, 62, 105, 0.05)" 
            strokeWidth={0.3} 
          />
          
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={d ? colorScale(d["2017"]) : "#bbdefb"}
                      stroke="rgba(13, 62, 105, 0.15)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
          
          {/* Clean airplane location markers */}
          {locations.map((location, index) => (
            <Annotation
              key={index}
              subject={location.coordinates}
              dx={0}
              dy={0}
            >
              <motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ 
                  delay: index * 0.4, 
                  duration: 1,
                  rotate: { duration: 2, ease: "easeInOut" }
                }}
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{ cursor: 'pointer' }}
              >
                <motion.foreignObject
                  x={-12}
                  y={-12}
                  width={24}
                  height={24}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaPlane 
                    style={{ 
                      fontSize: '24px', 
                      color: '#0d3e69',
                      filter: 'drop-shadow(0 3px 6px rgba(13, 62, 105, 0.4))'
                    }} 
                  />
                </motion.foreignObject>
              </motion.g>
            </Annotation>
          ))}
        </StyledComposableMap>

        {/* Hover-triggered floating location cards */}
        <AnimatePresence>
          {hoveredLocation !== null && (
            <FloatingCard
              key={`card-${hoveredLocation}`}
              style={locations[hoveredLocation].position}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <CardTitle>{locations[hoveredLocation].title}</CardTitle>
              <CardSubtitle>{locations[hoveredLocation].subtitle}</CardSubtitle>
            </FloatingCard>
          )}
        </AnimatePresence>
      </MapWrapper>
    </MapSection>
  );
};
