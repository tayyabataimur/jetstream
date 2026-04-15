import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const FormContainer = styled.form`
  display: grid;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
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
  border-radius: 0;
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;
  transition: border-color 0.3s ease;
  background: #fff;
  color: #0d3e5c;

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

const TextArea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 0;
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  background: #fff;
  color: #0d3e5c;

  &:focus {
    border-color: #0d3e5c;
    outline: none;
  }

  &:hover {
    border-color: #999;
    box-shadow: none;
  }
`;

const SubmitButton = styled.button`
  background: #0d3e5c;
  color: #fff;
  border: none;
  padding: 16px 40px;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0;

  &:hover {
    background: #0a6e7f;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: 16px 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  background: ${(props) => (props.$success ? "#f0fdf4" : "#fef2f2")};
  color: ${(props) => (props.$success ? "#166534" : "#991b1b")};
  border: 1px solid ${(props) => (props.$success ? "#bbf7d0" : "#fecaca")};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: "JSI Aviation",
      to_email: "ops@jsiaviation.co.uk",
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
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
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
          placeholder="Your name"
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
          placeholder="your@email.com"
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
          placeholder="+44 (0) 000 000 000"
          required
        />
      </InputGroup>

      <InputGroup>
        <Label>Message</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          required
        />
      </InputGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </SubmitButton>

      {status && (
        <StatusMessage $success={status === "success"}>
          {status === "success"
            ? "Thank you! Your message has been sent successfully."
            : "Sorry, there was an error. Please try again."}
        </StatusMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;
