import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import featuresJSON from "./features.json";
import styles from "./WorldMap.module.css";

const markers = [
  {
    markerOffset: -3,
    name: "London",
    coordinates: [-9.5072, 60.5276],
  },
  {
    markerOffset: -3,
    name: "Islamabad",
    coordinates: [70.5072, 38.5276],
  },
  {
    markerOffset: -3,
    name: "Islamabad",
    coordinates: [62.5072, 32.5276],
  },
  {
    markerOffset: -3,
    name: "UAE",
    coordinates: [50.5072, 30.5276],
  },
];

const WorldMap = () => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-20, 0, 0],
        scale: 210,
      }}
    >
      <Geographies
        fill="#0d3e69"
        stroke="#FFFFFF"
        strokeWidth={0.2}
        geography={featuresJSON}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              style={{
                default: {
                  fill: "#0d3e69",
                  outline: "FFFFFF",
                },
                hover: {
                  fill: "#F60",
                  outline: "none",
                },
                pressed: {
                  fill: "#E12",
                  outline: "none",
                },
              }}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="#FF5722"
            />
          </svg>
          {/* <text className={styles.maptext} textAnchor="middle" y={markerOffset}>
            {name}
          </text> */}
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
