import { useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

// Styled Components for the form
const FormContainer = styled.form`
  display: grid;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #0d3e69;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #e1e5ea;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0d3e69;
    outline: none;
    box-shadow: 0 0 0 3px rgba(13, 62, 105, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 2px solid #e1e5ea;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0d3e69;
    outline: none;
    box-shadow: 0 0 0 3px rgba(13, 62, 105, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #0d3e69;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #1a5b94;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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
    setStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: "JSI Aviation",
      to_email: "ops@jsiaviation.co.uk",
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
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Phone</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Message</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </SubmitButton>

      {status && (
        <StatusMessage success={status === 'success'}>
          {status === 'success' 
            ? 'Thank you! Your message has been sent successfully.'
            : 'Sorry, there was an error sending your message. Please try again.'}
        </StatusMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;
