import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <p>© 2024 Jetstream Aviation. All rights reserved</p>

    <div className={styles.socialMedia}>
      <a
        className={styles.socialLink}
        href="https://www.facebook.com/profile.php?id=100083206071335"
      >
        <img src="/facebook.svg" />
      </a>
      <a
        className={styles.socialLink}
        href="https://www.linkedin.com/in/jetstream-internatonal-11045660/"
      >
        <img src="/linkedin.svg" />
      </a>
    </div>
    <div className={styles.proudlyAssociated}>
      <p>Proudly associated with:</p>
      <div className={styles.logoContainer}>
        <img src="/nba.webp" alt="Company 1" className={styles.associatedLogo} />
        <img src="/aca2.png" alt="Company 2" className={styles.associatedLogo} />
      </div>
    </div>
  </div>
);

export default Footer;
