import React from 'react';
import './About.css';
import HeroSection from '../Components/HeroSection';
import Leaders from '../Components/Leaders';
import { Box } from '@mui/material';
import lady1 from '../images/lady1.jpg'
import lady2 from '../images/lady2.jpg'
import man1 from '../images/man1.jpg'
import Programs from '../Components/Programs.jsx'



const About = () => {
  const title = 'KNOW MORE ABOUT US'
  const LearnMoreTitle = 'Patience Ama Yeduah Eshun'

                                    
 


  return (
    <>
    <HeroSection title={title}/>
    <div className="about-container">
      <section className="about-section">
        <h1>About AMA Yeduah Foundation</h1>
        <p>The <strong>AMA YEDUAH FOUNDATION</strong> was formally incorporated on May 27, 2024. Founded by Patience Ama Yeduah Eshun, a Ghanaian businesswoman with a passion for community health and education, the Foundation was born out of a deep commitment to addressing critical health and social issues facing vulnerable populations in Ghana, particularly women, children, and the youth.</p>

        <h2>Mission and Vision</h2>
        <p><strong>Mission:</strong> The Foundation’s mission is to empower communities through education, awareness, and support, focusing on health-related issues and the socio-economic upliftment of marginalized groups.</p>
        <p><strong>Vision:</strong> To create a society where every individual, regardless of background, has access to essential health information, quality education, and opportunities to thrive.</p>

        <h2>Core Initiatives</h2>
        <Box>
          <Programs/>
        </Box>

        <h2>Organizational Values</h2>
        <ul>
          <li><strong>Integrity:</strong> Commitment to honesty and transparency in all dealings.</li>
          <li><strong>Respect:</strong> Valuing the dignity of all individuals and promoting inclusivity.</li>
          <li><strong>Empowerment:</strong> Focus on uplifting communities through education and support.</li>
          <li><strong>Collaboration:</strong> Building partnerships to enhance the impact of the Foundation’s work.</li>
          <li><strong>Compassion:</strong> Approaching all efforts with empathy and care for those in need.</li>
        </ul>

        <h2>Founders and Beneficial Owners</h2>

        <Box sx={{width:'100%',height:50}}>

        </Box>
        <Box sx={{gap:3, display:'flex', flexDirection:{md:'row',sm:'column',xs:'column'},width:'100%', justifyContent:'space-around',alignItems:'center'}}>
      <Leaders image={lady1} name='Patience Ama Yeduah ' role='Founder and President' learnMoreInfo={(<div>   TIN/BO ID: P0007851014 <br/>
                                                                                                            Nationality: Ghanaian <br/>
                                                                                                            Principal Place of Business: D16, ACCRA, GREATER ACCRA,<br/> Ghana
                                                                                                            Voting Rights - Direct: 20.00%<br/>
                                                                                                            Right to Appoint or Remove Directors: 20.00%<br/>
                                                                                                            Role: Founder and President, responsible for providing visionary leadership, representing the 
                                                                                                              Foundation, and overseeing all operations. </div>)}/>
      <Leaders image={lady2} name='Emmanuel Coffie' role='Treasurer'/>
      <Leaders image={man1} name='Patrick Worae' role='Administrator' LearnMoreTitle={LearnMoreTitle} learnMoreInfo='TIN/BO ID: P0007851014'/>

     
      </Box>
       
      </section>
      
    
    </div>
   
    </>
  );
};

export default About;
