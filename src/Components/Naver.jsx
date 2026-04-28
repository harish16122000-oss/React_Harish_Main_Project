import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaShoppingCart } from "react-icons/fa";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  
  useMediaQuery,
  useTheme,
  Divider
  
} from '@mui/material';
 
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
 

import { FiLogIn } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";

 import veg from '../assets/veg.png';
import  fruit from '../assets/frutis.PNG';
import rice from  '../assets/rice.PNG';
import wheat from  '../assets/wheat.PNG';
import  millet from  '../assets/millet.PNG';
import  milk from  '../assets/milk.png';
import drink from '../assets/drink.PNG';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Naver = () => {
  const navigate= useNavigate();
  const [anchorE2, setAnchorE2] = React.useState(null);
    const opened = Boolean(anchorE2);
    const handleClicked = (event) => {
      setAnchorE2(event.currentTarget);
    };
    const handleClosed = () => {
      setAnchorE2(null);
    };

const Location = useLocation();
  const [opens, setOpens] = React.useState(false);
  const draw =[
   
   { icon: wheat, title: "Wheat"},
    { icon: millet, title: "Millet"},
    { icon: milk, title: "Natural Drinks"},
    { icon: drink, title: "Dairy Products"},
     { icon: fruit, title: "Fruits"},
      { icon: veg, title: "Vegetables"},
    { icon: rice, title: "Rice"},
  ]

  const toggleDrawer = (newOpen) => () => {
    setOpens(newOpen);
  };
   const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
       {draw.map((dra, index)=>(
        <ListItem key={index}>
          <img src= {dra.icon} alt="" />
          <ListItemText sx={{ml:"30px", mt:"15px"}} onClick={()=>navigate("/cat")}>{dra.title}</ListItemText>

        </ListItem>
       ))}
       
      </List>
       
       
    </Box>
  );


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {name:"Menu", to:"/"},
    {name:"Categories", to:"/cat"},
    {name:"My orders", to:"/myorders"}
    
    
    
  ];

  return (
    <>
                    {/* Location */}
    {Location.pathname !== '/log' && Location.pathname !=='/log1' && Location.pathname !=='/det' &&Location.pathname !=='/order' &&(
      <AppBar position="static" color="primary">
        <Toolbar>

           
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           

            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
              🌿 Lingam's Organic
            </Typography>
             <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon></MenuIcon>
            </IconButton>

            {/* LeftDrawer */}

      <Drawer open={opens} onClose={toggleDrawer(false)}>
       <Typography variant='h6' sx={{color:"#2E7D32", marginLeft:'50px'}}>Categories</Typography>
        <Divider/>
        {DrawerList}
      </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

        {/* Desktop */}
         
          {!isMobile && (
            <>
            {menuItems.map((menu, index)=>(
               <Box key={index}  sx={linkStyle}><Link style={{textDecoration:"none", color:'white'}} to={menu.to}>{menu.name} </Link> </Box>
                
            ))}
            
              <Link to='/cart'> <FaShoppingCart style={{color:'white', fontSize:"20px", marginRight:'20px'}}/> </Link> 
              <IconButton
        id="basic-button"
        aria-controls={opened ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opened ? 'true' : undefined}
        onClick={handleClicked}
      >
        <AccountBoxIcon style={{color:"white"}}/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorE2}
        open={opened}
        onClose={handleClosed}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        
        <MenuItem onclick={handleClosed}><Link to='/log1'> <FiLogIn />Login</Link></MenuItem>
        <MenuItem onClick={handleClosed}> <RiLogoutCircleLine /> Logout</MenuItem>
      </Menu>
             </>
          )}


      {/* Mobile */}
         
         {isMobile && (
  <>
    <IconButton color="inherit" onClick={handleClick}>
      <ListIcon/>
      
    </IconButton> 
    <Link to='/cart'> <FaShoppingCart style={{color:'white', fontSize:"20px", marginRight:'15px', marginleft:"15px"}}/> </Link>
     <IconButton
        id="basic-button"
        aria-controls={opened ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opened ? 'true' : undefined}
        onClick={handleClicked}
      >
        <AccountBoxIcon style={{color:"white"}}/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorE2}
        open={opened}
        onClose={handleClosed}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        
        <MenuItem onClick={handleClosed}><Link to='/log'> <FiLogIn />Login</Link></MenuItem>
        <MenuItem onClick={handleClosed}> <RiLogoutCircleLine /> Logout</MenuItem>
      </Menu>
  </>
)}
        </Toolbar>
      </AppBar>
)}
      
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((menu, item) => (
          <MenuItem key={item} onClick={handleClose} >
           <Link style={{textDecoration:'none', color:'black'}} to={menu.to}>{menu.name} </Link>
           
          </MenuItem>
          
        ))}
       
         
      </Menu>
     
    </>
  );
};

      /* Style */
const linkStyle = {
  textDecoration: 'none',
  mr: "60px",
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  '&:hover': {
    color: 'secondary.main',
  },
};

export default Naver;