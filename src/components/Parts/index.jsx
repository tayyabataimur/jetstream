import React from 'react';
import styled from 'styled-components';
import { FaPlane, FaTools, FaExchangeAlt, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';

// Parallax Section Styled Components
const ParallaxSection = styled.section`
  height: 500px;
  background-image: url('/parts.jpg'); /* Replace with your image */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

const ParallaxContent = styled.div`
  background: rgba(0, 62, 105, 0.7);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
`;

const ParallaxHeading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #fff;
`;

const ParallaxSubheading = styled.p`
  font-size: 1.5rem;
  color: #daedfe;
`;

// Main Content Section
const ProcurementSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  color: #0d3e69;
`;

const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  color: #0d3e69;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: #555;
  text-align: center;
  max-width: 800px;
`;

// Service Section
const ServiceSection = styled.section`
  padding: 50px 20px;
  background-color: #daedfe;
`;

const ServicesHeader = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  color: #0d3e69;
  font-weight: 700;
  margin-bottom: 40px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #0d3e69;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h4`
  font-size: 1.5rem;
  color: #0d3e69;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Main Component
const AircraftPartsProcurement = () => {
  return (
    <>
      {/* Parallax Section */}
      <ParallaxSection>
        {/* <ParallaxContent>
          <ParallaxHeading>Aircraft Parts Procurement</ParallaxHeading>
          <ParallaxSubheading>
            Cost-effective solutions for civil, corporate, and defense aircraft spares.
          </ParallaxSubheading>
        </ParallaxContent> */}
      </ParallaxSection>

      {/* Main Content Section */}
      <ProcurementSection>
        <Header>Our Expertise in Aircraft Parts Procurement</Header>
        <SubHeader>
          We pride ourselves on offering cost-effective solutions for the civil, corporate, and defense sectors. Whether it's a one-off part or a full consignment, we work with all key suppliers, repair shops, and OEMs worldwide to support our customers' routine purchases or AOG (Aircraft on Ground) needs.
        </SubHeader>
      </ProcurementSection>

      {/* Services Section */}
      <ServiceSection>
        <ServicesHeader>Our Services</ServicesHeader>

        <ServiceGrid>
          {/* Service 1 */}
          <ServiceCard>
            <Icon>
              <FaPlane />
            </Icon>
            <ServiceTitle>Civil and Defence Aircraft Spares Support</ServiceTitle>
            <ServiceDescription>
              We provide comprehensive spares support for civil and defense aircraft, ensuring availability for all your needs.
            </ServiceDescription>
          </ServiceCard>

          {/* Service 2 */}
          <ServiceCard>
            <Icon>
              <FaTools />
            </Icon>
            <ServiceTitle>Corporate Jets and VIP Aircraft Spares Support</ServiceTitle>
            <ServiceDescription>
              Offering specialized spares support for corporate jets and VIP aircraft, tailored to meet the highest standards.
            </ServiceDescription>
          </ServiceCard>

          {/* Service 3 */}
          <ServiceCard>
            <Icon>
              <FaExchangeAlt />
            </Icon>
            <ServiceTitle>Rotary Wing Spares Support</ServiceTitle>
            <ServiceDescription>
              We provide rotary wing spares, ensuring support for helicopters in both civil and defense sectors.
            </ServiceDescription>
          </ServiceCard>

          {/* Service 4 */}
          <ServiceCard>
            <Icon>
              <FaShieldAlt />
            </Icon>
            <ServiceTitle>Managing Shop Visits, Exchanges, Warranty</ServiceTitle>
            <ServiceDescription>
              From managing shop visits to handling warranty and exchange processes, we ensure everything runs smoothly.
            </ServiceDescription>
          </ServiceCard>

          {/* Service 5 */}
          <ServiceCard>
            <Icon>
              <FaBoxOpen />
            </Icon>
            <ServiceTitle>P&W JT8D Series, CF34-3, CF34-10, CFM56 Engine Sales</ServiceTitle>
            <ServiceDescription>
              Specializing in engine sales, including P&W JT8D, CF34, and CFM56 series for purchase or lease.
            </ServiceDescription>
          </ServiceCard>

          {/* Service 6 */}
          <ServiceCard>
            <Icon>
              <FaPlane />
            </Icon>
            <ServiceTitle>Door-to-Door and Hand-Carry Service for AOG Spares</ServiceTitle>
            <ServiceDescription>
              We offer reliable door-to-door and hand-carry services for urgent AOG spares deliveries.
            </ServiceDescription>
          </ServiceCard>
        </ServiceGrid>
      </ServiceSection>
    </>
  );
};

export default AircraftPartsProcurement;
