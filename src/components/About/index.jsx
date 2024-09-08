import React from 'react';
import styled from 'styled-components';

// Styled Components for Parallax Background
const ParallaxSection = styled.section`
  height: 500px;
  background-image: url('https://aircharterservice-globalcontent-live.cphostaccess.com/images/migration/Footer-final_tcm36-51242.jpg'); /* Replace with your image */
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
  background: rgba(0, 62, 105, 0.7); /* Dark overlay for contrast */
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

// Main About Us Section
const AboutSection = styled.section`
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

// Meet the Team Section
const TeamSection = styled.section`
  background-color: #daedfe;
  padding: 80px 20px;
  text-align: center;
`;

const TeamHeader = styled.h3`
  font-size: 2.5rem;
  color: #0d3e69;
  font-weight: 700;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamMember = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TeamImage = styled.div`
  height: 300px;
  background-color: #daedfe;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TeamInfo = styled.div`
  padding: 20px;
`;

const TeamName = styled.h4`
  font-size: 1.5rem;
  color: #0d3e69;
  font-weight: 500;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
`;

// About Us Page Component
const AboutUs = () => {
  return (
    <>
      {/* Parallax Section */}
      <ParallaxSection>
      </ParallaxSection>

      {/* About Us Section */}
      <AboutSection>
        <Header>About Us</Header>
        <SubHeader>
          At Jetstream International, we believe that our people are our most valuable asset. Our experienced team is dedicated to delivering outstanding service, pushing the boundaries of excellence in the aviation industry, and ensuring that our clients get the best service possible. 
        </SubHeader>
      </AboutSection>

      {/* Meet the Team Section */}
      <TeamSection>
        <TeamHeader>Meet Our Team</TeamHeader>

        <TeamGrid>
          {/* Team Member 1 */}
          <TeamMember>
            <TeamImage>
              <img src="/shoaib.png" alt="Team Member 1" />
            </TeamImage>
            <TeamInfo>
              <TeamName>Shoaib Iqbal</TeamName>
              <TeamRole>Founder & Director</TeamRole>
            </TeamInfo>
          </TeamMember>

          {/* Team Member 2 */}
          <TeamMember>
            <TeamImage>
              <img src="https://via.placeholder.com/400x300" alt="Team Member 2" />
            </TeamImage>
            <TeamInfo>
              <TeamName>Shehryar</TeamName>
              <TeamRole>Operations Manager</TeamRole>
            </TeamInfo>
          </TeamMember>

          {/* Team Member 3 */}
          <TeamMember>
            <TeamImage>
              <img src="https://via.placeholder.com/400x300" alt="Team Member 3" />
            </TeamImage>
            <TeamInfo>
              <TeamName>Mike Johnson</TeamName>
              <TeamRole>Director of Sales</TeamRole>
            </TeamInfo>
          </TeamMember>

          {/* Team Member 4 */}
          <TeamMember>
            <TeamImage>
              <img src="https://via.placeholder.com/400x300" alt="Team Member 4" />
            </TeamImage>
            <TeamInfo>
              <TeamName>Sarah Lee</TeamName>
              <TeamRole>Marketing Manager</TeamRole>
            </TeamInfo>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </>
  );
};

export default AboutUs;
