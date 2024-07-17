import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.heading}>
          Personalized Flights.
          <br />
        </h1>
        <h1 className={styles.heading}>Elevated Experience.</h1>
        <p className={styles.description}>
          Jetstream has over 8 years of experience in providing premium,
          personalized aircraft management services for private and commercial
          aircraft owners and operators.
        </p>
        <button className="primaryButton">
          <a className={styles.bookingLink} href="/404">
            Book a consultation
          </a>
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
