import GlobalExistence from "../components/GlobalExistence";
import Hero from "../components/Hero";
import WorldMap from "../components/Map";
import Services from "../components/Services";

import styles from "./root.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <Hero />
      <Services />
      {/* <WorldMap /> */}
      <GlobalExistence />
    </div>
  );
}
