import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import ContactForm from "./Form";
import { FaPlaneArrival, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const MapSection = styled.section`
  height: 70vh;
  width: 100%;
  position: relative;
  margin-top: 80px;
  background: #f5f7fa;
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(13, 62, 105, 0.05) 0%,
    rgba(13, 62, 105, 0.1) 100%
  );
  pointer-events: none;
`;

const ContactSection = styled.section`
  position: relative;
  margin-top: -100px;
  padding: 0 20px 80px;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const LocationTitle = styled.h3`
  font-size: 2rem;
  color: #0d3e69;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Address = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  color: #0d3e69;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #1a5b94;
  }

  svg {
    font-size: 1.3rem;
  }
`;

const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #0d3e69;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const defaultCenter = {
  lat: 51.767505,
  lng: -0.4396331
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#0d3e69" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c3cfe2" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f7fa" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#e8eef4" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#e8eef4" }]
  }
];

const ContactUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCfs5lK5HSuElwgXC0fzuBVV3v-nb5GPYc"
  });

  return (
    <>
      <MapSection>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%'
            }}
            zoom={16}
            center={defaultCenter}
            options={{
              styles: mapStyles,
              disableDefaultUI: false,
              zoomControl: true,
              mapTypeControl: true,
              scaleControl: true,
              streetViewControl: true,
              rotateControl: true,
              fullscreenControl: true
            }}
          >
            {isLoaded && (
              <Marker
                position={defaultCenter}
                icon={{
                  path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                  fillColor: "#0d3e69",
                  fillOpacity: 1,
                  strokeWeight: 2,
                  strokeColor: "#ffffff",
                  scale: 8,
                  rotation: 45,
                }}
                animation={window.google.maps.Animation.DROP}
                title="Jetstream International"
              />
            )}
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
        <MapOverlay />
      </MapSection>

      <ContactSection>
        <ContentWrapper>
          <ContactGrid>
            <InfoCard>
              <LocationTitle>
                <FaMapMarkerAlt />
                Our Location
              </LocationTitle>
              <Address>
                Jetstream International (UK) Limited<br />
                i Mex House, Unit W-12,<br />
                575-599 Maxted Road,<br />
                Hemel Hempstead, HP27DX
              </Address>
              <ContactInfo>
                <ContactItem href="mailto:ops@jsiaviation.co.uk">
                  <FaEnvelope />
                  ops@jsiaviation.co.uk
                </ContactItem>
                <ContactItem href="tel:+441442818173">
                  <FaPhone />
                  +44 1442818173
                </ContactItem>
              </ContactInfo>
            </InfoCard>

            <FormCard>
              <FormTitle>
                <FaPlaneArrival />
                Get in Touch
              </FormTitle>
              <ContactForm />
            </FormCard>
          </ContactGrid>
        </ContentWrapper>
      </ContactSection>
    </>
  );
};

export default ContactUs;
