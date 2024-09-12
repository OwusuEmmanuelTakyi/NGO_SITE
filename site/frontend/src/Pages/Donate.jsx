import React from 'react'
import HeroSection from '../Components/HeroSection'
import { Container, Typography, Grid,  Box, LinearProgress, Divider } from '@mui/material';
import LittleCard from '../Components/LittleCard';
import image1 from '../images/lady1.jpg'
import image2 from '../images/lady2.jpg'
import image3 from '../images/man1.jpg'
import image4 from '../images/lady3.jpg'
import { blue } from '@mui/material/colors';

const Donate = () => {
  const title = 'SUPPORT US'
  const name1 = 'Amina Aliatu, 19'
  const name2 = 'Hafiz Mohammed, 21'
  const name3 = 'Nknansah, 17'
  const name4 = '  Esi, 32'
  const test1 = '“The support I received for my education has changed my life. I am now the first girl in my family to attend university. This opportunity has opened doors I never thought possible, and I am determined to give back to my community.”'
  const test2 = '“The counseling and support services helped me find the strength to leave an abusive relationship. I am now rebuilding my life with confidence and hope for a brighter future. I am forever grateful for the support I received.”'
  const test3 = ' “The youth abuse awareness programs taught me how to recognize and report abuse. I feel safer and more empowered to speak up for myself and others. This has made a huge difference in my life and the lives of my friends.”'
  const test4 = ' “The youth abuse awareness programs taught me how to recognize and report abuse. I feel safer and more empowered to speak up for myself and others. This has made a huge difference in my life and the lives of my friends.”'

  return (
    <div>
      <HeroSection title={title}/>
       
      <Container>
      <Typography variant="h2" gutterBottom fontSize={38} marginTop={10} mb={5} >
        Support Us
      </Typography>
      <Typography variant="body1" paragraph >
        Your support is crucial to our mission. By donating, you help us continue our programs and make a lasting impact in our community. Every contribution, no matter the size, brings us closer to our goals.
      </Typography>

      <Typography variant="h4" gutterBottom fontSize={38} marginTop={5}>
        Why Donate?
      </Typography>
      <Typography variant="body1" paragraph>
        - Empower Change: Your donation helps us implement programs that directly benefit those in need.
        <br/>
        - Sustainable Impact: Contributions support long-term projects that create lasting change.
        <br/>
        - Community Growth: Your support fosters a stronger, more resilient community.
      </Typography>

      <Typography variant="h4" gutterBottom fontSize={38} marginTop={8} mb={8}>
        How Your Donation Helps
      </Typography>
      <Grid container spacing={3} flexWrap='wrap'>
        <Grid item xs={12} sm={6} md={3} mb={2}>
          <LittleCard name={name1} testimonial={test1} avatar={image1}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} mb={5}>
        <LittleCard name={name2} testimonial={test2} avatar={image2}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <LittleCard name={name3} testimonial={test3} avatar={image3}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <LittleCard name={name4} testimonial={test4} avatar={image4}/>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom mt={8}>
        Ways to Give
      </Typography>
      <Box sx={{display:'flex', flexDirection:{md:'row',xs:'column',sm:'column'}, width:'80%', gap:3,justifyContent:'center'}}>

     <Box>
      <Typography variant="body1" paragraph>
       Bank Transfer: You can donate directly to our bank account.
       <br/>
        Bank Name: <span style={{color:blue[300]}}>ABSA Bank</span> 
        <br/>
        Account Number: <span style={{color:blue[300]}}>123456789</span>
        <br/>
          Branch:  <span style={{color:blue[300]}}>Accra Main</span>
      </Typography>
      </Box>

      <Divider/>
      <Box>
      <Typography variant="body1" paragraph>
        Mobile Money: Donate via mobile money using the following details.
        <br/>
        Network:  <span style={{color:blue[300]}}>MTN</span>
        <br/>
        Mobile Money Number: <span style={{color:blue[300]}}>0241234567</span>
        <br/>
        Reference: <span style={{color:blue[300]}}>Donation</span> 
      </Typography>
      </Box>
      </Box>

      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Fundraising Progress
        </Typography>
        <LinearProgress variant="determinate" value={40} />
        <Typography variant="body2" color="textSecondary">40% of our goal reached</Typography>
      </Box>


      <Typography variant="h4" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="body1" paragraph>
        We are deeply grateful for your support. Together, we can make a difference.
      </Typography>
    </Container>
      </div>
  )
}

export default Donate