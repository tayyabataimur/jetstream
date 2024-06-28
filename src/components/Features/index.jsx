import React from "react";
import styles from "./Features.module.css";
import Pill from "../Pill";

const data = [
  {
    img: "/monitor.svg",
    heading: "Computerized Flight Planning",
    description: `By using the latest flight planning software Jetstream International
        flight planning department plan your flight with the most direct and
        cost effective routes from any location. EN-route cost calculations,
        wind and temperature aloft computation ETP/ETOPS are also taken into
        account during the flight planning process.`,
  },
  {
    img: "/torch.svg",
    heading: "ATC Filing",
    description: `In order to ensure timely departure, our operations ensure
    to file ATC well in time and also gets confirmation from local authorities
    about its validity. Any rejection in ATC routes or delays are communicated
    well in advance to the crew so that they are able to plan their flight
    accordingly.`,
  },
  {
    img: "/airplane.svg",
    heading: "Enroute NOTAMs",
    description: `Due to the use of state of the art flight planning software,
    our operations is updated immediately in case of any temporary closures or
    lack of aircraft parking. We monitor entire route during the flight for
    any NOTAMs and the crew is alerted to any potential disruptions even when
    in flight.`,
  },
];

const Feature = (props) => {
  return (
    <div className={styles.featureContainer}>
      <img src={props.img} />
      <h3 className={styles.gradient}>{props.heading}</h3>
      <p>{props.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className={styles.container}>
      <Pill text="Planning" />
      <h2>
        Key features of trip planning: <br />{" "}
        <span className={styles.gradient}>
          permits, filings, briefings and analysis
        </span>
      </h2>
      <p>
        From en-route cost calculations, ETP/ETOPS to CFPL packages, we’ve got
        everything sorted.
      </p>
      <div className={styles.featuresWrapper}>
        {data.map((feature) => (
          <Feature {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
