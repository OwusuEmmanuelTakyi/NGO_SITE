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

const HeroSection = ({ title, description }) => {
  const [heroData, setHeroData] = useState(null); // State for hero data
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Fetch Hero section data from Sanity
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "hero"]{
          title,
          description,
          "image1": image1.asset->url,
          "image2": image2.asset->url,
          "image3": image3.asset->url
        }[0]` // Only get the first hero document
      )
      .then((data) => setHeroData(data))
      .catch(console.error);
  }, []);

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
      {heroData ? (
        <Slider {...settings}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={heroData.image1}
              alt="A beautiful landscape" // Provide a meaningful description here
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
              src={heroData.image2}
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
              src={heroData.image3}
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
      ) : (
        <p>Loading...</p>
      )}

      <Box className="hero-text" sx={{ position: 'absolute', top: '40%', left: '10%', right: '10%', textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" color={grey[300]} fontWeight="700" sx={{ fontSize: { xs: 28, sm: 30, md: 38 } }}>
          {title || heroData?.title}
        </Typography>
        <Typography variant="h6" color={grey[300]}>
          {description || heroData?.description}
        </Typography>

        {isHomePage ? (
          <Link to="/donate">
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
              left: '40%',
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
