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
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const HeroSection = ({title,description}) => {

    const location = useLocation()
    const isHomePage = location.pathname === '/'



  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
   
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
      <Box className="hero-text" sx={{ position: 'absolute', top: '40%', left: '20%',right:'10%', textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" color={grey[300]} fontWeight='700'>{title}</Typography>
        <Typography variant="h6" color={grey[300]}>{description}</Typography>

        {isHomePage ? (
             <Link to='/getinvolved'><Button variant='contained' sx={{color: 'white', backgroundColor:'green', fontSize:20, marginTop:10, paddingX:5}}>Get Involved</Button></Link>
        ) :(
            <Box sx={{display:'flex', flexDirection:'row', gap:2, fontSize:18,position: 'absolute', bottom: '-130%', left: '40%', textAlign: 'center', color: 'white'}}>
               <Link to='/'style={{ textDecoration: 'none' }}><Typography color='white' sx={{borderRight: '2px solid white', paddingRight:3 }} >HOME</Typography></Link>
               <Typography color='white'>{location.pathname.replace('/', '').toLocaleUpperCase()}</Typography>
            </Box>
        )
    }
       
      </Box>
    </Box>
  );
};

export default HeroSection;
