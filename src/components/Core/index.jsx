import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Ground Handling",
    description:
      "JSI provides quality handling to all types of fleet from wheels down to wheels up. Our extensive global network of top-notch partners ensures your ground support matches your needs.",
    image: "/service-1.webp",
  },
  {
    title: "Flight Permits",
    description:
      "Being physically present in Pakistan, GCC, and Europe, JSI can secure necessary approvals in the shortest possible time. Our qualified team is available 24/7.",
    image: "/service-2.svg",
  },
  {
    title: "Aircraft Refueling",
    description:
      "JSI partners with the best fuel service providers and major petroleum companies worldwide. We bring you Jet A1 fuel at over 1,600 contracted locations.",
    image: "/service-3.svg",
  },
  {
    title: "Flight Planning",
    description:
      "Our flight planning department plans your flight with the most direct and cost effective routes. En-route wind and temperature aloft computations are taken into account.",
    image: "/service-4.svg",
  },
];

const stats = [
  { number: "1,600+", label: "Global Locations" },
  { number: "24/7", label: "Support Available" },
  { number: "100%", label: "Safety Record" },
  { number: "15+", label: "Years Experience" },
];

const Page = styled.div`
  background: #fff;
`;

const Hero = styled.section`
  height: 100vh;
  background: url("/services3.jpeg") center / cover no-repeat;
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

const ServiceRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid #eee;
  padding: 3rem 0;

  &:last-child {
    border-bottom: 1px solid #eee;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ServiceImg = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
`;

const ServiceTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.75rem;
  color: #0d3e5c;
  font-weight: 600;
`;

const ServiceDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.8;
`;

const DiscoverLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0d3e5c;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.8rem;
    color: #0d3e5c;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  background: #0d3e5c;
  text-align: center;
  padding: 3rem 2rem;
`;

const StatNum = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
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

const Services = () => {
  return (
    <Page>
      <Hero>
        <HeroInner
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroLabel>Our Services</HeroLabel>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aviation Excellence
          </HeroTitle>
          <HeroDesc
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Delivering excellence in aviation services with global expertise and
            unwavering commitment to safety.
          </HeroDesc>
        </HeroInner>
      </Hero>

      <Section>
        <Inner>
          <Label>What We Do</Label>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Comprehensive Aviation Services
          </Title>
          <Desc
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meeting the highest standards of excellence and safety in the industry.
          </Desc>

          {servicesData.map((service, index) => (
            <ServiceRow
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  <ServiceImg>
                    <img src={service.image} alt={service.title} />
                  </ServiceImg>
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDesc>{service.description}</ServiceDesc>
                    <DiscoverLink to="/contactus">
                      Discover
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </DiscoverLink>
                  </ServiceContent>
                </>
              ) : (
                <>
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDesc>{service.description}</ServiceDesc>
                    <DiscoverLink to="/contactus">
                      Discover
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </DiscoverLink>
                  </ServiceContent>
                  <ServiceImg>
                    <img src={service.image} alt={service.title} />
                  </ServiceImg>
                </>
              )}
            </ServiceRow>
          ))}
        </Inner>
      </Section>

      <Section $bg="#0d3e5c" style={{ padding: "0" }}>
        <StatsGrid>
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <StatNum>{stat.number}</StatNum>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
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
            Ready to Experience Excellence?
          </Title>
          <Desc
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact us today to learn more about our comprehensive aviation services.
          </Desc>
          <CTAButton to="/contactus">Get in Touch</CTAButton>
        </Inner>
      </Section>
    </Page>
  );
};

export default Services;
