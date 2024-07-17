import Hero from "../components/Hero";
import Services from "../components/Services";

import styles from "./root.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <Hero />
      <Services />
    </div>
  );
}
