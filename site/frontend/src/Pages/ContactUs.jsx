import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import HeroSection from '../Components/HeroSection';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import MyMap from '../Components/MyMap';




emailjs.init('dBtyByt9dlVN9Nmi5');

const ContactForm = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('contact_service', 'template_1kfko85', form.current, 'dBtyByt9dlVN9Nmi5')
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


const Contact = () => {
  const title = "LET'S GET IN TOUCH";
  return (
    <>
      <HeroSection title={title} />
              <Box sx={{bgcolor:grey[200],justifyContent:'center' ,display:'flex', flexDirection:{xs:'column',sm:'column',md:'row'}, gap:5,mx:'10%', my:'6%',width:'80%',px:'6%',py:3}}>
        <Box sx={{flex:1}} >
        <ContactForm /> 
        </Box>
         <Box sx={{flex:1,overflow:'hidden'}}>
          <MyMap/>
          </Box>
        </Box>
    </>
  );
};
export default Contact;
