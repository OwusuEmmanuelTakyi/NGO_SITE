import React, { useState } from 'react';
import './Contact.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import HeroSection from '../Components/HeroSection';

// Contact Form Component with EmailJS Integration
const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init('VAvdLz3lmWrjHQjTR'); // Initialize EmailJS with your public key from EmailJS dashboard
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    // Send form data using emailjs.sendForm
    emailjs
      .sendForm('service_c1e0v2o', 'template_re4ubdv', e.target) // Replace with your service ID and template ID
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailSent(true); // Set success flag
          setErrorMessage(''); // Clear any previous error messages
        },
        (error) => {
          console.log('FAILED...', error);
          setErrorMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {emailSent ? (
        <p className="success-message">Thank you! Your message has been sent successfully.</p>
      ) : (
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

// Contact Information Section
const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2>Our Location & Contact Details</h2>
      <div className="contact-info-boxes">
        <div className="info-box">
          <span>Location</span>
          <p>3375 Sun Valley Road, Spokane, WA</p>
        </div>
        <div className="info-box">
          <span>Phone</span>
          <p>1 (123) 123 1234</p>
        </div>
        <div className="info-box">
          <span>Email</span>
          <p>support@rocketvisa.com</p>
        </div>
      </div>
    </div>
  );
};

// Google Map Section
const ContactMap = () => {
  const location = {
    lat: 47.6588,  // Replace with your latitude
    lng: -117.4260 // Replace with your longitude
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          zoom={12}
          center={location}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

// Main Contact Page Component
const Contact = () => {
  const title = "LET'S GET IN TOUCH";
  return (
    <>
      <HeroSection title={title} />
      <section className="contact-section">
        <div className="form-section">
          <ContactForm />
        </div>
        <div className="info-map-section">
          <ContactInfo />
          <ContactMap />
        </div>
      </section>
    </>
  );
};

export default Contact;
