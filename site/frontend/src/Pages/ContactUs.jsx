import React, { useRef, useState } from 'react';
import './Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import HeroSection from '../Components/HeroSection';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { grey } from '@mui/material/colors';

emailjs.init('HoOemYVGzs6FjhTMs');

const ContactForm = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('contact_service', 'template_bzhondi', form.current, 'HoOemYVGzs6FjhTMs')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setEmailSent(true);
          setErrorMessage('');
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again later.');
          setLoading(false);
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
              name="first_name"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Your last name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

const ContactMap = () => {
  const center = [5.6037, -0.1870];
  return (
    <Box>
       <MapContainer zoom={8} style={{ height: '450px', width: '100%',marginTop:10 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
        <FmdGoodOutlinedIcon color='red'/>
          <Popup>
          <FmdGoodOutlinedIcon color='red'/>
             Ama Yeduah Foundations
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

const Contact = () => {
  const title = "LET'S GET IN TOUCH";
  return (
    <>
      <HeroSection title={title} />
              <Box sx={{bgcolor:grey[200],justifyContent:'center' ,display:'flex', flexDirection:{xs:'column',sm:'column',md:'row'}, gap:5,mx:'10%', my:'6%',width:'80%',px:'6%',py:3}}>
        <Box sx={{flex:1}} >
        <ContactForm /> 
        </Box>
         <Box sx={{flex:1}}>
          <ContactMap />
          </Box>
        </Box>
    </>
  );
};

export default Contact;
