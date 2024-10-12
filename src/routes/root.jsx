import GlobalExistence from "../components/GlobalExistence";
import Hero from "../components/Hero";
import GlobalPresence from "../components/GlobalPresence";
import PrivateCharterForm from "../components/PrivateCharterForm";

import styles from "./root.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <Hero />
      <GlobalPresence />
      <PrivateCharterForm />
      <GlobalExistence />
    </div>
  );
}
