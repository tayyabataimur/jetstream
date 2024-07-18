import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import cx from "classnames";

const Links = ({ classname, handleClick }) => (
  <ol className={classname}>
    <li>
      <Link onClick={handleClick} to={"/404"}>
        Aircraft charters
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/404"}>
        Aircraft parts procurement
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/404"}>
        About us
      </Link>
    </li>
    <li>
      <Link onClick={handleClick} to={"/404"}>
        Contact
      </Link>
    </li>
  </ol>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollThreshold = 350;

  const menuIconPath = !expanded ? "/hamburger.svg" : "/cross.svg";

  const onLinkClick = () => setExpanded(false);

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
      <a href="/">
        <img className={styles.logo} src="/logo.svg" />
      </a>

      {/* Links */}
      <Links classname={styles.links} handleClick={onLinkClick} />

      {/* Menu Icon */}
      <button
        className={cx(styles.menu)}
        onClick={() => setExpanded(!expanded)}
      >
        <img src={menuIconPath} />
      </button>
      <div className={cx(styles.sideBar, { [styles.expanded]: expanded })}>
        <Links classname={cx(styles.menuList)} handleClick={onLinkClick} />
        <button className="primaryButton">Book a consultation</button>
      </div>
    </nav>
  );
};

export default Navbar;
