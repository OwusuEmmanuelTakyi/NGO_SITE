import React, { useRef, useState } from 'react';
import './Contact.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import HeroSection from '../Components/HeroSection';

// Contact Form Component with EmailJS Integration
const ContactForm = () => {
  const form = useRef();  // UseRef for referencing the form
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Send email function using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Send form data using emailjs
    emailjs
      .sendForm('service_c1e0v2o', 'template_rgay28v', form.current, '_KgdCNEIkBvL8WDrV')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setEmailSent(true);  // Set success flag
          setErrorMessage('');  // Clear any previous error messages
        },
        (error) => {
          console.log('FAILED...', error.text);
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
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"  // Matches the {{first_name}} placeholder in the template
              placeholder="Your first name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"  // Matches the {{last_name}} placeholder in the template
              placeholder="Your last name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"  // Matches the {{email}} placeholder in the template
              placeholder="Your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"  // Matches the {{message}} placeholder in the template
              rows="4"
              placeholder="Your message"
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
