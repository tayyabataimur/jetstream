import { useState } from 'react';
import styled from 'styled-components';
import { FaPlane, FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
  width: 100%;
  margin: 80px 0;
  padding: 50px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const FormInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 3rem;
  color: #0d3e69;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #0d3e69;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: #0d3e69;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #c3cfe2;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0d3e69;
    box-shadow: 0 0 0 2px rgba(13, 62, 105, 0.2);
  }
`;

const Select = styled.select`
  padding: 15px;
  border: 2px solid #c3cfe2;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0d3e69;
    box-shadow: 0 0 0 2px rgba(13, 62, 105, 0.2);
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 20px;
  background-color: #0d3e69;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #0a2e4f;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StatusMessage = styled.div`
  grid-column: 1 / -1;
  padding: 15px;
  margin-top: 20px;
  text-align: center;
  border-radius: 8px;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
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
        <FormTitle>Book a Private Charter Now</FormTitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label><Icon><FaMapMarkerAlt /></Icon>Departure</Label>
            <Input
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              placeholder="City or Airport"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaMapMarkerAlt /></Icon>Destination</Label>
            <Input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="City or Airport"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaCalendarAlt /></Icon>Date</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaUsers /></Icon>Passengers</Label>
            <Input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              min="1"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaPlane /></Icon>Aircraft Type</Label>
            <Select
              name="aircraft"
              value={formData.aircraft}
              onChange={handleChange}
              required
            >
              <option value="">Select Aircraft</option>
              <option value="light">Light Jet</option>
              <option value="midsize">Midsize Jet</option>
              <option value="heavy">Heavy Jet</option>
              <option value="turboprop">Turboprop</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaUsers /></Icon>Contact Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label><Icon><FaUsers /></Icon>Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
          </InputGroup>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Request Charter'}
          </SubmitButton>
          
          {status === 'success' && (
            <StatusMessage success>
              Thank you! Your charter request has been sent successfully.
            </StatusMessage>
          )}
          
          {status === 'error' && (
            <StatusMessage>
              Sorry, there was an error sending your request. Please try again.
            </StatusMessage>
          )}
        </Form>
      </FormInner>
    </FormContainer>
  );
};

export default PrivateCharterForm;
