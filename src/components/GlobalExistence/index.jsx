import WorldMap from "../WorldMap";
import styles from "./GlobalExistence.module.css";
import cx from "classnames";

const cities = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Dubai",
  "Sharjah",
  "Al Ain",
  "Abu Dhabi",
  "Manama",
  "Muscat",
  "London",
];

const GlobalExistence = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Global Existence</h2>
      <p className={styles.description}>
        Founded in 2009, JSI is a global provider of flight operations support
        services with a physical presence in Pakistan, UAE, Bahrain, Oman, and
        the UK.
      </p>
      <div className={styles.wrapper}>
        {/* TEXT AND DESCRIPTION */}
        <div className={styles.textContent}>
          <WorldMap />
        </div>
        {/* LOCATIONS */}
        <div className={styles.locations}>
          <ul className={styles.list}>
            {cities.map((city) => (
              <li className={styles.city} key={city}>
                {city}
              </li>
            ))}
          </ul>
        </div>
        {/* IMAGES */}
        <div className={styles.images}>
          <img src="/dubai.webp" />
          <div className={styles.imagesCol}>
            <img src="/islamabad.webp" />
            <img src="/london.webp" />
          </div>
        </div>
      </div>
      <button className={cx("primaryButton", styles.mainButton)}>
        Learn more about us
      </button>
    </div>
  );
};

export default GlobalExistence;
