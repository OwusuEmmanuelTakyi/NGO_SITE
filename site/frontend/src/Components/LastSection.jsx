import { Box, Typography } from '@mui/material';
import { blue, blueGrey, purple } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const LastSection = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection:{ md:'row',xs:'column',sm:'column'}, marginTop: 10,paddingX:{xs:'5%',sm:'5%',md:0} }}>
      <Box sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: purple[600], paddingY: 7 }}>
        <Link to='/about-us' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: '600', transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>ABOUT</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 24, transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>Vision & Goals</Typography>
        </Link>
      </Box>

      <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: blueGrey[500], paddingY: 7 }}>
        <Link to='/news-and-updates' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: '600', transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>OUR PROGRAMS</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 24, transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>Projects In Ghana</Typography>
        </Link>
      </Box>

      <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: blue[700], paddingY: 7 }}>
        <Link to='/support-us' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 28, fontWeight: '600', transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>Support Us</Typography>
          <Typography sx={{ textAlign: 'center', color: 'white', fontSize: 24, transition: '0.3s ease-in-out', ':hover': { color: 'grey' } }}>Volunteer Or Donate</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default LastSection;
