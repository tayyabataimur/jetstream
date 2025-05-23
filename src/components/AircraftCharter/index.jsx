import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaPlane,
  FaGlobe,
  FaHandsHelping,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Parallax Section
const ParallaxSection = styled.section`
  height: 100vh;
  background-image: url("https://www.luxaviation.com/wp-content/uploads/2023/03/How-to-Charter-a-Private-Jet-A-Complete-Guide_Visual-Seven.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

// Main Section for Charter Services
const ChartersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  font-family: "Poppins", sans-serif;
  background-color: #f8faff;
  color: #0d3e69;
`;

// Full-width section with drop shadow
const FullWidthRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  padding: 50px 0;
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  animation: ${(props) => (props.reverse ? slideInRight : slideInLeft)} 1s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Lora", serif;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0d3e69;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  max-width: 500px;
  font-family: "Lora", serif;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

// Create the styled card component
const Card = styled.div`
  opacity: 0;
  transform: translateX(100%); // Initial off-screen position
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  // Apply the in-view animation when the card is visible
  &.in-view {
    animation: ${slideInRight} 1.5s forwards;
    animation-delay: ${(props) => props.delay || "0.2s"}; // Add delay here
  }
`;
// Add these new styled components
const ParallaxForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 50px;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const FormWrapper = styled.form`
  width: 350px;
  background-color: rgba(13, 62, 105, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: #0d3e69;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-top: 10px;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

// Component
const AircraftCharters = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Add the in-view class to trigger the animation
        }
      });
    });

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <>
      {/* Parallax Section */}
      <ParallaxSection>
        {/* <ParallaxContent> */}
        <ParallaxForm>
          <FormTitle></FormTitle>
          <FormWrapper>
            <FormGroup>
              <Label htmlFor="departure">Departure</Label>
              <Input type="text" id="departure" name="departure" placeholder="City or Airport" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="destination">Destination</Label>
              <Input type="text" id="destination" name="destination" placeholder="City or Airport" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" name="date" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="passengers">Passengers</Label>
              <Input type="number" id="passengers" name="passengers" min="1" />
            </FormGroup>
            <SubmitButton type="submit">Book Now</SubmitButton>
          </FormWrapper>
        </ParallaxForm>
        {/* </ParallaxContent> */}
      </ParallaxSection>

      {/* Main Content Section */}
      <ChartersSection>
        {/* First Row (Image on Left, Text on Right) */}
        <Card className="card">
          <FullWidthRow>
            <ImageWrapper>
              <img
                src="/acharter2.webp"
                alt="Private Jet Charter for Business"
              />
            </ImageWrapper>
            <TextWrapper>
              <SectionHeader>Private Jet Charter For Business</SectionHeader>
              <SectionText>
                For busy executives, senior management, and key personnel,
                private jet charter is the go-to choice to fulfil tight
                schedules and ever-changing meetings.
                <br />
                <br />
                <strong>Time-saving:</strong> Say goodbye to airport queues and
                delays.
                <br />
                <strong>Flexibility:</strong> Tailor your travel plans according
                to your business needs.
                <br />
                <strong>Premium experience:</strong> Enjoy the utmost comfort
                and a stay-focused environment on board.
                <br />
                <a href="#">Book your journey</a>
              </SectionText>
            </TextWrapper>
          </FullWidthRow>
        </Card>

        {/* Second Row (Text on Left, Image on Right) */}
        <Card className="card">
          <FullWidthRow reverse>
            <TextWrapper>
              <SectionHeader>Private Jet Charter For Leisure</SectionHeader>
              <SectionText>
                For caring lovers, families, and friends seeking a quality life
                experience, private jets offer a personalized and stress-free
                travel experience.
                <br />
                <br />
                <strong>Privacy:</strong> Enjoy the exclusivity of traveling
                with your loved ones in a private jet.
                <br />
                <strong>Convenience:</strong> Skip the hassle of commercial
                airports and long security lines.
                <br />
                <strong>Safety and hygiene:</strong> Minimize contact with
                strangers and adhere to the highest safety and hygiene
                standards.
                <br />
                <a href="#">Book your journey</a>
              </SectionText>
            </TextWrapper>
            <ImageWrapper>
              <img
                src="/acharter3.jpeg"
                alt="Private Jet Charter for Leisure"
              />
            </ImageWrapper>
          </FullWidthRow>
        </Card>

        {/* Third Row (Image on Left, Text on Right) */}
          <FullWidthRow>
            <ImageWrapper>
              <img src="/acharter4.jpg" alt="Our Private Jet Options" />
            </ImageWrapper>
            <TextWrapper>
              <SectionHeader>
                Our Private Jet Options – Your Choice
              </SectionHeader>
              <SectionText>
                At Jetstream Aviation, we offer a wide selection of aircraft
                options to cater to your specific preferences and requirements.
                <br />
                <br />
                From piston planes to light jets, our private jet consultants
                will assist you in selecting the ideal aircraft for your next
                flight.
                <br />
                <a href="#">Discover</a>
              </SectionText>
            </TextWrapper>
          </FullWidthRow>

        {/* Fourth Row (Text on Left, Image on Right) */}
          <FullWidthRow reverse>
            <TextWrapper>
              <SectionHeader>
                Reasons To Choose Jetstream Aviation
              </SectionHeader>
              <SectionText>
                <div>
                  <FaHandsHelping
                    style={{
                      color: "#0d3e69",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  />
                  <strong>Truly one-stop service:</strong> From flight securing
                  and trip support to terminals and ground handling, Jetstream
                  Aviation provides comprehensive support at every stage of your
                  private jet charter journey.
                </div>
                <br />
                <div>
                  <FaGlobe
                    style={{
                      color: "#0d3e69",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  />
                  <strong>Global network:</strong> With 37 global terminals and
                  more than 50 locations worldwide in 25 countries, we have a
                  vast network that enables us to serve you no matter where your
                  dream destination may be.
                </div>
                <br />
                <div>
                  <FaShieldAlt
                    style={{
                      color: "#0d3e69",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  />
                  <strong>Your concerns, our priority:</strong> Safety,
                  accountability, and excellence are our core values. Our staff
                  undergo regular training to ensure the highest levels of
                  knowledge and service quality.
                </div>
                <br />
                <div>
                  <FaClock
                    style={{
                      color: "#0d3e69",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  />
                  <strong>24/7 personal flight expert:</strong> Our dedicated
                  flight experts are available round the clock to cater to your
                  needs, whether it's arranging meals from iconic
                  Michelin-starred restaurants or handling last-minute flight
                  changes to remote destinations.
                </div>
                <br />
                <div>
                  <FaPlane
                    style={{
                      color: "#0d3e69",
                      fontSize: "1.5rem",
                      marginRight: "10px",
                    }}
                  />
                  <strong>Value-driven enjoyment:</strong> With Jetstream
                  Aviation, you'll experience the ultimate first-class travel in
                  the air. We provide timely information, comprehensive
                  knowledge, and attentive services, ensuring a truly
                  exceptional journey.
                </div>
              </SectionText>
            </TextWrapper>
            <ImageWrapper>
              <img
                src="/main.jpg"
                alt="Reasons To Choose Jetstream Aviation"
              />
            </ImageWrapper>
          </FullWidthRow>
      </ChartersSection>
    </>
  );
};

export default AircraftCharters;
