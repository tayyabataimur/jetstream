import React from "react";
import styled from "styled-components";

// Data for Services
const data = [
  {
    image: "/service-1.webp",
    title: "Ground Handling",
    description: `JSI provides quality handling to all types of fleet from wheels down
    to wheels up. Our extensive global network of top-notch partners can
    help to ensure your ground support match your needs and expectations.`,
  },
  {
    image: "/service-2.svg",
    title: "Flight Permits",
    description: `Being physically present in Pakistan, GCC, and Europe,
    JSI can secure necessary approvals in the shortest possible time. Our
    qualified and experienced team is available 24/7 to answer all your
    questions regarding the support services that you require.`,
  },
  {
    image: "/service-3.svg",
    title: "Aircraft Refueling",
    description: `JSI partners with the best fuel service providers and
    major petroleum companies from around the world. As a result, we are
    able to bring you Jet A1 fuel at over 1,600 contracted locations
    at a competitive and cost-efficient rate.`,
  },
  {
    image: "/service-4.svg",
    title: "Computerized Flight Planning",
    description: `JSI flight planning department plan your flight with the 
    most direct and cost effective routes from any location. En-route wind
    and temperature aloft computation ETP/ETOPS are also taken into account
    during the flight planning process.`,
  },
];

// Parallax Section Styled Component
const ParallaxSection = styled.section`
  height: 500px;
  background-image: url('https://www.luxaviation.com/wp-content/uploads/2020/02/jets-charter-our_fleet-1.jpg');
  background-attachment: fixed;
  filter: blur(0.8);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; /* Default to contain */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  /* Tablet and larger screens */
  @media (min-width: 768px) {
    background-size: cover; /* Switch to cover for larger screens */
  }

  /* Optionally, even larger desktops */
  @media (min-width: 1200px) {
    /* You could adjust background-position or other properties further */
  }
`;

const ParallaxContent = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 800px;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  color: #daedfe;
`;

// Main Service Section
const ServicesSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  color: #0d3e69;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0d3e69;
`;

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1500px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #0d3e69;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;


const Services = () => {
  return (
    <>
      <ParallaxSection>
        <ParallaxContent>
          <Heading>Our Core Competencies</Heading>
        </ParallaxContent>
      </ParallaxSection>

      <ServicesSection>
        <ServiceWrapper>
          {data.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceWrapper>
      </ServicesSection>
    </>
  );
};

export default Services;
