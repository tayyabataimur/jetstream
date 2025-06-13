import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlane, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const FormContainer = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 120px 20px;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(13, 62, 105, 0.02) 0%, rgba(26, 84, 144, 0.02) 100%);
    pointer-events: none;
  }
`;

const FormInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const FormTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0d3e69;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const FormSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #6c757d;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
`;

const FormCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #0d3e69;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Icon = styled.span`
  margin-right: 12px;
  color: #0d3e69;
  font-size: 1.1rem;
  width: 20px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 18px 20px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fafbfc;
  color: #495057;
  font-weight: 500;

  &:focus {
    border-color: #0d3e69;
    box-shadow: 0 0 0 4px rgba(13, 62, 105, 0.1);
    background: white;
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
    font-weight: 400;
  }

  &:hover {
    border-color: #1a5490;
    background: white;
  }
`;

const Select = styled.select`
  padding: 18px 20px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fafbfc;
  color: #495057;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    border-color: #0d3e69;
    box-shadow: 0 0 0 4px rgba(13, 62, 105, 0.1);
    background: white;
    outline: none;
  }

  &:hover {
    border-color: #1a5490;
    background: white;
  }

  option {
    padding: 10px;
    font-weight: 500;
  }
`;

const SubmitButton = styled(motion.button)`
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #0d3e69 0%, #1a5490 100%);
  color: white;
  border: none;
  padding: 22px 50px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(13, 62, 105, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(13, 62, 105, 0.4);
    background: linear-gradient(135deg, #1a5490 0%, #2563eb 100%);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(13, 62, 105, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 10px 30px rgba(13, 62, 105, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const StatusMessage = styled(motion.div)`
  grid-column: 1 / -1;
  padding: 20px 25px;
  margin-top: 30px;
  text-align: center;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  background-color: ${props => props.success ? 
    'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)' : 
    'linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%)'};
  color: ${props => props.success ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.success ? '#c3e6cb' : '#f1aeb5'};
  box-shadow: 0 4px 15px ${props => props.success ? 
    'rgba(21, 87, 36, 0.1)' : 
    'rgba(114, 28, 36, 0.1)'};
`;

const FullWidthGroup = styled(InputGroup)`
  grid-column: 1 / -1;
`;

const PrivateCharterForm = () => {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: '',
    aircraft: '',
    email: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const templateParams = {
      from_name: 'Website Charter Request',
      to_name: 'JSI Aviation',
      departure: formData.departure,
      destination: formData.destination,
      date: formData.date,
      passengers: formData.passengers,
      aircraft: formData.aircraft,
      email: formData.email,
      phone: formData.phone,
      to_email: 'ops@jsiaviation.com',
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'service_mktmsjy',
        'template_k2odggi',
        templateParams,
        '2hiprBLSnsGWY6Sa3'
      );

      setStatus('success');
      setFormData({
        departure: '',
        destination: '',
        date: '',
        passengers: '',
        aircraft: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormInner>
        <FormHeader>
          <FormTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Request Your Charter Now
          </FormTitle>
          <FormSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience luxury aviation with our premium charter services. Fill out the form below and we&apos;ll get back to you within 24 hours.
          </FormSubtitle>
        </FormHeader>

        <FormCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Form onSubmit={handleSubmit}>
            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Label><Icon><FaMapMarkerAlt /></Icon>Departure Location</Label>
              <Input
                type="text"
                name="departure"
                value={formData.departure}
                onChange={handleChange}
                placeholder="City or Airport Code"
                required
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label><Icon><FaMapMarkerAlt /></Icon>Destination</Label>
              <Input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="City or Airport Code"
                required
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Label><Icon><FaCalendarAlt /></Icon>Departure Date</Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Label><Icon><FaUsers /></Icon>Number of Passengers</Label>
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

            <InputGroup
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Label><Icon><FaPlane /></Icon>Preferred Aircraft</Label>
              <Select
                name="aircraft"
                value={formData.aircraft}
                onChange={handleChange}
                required
              >
                <option value="">Select Aircraft Type</option>
                <option value="light">Light Jet (4-7 passengers)</option>
                <option value="midsize">Midsize Jet (6-9 passengers)</option>
                <option value="heavy">Heavy Jet (10-16 passengers)</option>
                <option value="turboprop">Turboprop (6-9 passengers)</option>
              </Select>
            </InputGroup>

            <InputGroup
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Label><Icon><FaEnvelope /></Icon>Email Address</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </InputGroup>

            <FullWidthGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Label><Icon><FaPhone /></Icon>Phone Number</Label>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending Request...' : 'Request Charter Quote'}
              {!loading && <FaArrowRight />}
            </SubmitButton>
            
            {status === 'success' && (
              <StatusMessage
                success
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                🎉 Thank you! Your charter request has been sent successfully. We&apos;ll contact you within 24 hours with a personalized quote.
              </StatusMessage>
            )}
            
            {status === 'error' && (
              <StatusMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                ❌ Sorry, there was an error sending your request. Please try again or contact us directly.
              </StatusMessage>
            )}
          </Form>
        </FormCard>
      </FormInner>
    </FormContainer>
  );
};

export default PrivateCharterForm;
