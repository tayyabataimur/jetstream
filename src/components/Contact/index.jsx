import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import ContactForm from "./Form";

const Page = styled.div`
  background: #fff;
`;

const Hero = styled.section`
  height: 50vh;
  min-height: 400px;
  background: #0d3e5c;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

const HeroLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const HeroDesc = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ContentSection = styled.section`
  padding: 80px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.5rem;
`;

const InfoTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 600;
  color: #0d3e5c;
  margin-bottom: 1.5rem;
`;

const InfoBlock = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.8;
`;

const InfoLink = styled.a`
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: #0d3e5c;
  transition: color 0.2s ease;
  margin-top: 0.25rem;

  &:hover {
    color: #666;
  }
`;

const FormCol = styled.div``;

const FormTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 600;
  color: #0d3e5c;
  margin-bottom: 2rem;
`;

const MapContainer = styled.section`
  height: 400px;
  width: 100%;
  background: #f5f5f5;
`;

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#0d3e5c" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e0e0e0" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
];

const defaultCenter = { lat: 51.767505, lng: -0.4396331 };

const ContactUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCfs5lK5HSuElwgXC0fzuBVV3v-nb5GPYc",
  });

  return (
    <Page>
      <Hero>
        <div>
          <HeroTitle>Get in Touch</HeroTitle>
          <HeroDesc>
            We&apos;d love to hear from you. Reach out and our team will respond
            within 24 hours.
          </HeroDesc>
        </div>
      </Hero>

      <ContentSection>
        <Grid>
          <InfoCol>
            <div>
              <InfoLabel>Office</InfoLabel>
              <InfoTitle>Our Location</InfoTitle>
            </div>
            <InfoBlock>
              <InfoText>
                Jetstream International (UK) Limited
                <br />
                i Mex House, Unit W-12
                <br />
                575-599 Maxted Road
                <br />
                Hemel Hempstead, HP27DX
              </InfoText>
            </InfoBlock>
            <InfoBlock>
              <InfoLabel>Email</InfoLabel>
              <InfoLink href="mailto:ops@jsiaviation.co.uk">
                ops@jsiaviation.co.uk
              </InfoLink>
            </InfoBlock>
            <InfoBlock>
              <InfoLabel>Phone</InfoLabel>
              <InfoLink href="tel:+441442818173">+44 1442 818173</InfoLink>
            </InfoBlock>
          </InfoCol>

          <FormCol>
            <FormTitle>Send a Message</FormTitle>
            <ContactForm />
          </FormCol>
        </Grid>
      </ContentSection>

      <MapContainer>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            zoom={16}
            center={defaultCenter}
            options={{
              styles: mapStyles,
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            <Marker
              position={defaultCenter}
              icon={{
                path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                fillColor: "#0d3e5c",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "#ffffff",
                scale: 8,
                rotation: 45,
              }}
              title="Jetstream International"
            />
          </GoogleMap>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#999",
            }}
          >
            Loading map...
          </div>
        )}
      </MapContainer>
    </Page>
  );
};

export default ContactUs;
