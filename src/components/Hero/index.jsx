import styles from "./Hero.module.css";
import useMobileSize from "../../hooks/useMobileSize";

const Hero = () => {
  const isMobile = useMobileSize();

  return (
    <header className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.heading}>
          Personalized Flights.
          <br />
        </h1>
        <h1 className={styles.heading}>Elevated Experience.</h1>
        <p className={styles.description}>
          With over 15 years of expertise, Jetstream offers premium,
          personalized aircraft management services tailored for private,
          diplomatic, and commercial aircraft owners and operators.
        </p>
        <button className="primaryButton">
          <a className={styles.bookingLink} href="/contactus">
            Book a consultation
          </a>
        </button>
      </div>
      <img className={styles.heroImg} src="/hero.webp" />
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        src="/jsi.mp4"
        width="100%"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
      </video>
    </header>
  );
};

export default Hero;
