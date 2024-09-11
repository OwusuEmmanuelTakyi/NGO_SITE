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
              color="black"

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
              sx={{ display: { xs: 'block', md: 'none',width:'100%',display:'flex',flexDirection:'column',gap:3 } }}
            >
              
                <MenuItem onClick={handleCloseNavMenu} style={{listStyleType:'none'}}    >
                  <NavLink activeClassName='active' style={{textDecoration:'none', color:'inherit',padding:5, width:'100%'}} to='/'><Typography sx={{ textAlign: 'center' }}>HOME</Typography></NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} style={{listStyleType:'none'}} >
                  <NavLink  activeClassName='active' style={{ width:'100%',textDecoration:'none', color:'inherit',padding:5}} to='aboutus'><Typography sx={{ textAlign: 'center' }}>ABOUT US</Typography></NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} style={{listStyleType:'none'}} >
                  <NavLink  activeClassName='active' style={{ width:'100%',textDecoration:'none', color:'inherit',padding:5}} to='ourprograms'><Typography sx={{ textAlign: 'center' }}>OUR PROGRAMS</Typography></NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} style={{listStyleType:'none'}} >
                  <NavLink  activeClassName='active' style={{ width:'100%',textDecoration:'none', color:'inherit',padding:5}} to='contactus'><Typography sx={{ textAlign: 'center' }}>CONTACT US</Typography></NavLink>
                </MenuItem>
              
            </Menu>
          </Box>
          <Link to='/'>
          <img src={logo} alt='Logo' height={120}/>
          </Link>

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
                 display: 'block',fontSize:{lg:20,md:16},
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
                 display: 'block',fontSize:{lg:20,md:16},
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
                 display: 'block',fontSize:{lg:20,md:16},
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
                 display: 'block',fontSize:{lg:20,md:16},
                 marginX:{lg:2,md:1} }}
              >
                CONTACT US
              </Typography>
              </NavLink>
           
          </Box>
          <Link to='/donate' style={{textDecoration:'none', color:'inherit'}}><Button variant='contained' sx={{fontSize:{xs:11,sm:13,md:18,lg:20},display:{xs:'block'},marginX:{sm:10,xs:5},backgroundColor:'green', color:'white', width:{lg:170,md:150,sm:100,xs:120}, height:{md:50,sm:40,xs:30}}}>Donate Now</Button></Link>

        </Toolbar>
   
    </AppBar>
  );
}
export default NavBar;
