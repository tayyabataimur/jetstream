import styles from "./Services.module.css";
import { motion } from "framer-motion";

const data = [
  {
    image: "/service-1.webp",
    title: "Ground Handling",
    description:
      "JSI provides quality handling to all types of fleet from wheels down to wheels up. Our extensive global network of top-notch partners ensures your ground support matches your needs.",
    link: "/core",
  },
  {
    image: "/service-2.svg",
    title: "Flight Permits",
    description:
      "Being physically present in Pakistan, GCC and Europe, JSI can secure necessary approvals in the shortest possible time. Our qualified team is available 24/7.",
    link: "/core",
    reversed: true,
  },
  {
    image: "/service-3.svg",
    title: "Aircraft Refueling",
    description:
      "JSI partners with the best fuel service providers and major petroleum companies worldwide, bringing you Jet A1 fuel at over 1,600 contracted locations.",
    link: "/core",
  },
  {
    image: "/service-4.svg",
    title: "Flight Planning",
    description:
      "Our flight planning department plans your flight with the most direct and cost effective routes. En-route wind and temperature aloft computations are taken into account.",
    link: "/core",
    reversed: true,
  },
];

const ServiceCard = ({ image, title, description, link, reversed, index }) => (
  <motion.div
    className={`${styles.serviceCard} ${reversed ? styles.reversed : ""}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className={styles.imageWrapper}>
      <img className={styles.serviceImg} src={image} alt={title} />
    </div>
    <div className={styles.serviceContent}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <a href={link} className={styles.discoverLink}>
        Discover
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className={styles.label}>Our Expertise</p>
        <h2 className={styles.heading}>Core Competencies</h2>
      </motion.div>
      <div className={styles.servicesWrapper}>
        {data.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
