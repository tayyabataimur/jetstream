import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import cx from "classnames";

const Links = ({ classname, handleClick }) => (
  <ol className={classname}>
    <li>
      <Link onClick={handleClick} to={"/core"}>
        Services
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/aircraftcharter"}>
        Fly Private
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/parts"}>
        Aircraft Parts
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/contactus"}>
        Contact
      </Link>
    </li>
  </ol>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onLinkClick = () => setExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  return (
    <nav className={cx(styles.navbar, { [styles.scrolled]: scrolled })}>
      <div className={styles.navInner}>
        <a href="/" className={styles.logoLink}>
          <img className={styles.logo} src="/logo.png" alt="Jetstream" />
        </a>

        <Links classname={styles.links} handleClick={onLinkClick} />

        <a href="/#charter" className={styles.ctaLink}>
          Get a Quote
        </a>

        <button
          className={styles.menu}
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle menu"
        >
          <span className={cx(styles.hamburger, { [styles.active]: expanded })}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={cx(styles.overlay, { [styles.visible]: expanded })} onClick={() => setExpanded(false)} />
      <div className={cx(styles.sideBar, { [styles.expanded]: expanded })}>
        <Links classname={styles.menuList} handleClick={onLinkClick} />
        <a href="/#charter" className={styles.sidebarCta} onClick={onLinkClick}>
          Get a Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
