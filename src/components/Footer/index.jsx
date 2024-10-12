import styles from "./Footer.module.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`${styles.footer} ${isMobile ? styles.footerMobile : ""}`}>
      <p className={styles.copyright}>© 2024 Jetstream Aviation. All rights reserved</p>

      <div className={styles.socialMedia}>
        <a
          className={styles.socialLink}
          href="https://www.facebook.com/profile.php?id=100083206071335"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/jetstream-internatonal-11045660/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
      <div className={styles.proudlyAssociated}>
        <p>Proudly associated with:</p>
        <div className={`${styles.logoContainer} ${isMobile ? styles.logoContainerMobile : ""}`}>
          <img src="/nba.webp" alt="Company 1" className={styles.associatedLogo} />
          <img src="/aca2.png" alt="Company 2" className={styles.associatedLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
