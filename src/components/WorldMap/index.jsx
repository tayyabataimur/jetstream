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
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.div`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  background-color: #0d3e69; /* Dark blue background */
  color: #fff;
  text-align: left;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the target */
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease, transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Arrow on the bottom */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #0d3e69 transparent transparent transparent;
  }
`;

const TooltipTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  color: #fff;
`;

const TooltipTextItem = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
  color: #fff;
`;

const geoUrl = "/features.json";

const shadow_custom_world_map = "shadow-md";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#175992", "#e4e7ec"]);

export const WorldMap = () => {
  const [data, setData] = useState([]);
  let tooltip = useRef(null);

  useEffect(() => {
    csv("./vulnerabilities.csv").then((data) => {
      setData(data);
    });
  }, []);
  const id = useId();

  return (
    <>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 160,
        }}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id={id}
                    className="focus:outline-none"
                    fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                    onMouseEnter={() => {
                      document.body.classList.add("target");
                    }}
                    onMouseLeave={() => {
                      document.body.classList.remove("target");
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
        <Annotation
        subject={[-2.3522, 51.8566]}
        dx={-20}
        dy={-20}
        connectorProps={{
          stroke: "#f0ad4e",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text fontSize="10" x="-8" textAnchor="end" alignmentBaseline="middle" fill="#f0ad4e">
          {" 🛫 Jetstream HQ"}
        </text>
      </Annotation>
      <Annotation
        subject={[56.3522, 25.8566]}
        dx={-44}
        dy={-20}
        connectorProps={{
          stroke: "#f0ad4e",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text fontSize="10" x="-8" textAnchor="end" alignmentBaseline="middle" fill="#f0ad4e">
          {"Jetstream UAE"}
        </text>
      </Annotation>
      <Annotation
        subject={[72.3522, 35.8566]}
        dx={-32}
        dy={-32}
        connectorProps={{
          stroke: "#f0ad4e",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text fontSize="10" x="-5" textAnchor="end" alignmentBaseline="middle" fill="#f0ad4e">
          {"Jetstream Southeast Asia"}
        </text>
      </Annotation>
      </ComposableMap>
      <Tooltip
        ref={tooltip}
        id={id}
        float
        className={`!p-0 !rounded-lg !bg-white !text-inherit ${shadow_custom_world_map} select-none z-10`}
        opacity={1}
      >
        <TooltipTitle>🛫 Jetstream International (UK)</TooltipTitle>
        <TooltipTextItem>🏢 575-599 Maxted Road, Hemel Hempstead, HP27DX</TooltipTextItem>
        <TooltipTextItem>📞 +44 1442818173</TooltipTextItem>
      </Tooltip>
    </>
  );
};
