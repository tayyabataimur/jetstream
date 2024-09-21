import styles from "./GlobalExistence.module.css";
import cx from "classnames";

const cities = [
  "London",
  "Manchester",
  "Glasgow",
  "Dubai",
  "Sharjah",
  "Al Ain",
  "Abu Dhabi",
  "Manama",
  "Muscat",
  "Karachi",
  "Islamabad"
];

const GlobalExistence = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Founded in 2009, JSI is a global provider of flight operations support
        services with a physical presence in Pakistan, UAE, Bahrain, Oman, and
        the UK.
      </p>
      <div className={styles.wrapper}>
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
          <img src="/abudhabi.jpg" />
          <div className={styles.imagesCol}>
            <img src="/manama.jpg" />
            <img src="/london.webp" />
          </div>
        </div>
      </div>
      <button className={cx("primaryButton", styles.mainButton)}>
        <a href="/aircraftcharter">Learn more about us</a>
      </button>
    </div>
  );
};

export default GlobalExistence;
