import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Box, Typography, Link, Container } from '@mui/material';
import { blue } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff',width:'100%', display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center' ,padding:'3%'}}>
        <Container sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'90%',alignItems:'center'}}>
        <Box>
      <Typography variant="body2" color='inherit'>Contact: +123456789</Typography>
      <Typography variant="body2" color='inherit'>Email: info@ngo.org</Typography>
      </Box>

      <Typography variant="h6" sx={{display:{sm:'none',xs:'none',md:'block'}}}>AMA YEDUAH FOUNDATION</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 ,alignItems:'center'}}>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
          <Facebook fontSize='large' sx={{ color: '#fff',':hover':{color:'blue'} }} />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
          <Twitter fontSize="large" sx={{ color: '#fff',':hover':{color:blue[500]} }} />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
          <Instagram fontSize="large" sx={{ color: '#fff',':hover':{color:'red'} }} />
        </Link>
      </Box>
      </Container>
      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} AMA YEDUAH FOUNDATION. All rights reserved.
      </Typography>

    </Box>
  );
};

export default Footer;
