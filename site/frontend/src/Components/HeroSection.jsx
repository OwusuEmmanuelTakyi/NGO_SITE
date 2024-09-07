import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import './HeroSection.css';
import { grey } from '@mui/material/colors';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </Box>
    ),
    beforeChange: (current, next) => {
      document.querySelector('.hero-text').classList.remove('fade-in');
    },
    afterChange: () => {
      document.querySelector('.hero-text').classList.add('fade-in');
    },
  };

  return (
    <Box sx={{ width: '100%', height: 500, position: 'relative', overflow: 'hidden' }}>
      <Slider {...settings}>
        <Box sx={{ position: 'relative' }}>
          <img src={image1} alt='Image 1' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        </Box>
        <Box sx={{ position: 'relative' }}>
          <img src={image2} alt='Image 2' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        </Box>
        <Box sx={{ position: 'relative' }}>
          <img src={image3} alt='Image 3' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        </Box>
      </Slider>
      <Box className="hero-text" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" color={grey[300]}>Welcome to the AMA YEDUAH FOUNDATION</Typography>
        <Typography variant="h6" color={grey[300]}>Empowering Communities Through Education and Health Awareness</Typography>
        <Button variant='contained' sx={{color: 'white', backgroundColor:'green', fontSize:20, marginTop:10, paddingX:5}}>Get Involved</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
