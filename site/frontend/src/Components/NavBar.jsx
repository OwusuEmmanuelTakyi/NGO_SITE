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
import useScrollDirection from './useScrollDirection'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../images/LOGO.png'


const pages = ['HOME', 'ABOUT', 'OUR PROGRAMS', 'CONTACT US',];


const NavBar = ()=> {

  const scrollDirection = useScrollDirection();



  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  return (
    <AppBar position="sticky" sx={{height:150, backgroundColor:'white', color:'darkgoldenrod', transform: scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease-in-out',}}elevation={1}>
     
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
          <img src={logo} alt='Logo' height={120}/>
          
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                 HOME
              </Typography>
              </NavLink>
             
              <NavLink
            exact
            to="/aboutus"
            activeClassName="active"
            style={{ textDecoration: 'none' }}
          >
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                ABOUT US
              </Typography>
              </NavLink>
             
              <NavLink
            exact
            to="/ourprograms"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
               OUR PROGRAMS
              </Typography>
              </NavLink>
             
          
             
              <NavLink
            exact
            to="/contactus"
            activeClassName="active"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
              <Typography
                sx={{ ':hover':{cursor:'pointer', opacity:0.6, 
                  transitionDuration:'0.5s', 
                  transitionDelay:'0.1s'},
                 display: 'block',fontSize:{lg:20,md:18},
                 marginX:{lg:2,md:1} }}
              >
                CONTACT US
              </Typography>
              </NavLink>
           
          </Box>
          <Link to='/donate' style={{textDecoration:'none', color:'inherit'}}><Button variant='contained' sx={{display:{xs:'block'},marginX:{sm:10,xs:5},backgroundColor:'green', color:'white', width:{lg:170,md:150,sm:100}, height:{md:50,sm:40}}}>Donate Now</Button></Link>

        </Toolbar>
   
    </AppBar>
  );
}
export default NavBar;
