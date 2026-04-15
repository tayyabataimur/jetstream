import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <video
        className={styles.bgMedia}
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.webp"
        src="/jsi.mp4"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Private Aviation Excellence
        </motion.p>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Personalized Flights.
          <br />
          Elevated Experience.
        </motion.h1>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          With over 15 years of expertise, Jetstream offers premium,
          personalized aircraft management services tailored for private,
          diplomatic, and commercial aircraft owners and operators.
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a className={styles.primaryBtn} href="/contactus">
            Discover
          </a>
          <a className={styles.secondaryBtn} href="/aircraftcharter">
            Fly Private
          </a>
        </motion.div>
      </div>
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </header>
  );
};

export default Hero;
