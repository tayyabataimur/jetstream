import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const FormContainer = styled.section`
  width: 100%;
  padding: 120px 2rem;
  background: #fff;
`;

const FormInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1rem;
`;

const FormTitle = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: #0d3e5c;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const FormSubtitle = styled(motion.p)`
  font-size: 1rem;
  color: #777;
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
`;

const FormCard = styled(motion.div)`
  border: 1px solid #eee;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px 20px;
    border: none;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0d3e5c;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
  background: #fff;
  color: #0d3e5c;
  font-family: "Inter", sans-serif;
  border-radius: 0;

  &:focus {
    border-color: #0d3e5c;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }

  &:hover {
    border-color: #999;
    box-shadow: none;
  }
`;

const Select = styled.select`
  padding: 14px 16px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
  background: #fff;
  color: #0d3e5c;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  border-radius: 0;

  &:focus {
    border-color: #0d3e5c;
    outline: none;
  }

  &:hover {
    border-color: #999;
    box-shadow: none;
  }
`;

const SubmitButton = styled(motion.button)`
  grid-column: 1 / -1;
  background: #0d3e5c;
  color: white;
  border: none;
  padding: 16px 40px;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  border-radius: 0;

  &:hover {
    background: #0a6e7f;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  grid-column: 1 / -1;
  padding: 16px 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  background: ${(props) => (props.$success ? "#f0fdf4" : "#fef2f2")};
  color: ${(props) => (props.$success ? "#166534" : "#991b1b")};
  border: 1px solid ${(props) => (props.$success ? "#bbf7d0" : "#fecaca")};
`;

const FullWidthGroup = styled(InputGroup)`
  grid-column: 1 / -1;
`;

const PrivateCharterForm = () => {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: "",
    passengers: "",
    aircraft: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: "Website Charter Request",
      to_name: "JSI Aviation",
      departure: formData.departure,
      destination: formData.destination,
      date: formData.date,
      passengers: formData.passengers,
      aircraft: formData.aircraft,
      email: formData.email,
      phone: formData.phone,
      to_email: "ops@jsiaviation.com",
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        "service_mktmsjy",
        "template_k2odggi",
        templateParams,
        "2hiprBLSnsGWY6Sa3"
      );

      setStatus("success");
      setFormData({
        departure: "",
        destination: "",
        date: "",
        passengers: "",
        aircraft: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer id="charter">
      <FormInner>
        <FormHeader>
          <Label>Book Now</Label>
          <FormTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Request Your Charter
          </FormTitle>
          <FormSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Fill out the form below and we&apos;ll get back to you within 24
            hours with a personalized quote.
          </FormSubtitle>
        </FormHeader>

        <FormCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLabel>Departure</InputLabel>
              <Input
                type="text"
                name="departure"
                value={formData.departure}
                onChange={handleChange}
                placeholder="City or Airport Code"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Destination</InputLabel>
              <Input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="City or Airport Code"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Date</InputLabel>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Passengers</InputLabel>
              <Input
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                placeholder="1-19"
                min="1"
                max="19"
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Aircraft Type</InputLabel>
              <Select
                name="aircraft"
                value={formData.aircraft}
                onChange={handleChange}
                required
              >
                <option value="">Select Aircraft</option>
                <option value="light">Light Jet (4-7 pax)</option>
                <option value="midsize">Midsize Jet (6-9 pax)</option>
                <option value="heavy">Heavy Jet (10-16 pax)</option>
                <option value="turboprop">Turboprop (6-9 pax)</option>
              </Select>
            </InputGroup>

            <InputGroup>
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </InputGroup>

            <FullWidthGroup>
              <InputLabel>Phone</InputLabel>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
              />
            </FullWidthGroup>

            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {loading ? "Sending..." : "Request Quote"}
            </SubmitButton>

            {status === "success" && (
              <StatusMessage
                $success
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Your charter request has been sent. We&apos;ll contact you
                within 24 hours.
              </StatusMessage>
            )}

            {status === "error" && (
              <StatusMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                There was an error. Please try again or contact us directly.
              </StatusMessage>
            )}
          </Form>
        </FormCard>
      </FormInner>
    </FormContainer>
  );
};

export default PrivateCharterForm;
