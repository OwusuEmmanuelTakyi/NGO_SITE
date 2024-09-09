import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

import { Link } from 'react-router-dom';





const pages = ['HOME', 'ABOUT', 'OUR PROGRAMS' ,'GET INVOLVED', 'CONTACT US',];


const NavBar = ()=> {

  



  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  return (
    <AppBar position="static" sx={{height:150, backgroundColor:'white', color:'darkgoldenrod' }}elevation={1}>
     
        <Toolbar disableGutters sx={{ height:'100%',paddingX:{lg:'3%',md:0},  display:'flex',justifyContent:'space-between', alignItems:'center'}}>
       
          
        <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none',lg:'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography sx={{display:{xs:'none',sm:'flex'},margin:0, fontSize:{lg:40,md:25}}}>LOGO</Typography>
          
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                 HOME
              </Typography>
              </Link>
             
            <Link to='/aboutus' style={{textDecoration:'none', color:'inherit'}}>
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                ABOUT US
              </Typography>
              </Link>
             
            <Link to='/ourprograms' style={{textDecoration:'none', color:'inherit'}}>
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
               OUR PROGRAMS
              </Typography>
              </Link>
             
            <Link to='/getinvolved' style={{textDecoration:'none', color:'inherit'}}>
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
              GET INVOLVED
              </Typography>
              </Link>
             
            <Link to='/contactus' style={{textDecoration:'none', color:'inherit'}}>
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                CONTACT US
              </Typography>
              </Link>
           
          </Box>
          <Link to='/donate' sx={{textDecoration:'none', color:'inherit'}}><Button variant='contained' sx={{display:{xs:'block'},marginX:{sm:10,xs:5},backgroundColor:'green', color:'white', width:{lg:170,md:150,sm:100}, height:{md:50,sm:40}}}>Donate</Button></Link>

        </Toolbar>
   
    </AppBar>
  );
}
export default NavBar;
