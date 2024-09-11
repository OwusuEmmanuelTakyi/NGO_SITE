import React from 'react';
import './Contact.css';
//import Navbar from '../Components/NavBar'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import HeroSection from '../Components/HeroSection';


const ContactForm = () => {
  return (
   
    <div className="contact-form-container">
       
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="Your first name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email address" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    
  );
};

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

const Contact = () => {
  const title = "LET'S GET IN TOUCH" 
  return (
    <>
    <HeroSection title={title}/>
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
