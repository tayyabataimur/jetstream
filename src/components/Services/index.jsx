import React from "react";
import styles from "./Services.module.css";
import Pill from "../Pill";
import cx from "classnames";

const data = [
  {
    image: "/service-1.webp",
    title: "Ground Handling",
    description: `JSI provides quality handling to all types of fleet from wheels down
    to wheels up. Our extensive global network of top-notch partners can
    help to ensure your ground support match your needs and expectations.`,
  },
  {
    image: "/service-2.svg",
    title: "Flight Permits",
    description: `Being physically present in Pakistan, GCC and Europe,
    JSI can secure necessary approvals in the shortest possible time. Our
    qualified and experienced team is available 24/7 to answer all your
    questions regarding the support services that you require.`,
  },
  {
    image: "/service-3.svg",
    title: "Aircraft Refueling",
    description: `JSI partners with the best fuel service providers and
    major petroleum companies from around the world. As a result, we are
    then able to bring you Jet A1 fuel at over 1,600 contracted locations
    at a competitive and cost-efficient rate.`,
  },
  {
    image: "/service-4.svg",
    title: "Computerized Flight Planning",
    description: `JSI flight planning department plan your flight with the 
    most direct and cost effective routes from any location. En-route wind
    and temperature aloft computation ETP/ETOPS are also taken into account
    during the flight planning process.`,
  },
];

const Service = (props) => {
  return (
    <div className={styles.service}>
      <img
        className={cx(styles.serviceImg, { [styles.reversed]: props.reversed })}
        src={props.image}
      />
      <div className={styles.serviceContent}>
        <h3 className={cx(styles.title, styles.gradient)}>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className={styles.container}>
      <Pill
        additionalClassnames={styles.pill}
        text="From our excellency to yours"
      />
      <h2 className={styles.heading}>Our core competencies</h2>
      <div className={styles.servicesWrapper}>
        {data.map((service) => (
          <Service
            key={service.title}
            icon={service.icon}
            image={service.image}
            reversed={service.reversed}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
