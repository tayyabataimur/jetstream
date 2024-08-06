import {
  ComposableMap,
  Geographies,
  Marker,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import featuresJSON from "./features.json";

const markers = [
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
];

const WorldMap = () => {
  return (
    <ComposableMap>
      <Geographies
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
        geography={featuresJSON}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g fill="#FF5533" stroke="none" transform="translate(-12, -24)">
            <path d="M12 2 L15 10 H19 L15 13 L17 21 L12 17 L7 21 L9 13 L5 10 H9 Z" />
          </g>

          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
