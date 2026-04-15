import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Page = styled.div`
  background: #fff;
`;

const Hero = styled.section`
  height: 100vh;
  background: url("/parts.jpg") center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55));
  }
`;

const HeroInner = styled(motion.div)`
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HeroLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const HeroDesc = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 120px 2rem;
  background: ${(props) => props.$bg || "#fff"};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => (props.$light ? "rgba(255,255,255,0.5)" : "#999")};
  margin-bottom: 1rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${(props) => (props.$light ? "#fff" : "#0d3e5c")};
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-align: center;
`;

const Desc = styled(motion.p)`
  font-size: 1rem;
  color: ${(props) => (props.$light ? "rgba(255,255,255,0.7)" : "#777")};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 60px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: ${(props) => (props.$dark ? "rgba(255,255,255,0.1)" : "#eee")};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${(props) => (props.$dark ? "#0d3e5c" : "#fff")};
  padding: 3rem 2rem;
`;

const ServiceTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => (props.$light ? "#fff" : "#0d3e5c")};
  margin-bottom: 1rem;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: ${(props) => (props.$light ? "rgba(255,255,255,0.6)" : "#777")};
  line-height: 1.7;
`;

const CTAButton = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  background: #0d3e5c;
  padding: 1rem 2.5rem;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background: #0a6e7f;
    color: #fff;
  }
`;

const servicesData = [
  {
    title: "Civil & Defence Spares",
    description:
      "Comprehensive spares support for civil and defense aircraft with global sourcing capabilities.",
  },
  {
    title: "Corporate & VIP Aircraft",
    description:
      "Specialized spares support for corporate jets and VIP aircraft, tailored to luxury aviation standards.",
  },
  {
    title: "Rotary Wing Support",
    description:
      "Rotary wing spares for helicopters in civil and defense sectors with rapid deployment.",
  },
  {
    title: "Shop Visits & Warranty",
    description:
      "Managing shop visits, exchanges, and warranty processes efficiently and smoothly.",
  },
  {
    title: "Engine Sales",
    description:
      "P&W JT8D Series, CF34-3, CF34-10, CFM56 engine sales for purchase or lease.",
  },
  {
    title: "AOG Delivery",
    description:
      "Door-to-door and hand-carry service for urgent AOG spares deliveries worldwide, 24/7.",
  },
];

const featuresData = [
  {
    title: "Global Network",
    description: "Extensive worldwide network of suppliers, repair shops, and OEMs.",
  },
  {
    title: "AOG Support",
    description: "24/7 Aircraft on Ground support with rapid response times.",
  },
  {
    title: "Quality Assurance",
    description: "All parts meet OEM specifications with full traceability.",
  },
  {
    title: "Technical Expertise",
    description: "Expert guidance and support for all procurement needs.",
  },
];

const AircraftPartsProcurement = () => {
  return (
    <Page>
      <Hero>
        <HeroInner
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroLabel>Aircraft Parts</HeroLabel>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Parts Delivered, Promises Kept
          </HeroTitle>
          <HeroDesc
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cost-effective solutions for civil, corporate, and defense aircraft
            spares. Your trusted partner worldwide.
          </HeroDesc>
        </HeroInner>
      </Hero>

      <Section>
        <Inner>
          <Label>What We Offer</Label>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Procurement Services
          </Title>
          <Desc
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We work with all key suppliers, repair shops, and OEMs worldwide to
            support routine purchases or AOG needs.
          </Desc>
          <ServicesGrid>
            {servicesData.map((service, i) => (
              <ServiceCard
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDesc>{service.description}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Inner>
      </Section>

      <Section $bg="#0d3e5c">
        <Inner>
          <Label $light>Why Choose Us</Label>
          <Title
            $light
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            The Jetstream Advantage
          </Title>
          <Desc
            $light
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Quality, reliability, and exceptional service in aircraft parts
            procurement.
          </Desc>
          <ServicesGrid $dark>
            {featuresData.map((f, i) => (
              <ServiceCard
                key={f.title}
                $dark
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <ServiceTitle $light>{f.title}</ServiceTitle>
                <ServiceDesc $light>{f.description}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Inner>
      </Section>

      <Section $bg="#fafafa" style={{ textAlign: "center" }}>
        <Inner>
          <Label>Get Started</Label>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Source Parts?
          </Title>
          <Desc
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact us for reliable, cost-effective procurement solutions.
          </Desc>
          <CTAButton to="/contactus">Contact Us</CTAButton>
        </Inner>
      </Section>
    </Page>
  );
};

export default AircraftPartsProcurement;
