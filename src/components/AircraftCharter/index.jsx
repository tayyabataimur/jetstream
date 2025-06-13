import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaPlane, 
  FaGlobe, 
  FaHandsHelping, 
  FaShieldAlt, 
  FaClock,
  FaArrowRight,
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";

// Page Container
const PageContainer = styled.div`
  background: #fff;
`;

// Parallax Section (Original JSI structure)
const ParallaxSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(13, 62, 105, 0.8) 0%, rgba(13, 62, 105, 0.6) 100%),
              url('/acharter.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ParallaxContent = styled(motion.div)`
  text-align: center;
  color: white;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 2;
`;

const ParallaxTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ParallaxSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 3rem;
  color: white;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 400;
`;

// Main Charter Services Section
const MainCharterSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 3rem;
`;

// Charter Cards Grid
const CharterGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 60px;
`;

const CharterCard = styled(motion.div)`
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: 60px;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;
    text-align: center;
  }
`;

const CharterContent = styled.div`
  order: ${props => props.reverse ? 2 : 1};

  @media (max-width: 968px) {
    order: 2;
  }
`;

const CharterIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);

  @media (max-width: 968px) {
    margin: 0 auto 2rem;
  }
`;

const CharterSubtitle = styled.p`
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const CharterTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const CharterDescription = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const CharterImage = styled.div`
  order: ${props => props.reverse ? 1 : 2};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 968px) {
    order: 1;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

// Reasons Section
const ReasonsSection = styled.section`
  padding: 120px 20px;
  background: #0d3e69;
  color: white;
`;

const ReasonsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

const ReasonCard = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const ReasonIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #0d3e69;
  font-size: 1.8rem;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
`;

const ReasonTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const ReasonDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

// CTA Section
const CTASection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #e3f2fd 100%);
  text-align: center;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 3rem;
  line-height: 1.7;
