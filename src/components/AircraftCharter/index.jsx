import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  background: #fff;
`;

const HeroSection = styled.section`
  height: 100vh;
  background: url("/acharter.webp") center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    );
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: white;
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

const HeroSubtitle = styled(motion.p)`
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

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => props.$light ? "rgba(255,255,255,0.5)" : "#999"};
  margin-bottom: 1rem;
  text-align: ${(props) => props.$center ? "center" : "left"};
`;

const SectionTitle = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${(props) => props.$light ? "#fff" : "#0d3e5c"};
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-align: ${(props) => props.$center ? "center" : "left"};
`;

const SectionDesc = styled(motion.p)`
  font-size: 1rem;
  color: ${(props) => props.$light ? "rgba(255,255,255,0.7)" : "#777"};
  line-height: 1.8;
  max-width: ${(props) => props.$center ? "600px" : "none"};
  margin: ${(props) => props.$center ? "0 auto" : "0"};
  text-align: ${(props) => props.$center ? "center" : "left"};
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageBox = styled(motion.div)`
  overflow: hidden;
  aspect-ratio: 4 / 3;

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

const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  margin-top: 0.5rem;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.8rem;
    color: #0d3e5c;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  padding: 3rem 2rem;
  background: #0d3e5c;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 120px 2rem;
  background: #fafafa;
  text-align: center;
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
  margin-top: 2rem;

  &:hover {
    background: #0a6e7f;
    color: #fff;
  }
`;

const charterData = [
  {
    label: "Business Travel",
    title: "Private Jet Charter For Business",
    description:
      "For busy executives, senior management, and key personnel, private jet charter is the go-to choice to fulfil tight schedules. Experience time-saving convenience, ultimate flexibility, and premium comfort.",
    image: "/acharter2.webp",
  },
  {
    label: "Leisure Travel",
    title: "Luxury Charter For Leisure",
    description:
      "Transform your vacation into an extraordinary experience. From romantic getaways to family adventures, enjoy personalized service, flexible scheduling, and access to exclusive destinations.",
    image: "/charter.avif",
    reversed: true,
  },
];

const features = [
  { title: "Time Efficiency", desc: "Direct flights, no connections or lengthy procedures." },
  { title: "Safety First", desc: "Rigorous standards and experienced crew on every flight." },
  { title: "Personalized", desc: "Tailored to your specific needs and preferences." },
  { title: "Fleet Flexibility", desc: "From light jets to heavy jets, matched to your needs." },
  { title: "Global Reach", desc: "Access destinations commercial airlines cannot." },
  { title: "Your Schedule", desc: "Fly when you want, not when the airline dictates." },
];

const AircraftCharters = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroLabel>Private Charter</HeroLabel>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fly Beyond Limits
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium private jet charter services tailored to your business and
            leisure travel needs.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionInner>
          {charterData.map((item, index) => (
            <ContentRow key={index}>
              {item.reversed ? (
                <>
                  <ContentBox
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <SectionLabel>{item.label}</SectionLabel>
                    <SectionTitle>{item.title}</SectionTitle>
                    <SectionDesc>{item.description}</SectionDesc>
                    <DiscoverLink to="/contactus">
                      Discover
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </DiscoverLink>
                  </ContentBox>
                  <ImageBox
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <img src={item.image} alt={item.title} />
                  </ImageBox>
                </>
              ) : (
                <>
                  <ImageBox
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <img src={item.image} alt={item.title} />
                  </ImageBox>
                  <ContentBox
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <SectionLabel>{item.label}</SectionLabel>
                    <SectionTitle>{item.title}</SectionTitle>
                    <SectionDesc>{item.description}</SectionDesc>
                    <DiscoverLink to="/contactus">
                      Discover
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </DiscoverLink>
                  </ContentBox>
                </>
              )}
            </ContentRow>
          ))}
        </SectionInner>
      </Section>

      <Section $bg="#0d3e5c">
        <SectionInner>
          <SectionLabel $light $center>Why Choose Us</SectionLabel>
          <SectionTitle
            $light
            $center
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            The Jetstream Advantage
          </SectionTitle>
          <SectionDesc
            $light
            $center
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Exceptional experiences through safety, service excellence, and
            operational reliability.
          </SectionDesc>
          <FeaturesGrid>
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionInner>
      </Section>

      <CTASection>
        <SectionInner style={{ textAlign: "center" }}>
          <SectionLabel $center>Get Started</SectionLabel>
          <SectionTitle
            $center
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Fly Private?
          </SectionTitle>
          <SectionDesc
            $center
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss your private jet charter requirements.
          </SectionDesc>
          <CTAButton to="/#charter">Request Charter Quote</CTAButton>
        </SectionInner>
      </CTASection>
    </PageContainer>
  );
};

export default AircraftCharters;
