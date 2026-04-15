import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <img className={styles.footerLogo} src="/logo.png" alt="Jetstream" />
            <p className={styles.brandDesc}>
              Premium aircraft management services tailored for private,
              diplomatic, and commercial operators worldwide.
            </p>
            <div className={styles.socialMedia}>
              <a
                href="https://www.facebook.com/profile.php?id=100083206071335"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/jetstream-internatonal-11045660/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <Link to="/core">Ground Handling</Link>
            <Link to="/core">Flight Permits</Link>
            <Link to="/core">Aircraft Refueling</Link>
            <Link to="/core">Flight Planning</Link>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link to="/aircraftcharter">Fly Private</Link>
            <Link to="/parts">Aircraft Parts</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Locations</h4>
            <span>United Kingdom</span>
            <span>United Arab Emirates</span>
            <span>Pakistan</span>
            <span>Bahrain &amp; Oman</span>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.associated}>
            <span className={styles.assocLabel}>Associated with</span>
            <div className={styles.assocLogos}>
              <img src="/nba.webp" alt="NBA" />
              <img src="/aca.png" alt="ACA" />
            </div>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Jetstream Aviation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
