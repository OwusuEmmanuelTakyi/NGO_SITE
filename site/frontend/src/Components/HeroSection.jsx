import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sanityClient from '../sanityClient'; // Import the Sanity client
import './HeroSection.css';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';


const HeroSection = ({ title, description }) => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';


  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Render the hero section if data is available
  return (
    <Box sx={{ width: '100%', height: 500, position: 'relative', overflow: 'hidden' }}>
      
        <Slider {...settings}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={hero1}
              alt="hero 1"
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <img
              src={hero2}
              alt="A scenic view" // Provide a meaningful description here
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <img
              src={hero3}
              alt="A vibrant urban cityscape" // Provide a meaningful description here
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>

          <Box sx={{ position: 'relative' }}>
            <img
              src={hero4}
              alt="A vibrant urban cityscape" // Provide a meaningful description here
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <img
              src={hero5}
              alt="A vibrant urban cityscape" // Provide a meaningful description here
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <img
              src={hero6}
              alt="A vibrant urban cityscape" // Provide a meaningful description here
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
        </Slider>
    

      <Box className="hero-text" sx={{ position: 'absolute', top: '40%', left: '10%', right: '10%', textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" color={grey[300]} fontWeight="700" sx={{ fontSize: { xs: 28, sm: 30, md: 38 } }}>
          {title}
        </Typography>
        <Typography variant="h6" color={grey[300]}>
          {description}
        </Typography>

        {isHomePage ? (
          <Link to="/support-us">
            <Button variant="contained" sx={{ color: 'white', backgroundColor: 'green', fontSize: 20, marginTop: { xs: 5, sm: 10 }, paddingX: 5 }}>
              Get Involved
            </Button>
          </Link>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              fontSize: 18,
              position: 'absolute',
              bottom: '-130%',
              left:{md:'40%',lg:'40%',sm:'30%',xs:'20%'},
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography color="white" sx={{ borderRight: '2px solid white', paddingRight: 3 }}>
                HOME
              </Typography>
            </Link>
            <Typography color="white">{location.pathname.replace('/', '').toLocaleUpperCase()}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;
