import React from 'react';
import styled from 'styled-components';
import ContactForm from './Form';

// Styled Components
const ContactSection = styled.section`
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
  margin-top: 5rem;
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

const InfoCard = styled.div`
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

const InfoContent = styled.div`
  padding: 30px;
  background-color: #fff;
`;

const Location = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #0d3e69;
  font-weight: 500;
`;

const Address = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #0d3e69;

  p {
    margin: 5px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  color: #0d3e69;
`;

// Main ContactUs Component
const ContactUs = () => {
  return (
    <ContactSection>
      <Header>Contact Information</Header>
      <ContactForm />

      <SubHeader>
        Let’s Make Something Awesome Together. Drop us a line or give us a heads-up if you are interested in visiting us.
      </SubHeader>

      <InfoContainer>
        {/* UAE Contact */}
        <InfoCard>
          <ImageContainer>
            <img src="/dubai.webp" alt="UAE Office" />
          </ImageContainer>
          <InfoContent>
            <Location>U.A.E</Location>
            <Address>
              Jetstream International FZE <br />
              PO Box 8536, Sharjah Airport International Free Zone, U.A.E
            </Address>
            <ContactDetails>
              <p>
                <Icon>✉</Icon> uaeops@jsiaviation.com
              </p>
              <p>
                <Icon>📞</Icon> +971 50 1917583
              </p>
            </ContactDetails>
          </InfoContent>
        </InfoCard>

        {/* UK Contact */}
        <InfoCard>
          <ImageContainer>
            <img src="/london.webp" alt="UK Office" />
          </ImageContainer>
          <InfoContent>
            <Location>United Kingdom</Location>
            <Address>
              Jetstream International (UK) Limited <br />
              i Mex House, Unit W-12, 575-599 Maxted Road, Hemel Hempstead, HP27DX.
            </Address>
            <ContactDetails>
              <p>
                <Icon>✉</Icon> ops@jsiaviation.co.uk
              </p>
              <p>
                <Icon>📞</Icon> +44 1442818173
              </p>
            </ContactDetails>
          </InfoContent>
        </InfoCard>
      </InfoContainer>
    </ContactSection>
  );
};

export default ContactUs;
