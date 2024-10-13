import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import ContactForm from "./Form";
import { FaPlaneArrival, FaEnvelope, FaPhone } from "react-icons/fa";

// Styled Components
const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #0d3e69;
  width: 100%;
  margin-top: 80px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  color: #0d3e69;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: #555;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FormMapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  margin-bottom: 80px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const InfoContent = styled.div`
  padding: 30px;
`;

const Location = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #0d3e69;
  font-weight: 600;
`;

const Address = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
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

// Google Maps Settings
const mapStyles = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 25.276987,
  lng: 55.296249,
};

const ContactUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
  })

  return (
    <ContactSection>
      <ContentWrapper>
        <Header>
          <FaPlaneArrival
            style={{
              color: "#0d3e69",
              fontSize: "2.5rem",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          Let&apos;s Fly Together
        </Header>

        <SubHeader>
          Embark on a journey of excellence with us. Whether you have a question, a proposal, or simply want to connect, we&apos;re here to make your aviation dreams take flight.
        </SubHeader>

        <FormMapContainer>
          <FormContainer>
            <ContactForm />
          </FormContainer>

          <MapContainer>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                zoom={12}
                center={defaultCenter}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      elementType: "geometry",
                      stylers: [{ color: "#e8eaed" }]
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#c3cfe2" }]
                    },
                    {
                      featureType: "poi",
                      stylers: [{ visibility: "off" }]
                    }
                  ]
                }}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            ) : <div>Loading...</div>}
          </MapContainer>
        </FormMapContainer>

        <InfoContainer>
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
                  <Icon><FaEnvelope /></Icon> uaeops@jsiaviation.com
                </p>
                <p>
                  <Icon><FaPhone /></Icon> +971 50 1917583
                </p>
              </ContactDetails>
            </InfoContent>
          </InfoCard>

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
                  <Icon><FaEnvelope /></Icon> ops@jsiaviation.co.uk
                </p>
                <p>
                  <Icon><FaPhone /></Icon> +44 1442818173
                </p>
              </ContactDetails>
            </InfoContent>
          </InfoCard>
        </InfoContainer>
      </ContentWrapper>
    </ContactSection>
  );
};

export default ContactUs;