`;

const CTAButton = styled(motion(Link))`
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  color: white;
  border: none;
  padding: 20px 45px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(13, 62, 105, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(13, 62, 105, 0.4);
    background: linear-gradient(135deg, #1a5490 0%, #2563eb 100%);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

// Original JSI Aviation Data
const charterData = [
  {
    icon: <FaUsers />,
    subtitle: "Business Travel",
    title: "Private Jet Charter For Business",
    description: "For busy executives, senior management, and key personnel, private jet charter is the go-to choice to fulfil tight schedules and ever-changing meetings. Experience time-saving convenience, ultimate flexibility, and premium comfort that keeps you focused on what matters most.",
    image: "/acharter2.webp"
  },
  {
    icon: <FaGlobe />,
    subtitle: "Leisure Travel", 
    title: "Luxury Charter For Leisure",
    description: "Transform your vacation into an extraordinary experience with our luxury charter services. From romantic getaways to family adventures, enjoy personalized service, flexible scheduling, and access to exclusive destinations that commercial airlines simply cannot reach.",
    image: "/charter.avif"
  }
];

const reasonsData = [
  {
    icon: <FaClock />,
    title: "Time Efficiency",
    description: "Save valuable time with direct flights to your destination, avoiding lengthy commercial airline procedures and connections."
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Security",
    description: "Rigorous safety standards and experienced crew ensure your journey is secure, comfortable, and meets the highest aviation standards."
  },
  {
    icon: <FaHandsHelping />,
    title: "Personalized Service",
    description: "Tailored experiences designed around your specific needs, preferences, and schedule for the ultimate travel experience."
  },
  {
    icon: <FaPlane />,
    title: "Fleet Flexibility",
    description: "Access to a diverse range of aircraft types to match your specific travel requirements, from light jets to heavy jets."
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description: "Extensive network of airports worldwide, giving you access to destinations that commercial airlines cannot reach."
  },
  {
    icon: <FaCalendarAlt />,
    title: "Schedule Control",
    description: "Fly on your schedule, not the airline&apos;s. Enjoy complete flexibility with departure times and destinations."
  }
];

// Luxury Experience Section
const LuxurySection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
`;

const LuxuryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

const LuxuryContent = styled(motion.div)`
  padding: 40px 0;
`;

const LuxuryTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const LuxuryDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const LuxuryFeatures = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
`;

const LuxuryFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #6c757d;

  &:before {
    content: "✈";
    color: #0d3e69;
    font-weight: bold;
    margin-right: 15px;
    font-size: 1.2rem;
  }
`;

const LuxuryImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  }
  
  transition: all 0.5s ease;
`;

const LuxuryImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const LuxuryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(13, 62, 105, 0.8));
  padding: 40px 30px 30px;
  color: white;
`;

const LuxuryOverlayTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const AircraftCharters = () => {
  return (
    <PageContainer>
      {/* Parallax Hero Section */}
      <ParallaxSection>
        <ParallaxContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ParallaxTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Fly Beyond Limits
          </ParallaxTitle>
          <ParallaxSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience premium private jet charter services tailored to your business and leisure travel needs. 
            Fly with confidence, comfort, and complete flexibility.
          </ParallaxSubtitle>
        </ParallaxContent>
      </ParallaxSection>

      {/* Main Charter Services Section */}
      <MainCharterSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Private Jet Charter Services
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            JSI Aviation provides comprehensive private jet charter solutions for discerning travelers. 
            Whether you&apos;re traveling for business or leisure, our charter services offer unparalleled convenience, 
            luxury, and flexibility to meet your specific travel requirements.
          </SectionDescription>
        </SectionHeader>

        <CharterGrid>
          {charterData.map((charter, index) => (
            <CharterCard
              key={index}
              reverse={index % 2 !== 0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CharterContent reverse={index % 2 !== 0}>
                <CharterIcon>
                  {charter.icon}
                </CharterIcon>
                <CharterSubtitle>{charter.subtitle}</CharterSubtitle>
                <CharterTitle>{charter.title}</CharterTitle>
                <CharterDescription>{charter.description}</CharterDescription>
              </CharterContent>
              <CharterImage reverse={index % 2 !== 0}>
                <img src={charter.image} alt={charter.title} />
              </CharterImage>
            </CharterCard>
          ))}
        </CharterGrid>
      </MainCharterSection>

      {/* Luxury Experience Section */}
      <LuxurySection>
        <LuxuryContainer>
          <LuxuryContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LuxuryTitle>The Ultimate Luxury Experience</LuxuryTitle>
            <LuxuryDescription>
              From the moment you arrive at the airport to your final destination, experience unparalleled luxury 
              and convenience. Our premium charter services include ground transportation coordination, ensuring 
              a seamless journey from door to door.
            </LuxuryDescription>
            <LuxuryFeatures
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LuxuryFeature>Premium ground transportation coordination</LuxuryFeature>
              <LuxuryFeature>Luxury aircraft with state-of-the-art amenities</LuxuryFeature>
              <LuxuryFeature>Personalized concierge services</LuxuryFeature>
              <LuxuryFeature>Seamless airport transfers and VIP handling</LuxuryFeature>
              <LuxuryFeature>Complete privacy and discretion</LuxuryFeature>
            </LuxuryFeatures>
          </LuxuryContent>
          
          <LuxuryImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LuxuryImage src="/main.jpg" alt="Luxury aircraft and premium ground transportation" />
            <LuxuryOverlay>
              <LuxuryOverlayTitle>Premium Fleet & Ground Services</LuxuryOverlayTitle>
            </LuxuryOverlay>
          </LuxuryImageContainer>
        </LuxuryContainer>
      </LuxurySection>

      {/* Reasons to Choose Section */}
      <ReasonsSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            Why Choose Jetstream Aviation
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Discover the advantages of flying with JSI Aviation&apos;s private jet charter services. 
            We deliver exceptional experiences through our commitment to safety, service excellence, and operational reliability.
          </SectionDescription>
        </SectionHeader>

        <ReasonsGrid>
          {reasonsData.map((reason, index) => (
            <ReasonCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ReasonIcon>
                {reason.icon}
              </ReasonIcon>
              <ReasonTitle>{reason.title}</ReasonTitle>
              <ReasonDescription>{reason.description}</ReasonDescription>
            </ReasonCard>
          ))}
        </ReasonsGrid>
      </ReasonsSection>

      {/* Call to Action Section */}
      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Experience Premium Charter?</CTATitle>
          <CTADescription>
            Contact JSI Aviation today to discuss your private jet charter requirements. 
            Our experienced team is ready to arrange your next flight with personalized service and attention to detail.
          </CTADescription>
          <CTAButton
            to="/contactus"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Charter Quote <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default AircraftCharters;
