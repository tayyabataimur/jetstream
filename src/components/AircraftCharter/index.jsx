import React from 'react';
import styled from 'styled-components';

// Styled Components for Parallax Background
const ParallaxSection = styled.section`
  height: 500px;
  background-image: url('https://sardiniansky.aero/wp-content/uploads/2024/03/charter-flights.jpg'); /* Replace with your image */
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

// Main Page Section
const ChartersSection = styled.section`
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

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  width: 100%;
  max-width: 1200px;
`;

const Section = styled.div`
  background: #daedfe;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SectionContent = styled.div`
  padding: 30px;
  background-color: #fff;
`;

const SectionHeader = styled.h3`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #0d3e69;
  font-weight: 500;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const AircraftCharters = () => {
  return (
    <>
      {/* Parallax Section */}
      <ParallaxSection>
        <ParallaxContent>
          <ParallaxHeading>Experience the VIP</ParallaxHeading>
          {/* <ParallaxSubheading>
            Jetstream International – Expertise in Sales and Leasing
          </ParallaxSubheading> */}
        </ParallaxContent>
      </ParallaxSection>

      {/* Main Content */}
      <ChartersSection>
        <Header>Our Expertise in Aircraft Charters</Header>
        <SubHeader>
          Jetstream International is an expert in aircraft charters, offering real-time market data, recommendations, procurement, and legal services.
        </SubHeader>

        <InfoContainer>
          {/* Aircraft Charters Section */}
          <Section>
            <ImageContainer>
              <img src="https://via.placeholder.com/1200x800" alt="Aircraft Charters" />
            </ImageContainer>
            <SectionContent>
              <SectionHeader>Aircraft Charters</SectionHeader>
              <SectionText>
                Our service covers full market research, recommendation, procurement, and legal services, with a focus on customer satisfaction.
              </SectionText>
            </SectionContent>
          </Section>

          {/* Aircraft Leasing Section */}
          <Section>
            <ImageContainer>
              <img src="https://via.placeholder.com/1200x800" alt="Aircraft Leasing" />
            </ImageContainer>
            <SectionContent>
              <SectionHeader>Aircraft Leasing</SectionHeader>
              <SectionText>
                We specialize in tailor-made leasing solutions in both mature and emerging markets, offering consultation, sourcing, and management of leases.
              </SectionText>
            </SectionContent>
          </Section>

          {/* Engine Leasing Section */}
          <Section>
            <ImageContainer>
              <img src="https://via.placeholder.com/1200x800" alt="Engine Leasing" />
            </ImageContainer>
            <SectionContent>
              <SectionHeader>Engine Leasing</SectionHeader>
              <SectionText>
                We offer short and long-term engine leases for P&W JT8, CF34, and CFM56 engines to suit your operational needs, from temporary coverage to long-term flexibility.
              </SectionText>
            </SectionContent>
          </Section>
        </InfoContainer>
      </ChartersSection>
    </>
  );
};

export default AircraftCharters;
