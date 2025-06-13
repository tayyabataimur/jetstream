import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlane, FaFileAlt, FaGasPump, FaRoute, FaArrowRight } from "react-icons/fa";

// Data for Services
const data = [
  {
    icon: <FaPlane />,
    title: "Ground Handling",
    subtitle: "Comprehensive ground support services",
    description: `JSI provides quality handling to all types of fleet from wheels down to wheels up. Our extensive global network of top-notch partners can help to ensure your ground support match your needs and expectations.`,
    image: "/service-1.webp"
  },
  {
    icon: <FaFileAlt />,
    title: "Flight Permits",
    subtitle: "Global regulatory compliance",
    description: `Being physically present in Pakistan, GCC, and Europe, JSI can secure necessary approvals in the shortest possible time. Our qualified and experienced team is available 24/7 to answer all your questions.`,
    image: "/service-2.svg"
  },
  {
    icon: <FaGasPump />,
    title: "Aircraft Refueling",
    subtitle: "Worldwide fuel services",
    description: `JSI partners with the best fuel service providers and major petroleum companies from around the world. We bring you Jet A1 fuel at over 1,600 contracted locations at competitive rates.`,
    image: "/service-3.svg"
  },
  {
    icon: <FaRoute />,
    title: "Computerized Flight Planning",
    subtitle: "Optimized route planning",
    description: `JSI flight planning department plans your flight with the most direct and cost effective routes from any location. En-route wind and temperature aloft computation ETP/ETOPS are taken into account.`,
    image: "/service-4.svg"
  },
];

const PageContainer = styled.div`
  background: #fff;
`;

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(13, 62, 105, 0.9) 0%, rgba(13, 62, 105, 0.7) 100%),
              url('/services3.jpeg');
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

const ServicesSection = styled.section`
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

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  font-weight: 400;
`;

const ServicesGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 80px;
`;

const ServiceCard = styled(motion.div)`
  display: grid;
  grid-template-columns: ${props => props.reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: 80px;
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;
    text-align: center;
  }
`;

const ServiceContent = styled.div`
  order: ${props => props.reverse ? 2 : 1};

  @media (max-width: 1024px) {
    order: 2;
  }
`;

const ServiceImage = styled.div`
  order: ${props => props.reverse ? 1 : 2};
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    img {
      height: 300px;
    }
  }
`;

const ServiceIcon = styled.div`
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

  @media (max-width: 1024px) {
    margin: 0 auto 2rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2.2rem;
  color: #0d3e69;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ServiceSubtitle = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ServiceLink = styled(Link)`
  color: #0d3e69;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    gap: 15px;
    color: #1a5490;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const StatsSection = styled.section`
  background: #0d3e69;
  padding: 120px 20px;
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 1px;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #f8faff 0%, #e3f2fd 100%);
  padding: 120px 20px;
  text-align: center;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #0d3e69;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: #6c757d;
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

const Services = () => {
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
            Aviation Excellence, Delivered
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Delivering excellence in aviation services with global expertise and unwavering commitment to safety.
          </HeroSubtitle>
          <HeroButton
            to="/contactus"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More <FaArrowRight />
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We provide comprehensive aviation services designed to meet the highest standards of excellence and safety in the industry.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {data.map((service, index) => (
            <ServiceCard
              key={index}
              reverse={index % 2 !== 0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceContent reverse={index % 2 !== 0}>
                <ServiceIcon>
                  {service.icon}
                </ServiceIcon>
                <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink to="/contactus">
                  Learn More <FaArrowRight />
                </ServiceLink>
              </ServiceContent>
              <ServiceImage reverse={index % 2 !== 0}>
                <img src={service.image} alt={service.title} />
              </ServiceImage>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <StatsSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ color: 'white' }}
          >
            Our Track Record
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Numbers that reflect our commitment to excellence and reliability in aviation services.
          </SectionSubtitle>
        </SectionHeader>

        <StatsGrid>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StatNumber>1600+</StatNumber>
            <StatLabel>Global Locations</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support Available</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatNumber>100%</StatNumber>
            <StatLabel>Safety Record</StatLabel>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Experience Excellence?</CTATitle>
          <CTADescription>
            Contact us today to learn more about our comprehensive aviation services and how we can support your next journey.
          </CTADescription>
          <CTAButton
            to="/contactus"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Services;
