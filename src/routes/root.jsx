import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

import styles from "./root.module.css";
import Features from "../components/Features";

export default function Root() {
  return (
    <div className={styles.root}>
      <Navbar />
      <Hero />
      <Services />
      <Features />
    </div>
  );
}
