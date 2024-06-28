import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import cx from "classnames";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollThreshold = 450;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        console.log("SCROLL");
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cx(styles.navbar, { [styles.scrolled]: scrolled })}>
      {/* Logo */}
      <img className={styles.logo} src="/logo.svg" />

      {/* Links */}
      <ol className={styles.links}>
        <li>
          <Link to={"/home"}>Flight support</Link>
        </li>
        <li>
          <Link to={"/home"}>Fuel</Link>
        </li>
        <li>
          <Link to={"/home"}>Trip planning</Link>
        </li>
        <li>
          <Link to={"/home"}>Aircraft charters</Link>
        </li>
        <li>
          <Link to={"/home"}>Aircraft parts procurement</Link>
        </li>
        <li>
          <Link to={"/home"}>Contact</Link>
        </li>
      </ol>

      {/* Menu Icon */}
      {!expanded ? (
        <button
          className={cx(styles.menu)}
          onClick={() => setExpanded(!expanded)}
        >
          <img src="/hamburger.svg" />
        </button>
      ) : (
        <>
          <button
            className={styles.menu}
            onClick={() => setExpanded(!expanded)}
          >
            &#10005;
          </button>
          <div className={styles.sideBar}>
            <ol className={styles.menuList}>
              <li>
                <Link to={"/home"}>Flight support</Link>
              </li>
              <li>
                <Link to={"/home"}>Fuel</Link>
              </li>
              <li>
                <Link to={"/home"}>Trip planning</Link>
              </li>
              <li>
                <Link to={"/home"}>Aircraft charters</Link>
              </li>
              <li>
                <Link to={"/home"}>Aircraft parts procurement</Link>
              </li>
              <li>
                <Link to={"/home"}>Contact</Link>
              </li>
            </ol>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
