import styles from "./GlobalExistence.module.css";

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
      <div className={styles.wrapper}>
        {/* TEXT AND DESCRIPTION */}
        <div className={styles.textContent}>
          <h2>Global Existence</h2>
          <p>
            Founded in 2009, JSI is a global provider of flight operations
            support services with a physical presence in Pakistan, UAE, Bahrain,
            Oman, and the UK.
          </p>
          <button className="primaryButton">Learn more about us</button>
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
    </div>
  );
};

export default GlobalExistence;
