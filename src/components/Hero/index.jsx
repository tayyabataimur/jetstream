import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.heading}>
          Your aircraft.
          <br />
          Our Promise.
        </h1>
        <h1 className={styles.heading}>Managed with confidence</h1>
        <p className={styles.description}>
          Jetstream has over 8 years of experience in providing premium,
          personalized aircraft management services for private and commercial
          aircraft owners and operators.
        </p>
        <button className={styles.button}>
          Get a quote <img src="/arrow-right.svg" />
        </button>
      </div>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        src="/hero.mp4"
        width="100%"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
      </video>
    </header>
  );
};

export default Hero;
