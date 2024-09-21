import GlobalExistence from "../components/GlobalExistence";
import Hero from "../components/Hero";
import { WorldMap } from "../components/WorldMap";
import GlobalPresence from "../components/GlobalPresence";

import styles from "./root.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <Hero />
      <GlobalPresence />
      <GlobalExistence />
    </div>
  );
}
