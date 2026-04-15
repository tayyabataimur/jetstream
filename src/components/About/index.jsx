import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Page = styled.div`
  background: #fff;
`;

const Hero = styled.section`
  height: 60vh;
  min-height: 500px;
  background: #0d3e5c;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

const HeroLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
`;

const HeroDesc = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
`;

const Section = styled.section`
  padding: 120px 2rem;
  background: ${(props) => props.$bg || "#fff"};
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #0d3e5c;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`;

const Text = styled(motion.p)`
  font-size: 1rem;
  color: #666;
  line-height: 1.9;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: #eee;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamCard = styled(motion.div)`
  background: #fff;
  padding: 2.5rem 1.5rem;
  text-align: center;
`;

const TeamName = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  color: #0d3e5c;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const TeamRole = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: #999;
  letter-spacing: 0.05em;
  text-transform: uppercase;
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

const team = [
  { name: "Shoaib Iqbal", role: "CEO" },
  { name: "Shehryar", role: "Operations" },
  { name: "Mike Johnson", role: "Engineering" },
  { name: "Sarah Lee", role: "Client Services" },
];

const AboutUs = () => {
  return (
    <Page>
      <Hero>
        <div>
          <HeroLabel>About Us</HeroLabel>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </HeroTitle>
          <HeroDesc
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Over 15 years of delivering premium aviation services across the globe.
          </HeroDesc>
        </div>
      </Hero>

      <Section>
        <Inner>
          <Label>Who We Are</Label>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Jetstream Aviation
          </Title>
          <Text
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Founded in 2009, Jetstream International is a global provider of
            flight operations support services. With a physical presence in
            Pakistan, UAE, Bahrain, Oman, and the UK, we provide comprehensive
            aviation services tailored for private, diplomatic, and commercial
            aircraft owners and operators.
          </Text>
          <Text
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our mission is to deliver excellence in every aspect of aviation
            management, from ground handling and flight permits to aircraft
            refueling and flight planning. We combine global expertise with
            local knowledge to ensure seamless operations worldwide.
          </Text>
        </Inner>
      </Section>

      <Section $bg="#fafafa">
        <Inner>
          <Label style={{ textAlign: "center" }}>Our Team</Label>
          <Title
            style={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Leadership
          </Title>
          <TeamGrid>
            {team.map((member, i) => (
              <TeamCard
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
              </TeamCard>
            ))}
          </TeamGrid>
        </Inner>
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Inner>
          <Label style={{ textAlign: "center" }}>Get Started</Label>
          <Title
            style={{ textAlign: "center" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Work With Us
          </Title>
          <CTAButton to="/contactus">Get in Touch</CTAButton>
        </Inner>
      </Section>
    </Page>
  );
};

export default AboutUs;
