import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPlane, 
  FaTools, 
  FaExchangeAlt, 
  FaShieldAlt, 
  FaBoxOpen,
  FaArrowRight,
  FaCog,
  FaGlobe
} from 'react-icons/fa';

// Page Container
const PageContainer = styled.div`
  background: #fff;
`;

// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(13, 62, 105, 0.9) 0%, rgba(13, 62, 105, 0.7) 100%),
              url('/parts.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: white;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 3rem;
  color: white;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 400;
`;

const HeroButton = styled(motion(Link))`
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

// About Section
const AboutSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
`;

// Services Section
const ServicesSection = styled.section`
  padding: 120px 20px;
  background: #0d3e69;
  color: white;
`;

const ServicesGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #0d3e69;
  font-size: 2rem;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
`;

const ServiceTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.3;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #f8f9fa;
    transform: translateX(5px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

// Features Section
const FeaturesSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #e3f2fd 100%);
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);
`;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0d3e69;
`;

const FeatureDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
`;

// CTA Section
const CTASection = styled.section`
  padding: 120px 20px;
  background: #0d3e69;
  text-align: center;
  color: white;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
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

// Data for Services
const servicesData = [
  {
    icon: <FaPlane />,
    title: "Civil and Defence Aircraft Spares Support",
    description: "We provide comprehensive spares support for civil and defense aircraft, ensuring availability for all your needs with global sourcing capabilities."
  },
  {
    icon: <FaTools />,
    title: "Corporate Jets and VIP Aircraft Spares Support",
    description: "Offering specialized spares support for corporate jets and VIP aircraft, tailored to meet the highest standards of luxury aviation."
  },
  {
    icon: <FaExchangeAlt />,
    title: "Rotary Wing Spares Support",
    description: "We provide rotary wing spares, ensuring support for helicopters in both civil and defense sectors with rapid deployment."
  },
  {
    icon: <FaShieldAlt />,
    title: "Managing Shop Visits, Exchanges, Warranty",
    description: "From managing shop visits to handling warranty and exchange processes, we ensure everything runs smoothly and efficiently."
  },
  {
    icon: <FaBoxOpen />,
    title: "P&W JT8D Series, CF34-3, CF34-10, CFM56 Engine Sales",
    description: "Specializing in engine sales, including P&W JT8D, CF34, and CFM56 series for purchase or lease with comprehensive support."
  },
  {
    icon: <FaCog />,
    title: "Door-to-Door and Hand-Carry Service for AOG Spares",
    description: "We offer reliable door-to-door and hand-carry services for urgent AOG spares deliveries worldwide, 24/7 availability."
  }
];

const featuresData = [
  {
    icon: <FaGlobe />,
    title: "Global Network",
    description: "Extensive worldwide network of suppliers, repair shops, and OEMs for comprehensive parts sourcing."
  },
  {
    icon: <FaCog />,
    title: "AOG Support",
    description: "24/7 Aircraft on Ground support with rapid response times and emergency parts delivery."
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    description: "All parts meet or exceed OEM specifications with full traceability and certification."
  },
  {
    icon: <FaTools />,
    title: "Technical Expertise",
    description: "Our technical team provides expert guidance and support for all your procurement needs."
  }
];

const AircraftPartsProcurement = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Parts Delivered, Promises Kept
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Cost-effective solutions for civil, corporate, and defense aircraft spares. 
            Your trusted partner for reliable parts procurement worldwide.
          </HeroSubtitle>
          <HeroButton
            to="/contactus"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote <FaArrowRight />
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Expertise in Aircraft Parts Procurement
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We pride ourselves on offering cost-effective solutions for the civil, corporate, and defense sectors. 
            Whether it&apos;s a one-off part or a full consignment, we work with all key suppliers, repair shops, 
            and OEMs worldwide to support our customers&apos; routine purchases or AOG (Aircraft on Ground) needs.
          </SectionSubtitle>
        </SectionHeader>
      </AboutSection>

      <ServicesSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            Our Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Comprehensive aircraft parts procurement services designed to keep your fleet operational 
            with minimal downtime and maximum efficiency.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceLink to="/contactus">
                Learn More <FaArrowRight />
              </ServiceLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <FeaturesSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Our Procurement Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the difference with our commitment to quality, reliability, and exceptional service 
            in aircraft parts procurement.
          </SectionSubtitle>
        </SectionHeader>

        <FeaturesGrid>
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Streamline Your Parts Procurement?</CTATitle>
          <CTADescription>
            Contact us today to learn more about our comprehensive aircraft parts procurement services 
            and how we can support your operational needs with reliable, cost-effective solutions.
          </CTADescription>
          <CTAButton
            to="/contactus"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default AircraftPartsProcurement;
