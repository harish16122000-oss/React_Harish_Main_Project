import React from 'react';

import {useLocation} from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

 import veg from '../assets/veg.png'
import  fruit from '../assets/frutis.PNG'
import rice from  '../assets/rice.PNG'
import wheat from  '../assets/wheat.PNG'
import  millet from  '../assets/millet.PNG'
import  milk from  '../assets/milk.png'
import drink from '../assets/drink.PNG'

const Naver = () => {

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
          <ListItemText sx={{ml:"30px", mt:"15px"}}>{dra.title}</ListItemText>

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
    {name:"Categories", to:"/wheat"},
    {name:"Cart", to:"/cart"},
    {name:"Login", to:"/log/log1"}
  ];

  return (
    <>
    {Location.pathname !== '/log' && Location.pathname !=='/log/log1' &&(
      <AppBar position="static" color="primary">
        <Toolbar>

           
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           

            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
              🌿 Lingam's Organic
            </Typography>
             <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon></MenuIcon>
            </IconButton>
             
      <Drawer open={opens} onClose={toggleDrawer(false)}>
       <Typography variant='h6' sx={{color:"#2E7D32", marginLeft:'50px'}}>Categories</Typography>
        <Divider/>
        {DrawerList}
      </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

         
          {!isMobile && (
            <>
            {menuItems.map((menu, index)=>(
               <Box key={index}  sx={linkStyle}><Link sx={linkStyle} to={menu.to}>{menu.name} </Link> </Box>
                
            ))}
              
              
              <Link to="/log"><Button color="secondary" variant="contained">
                Login
              </Button></Link>
             </>
          )}

         
         {isMobile && (
  
    <IconButton color="inherit" onClick={handleClick}>
      <ListIcon/>
    </IconButton>
  
)}
        </Toolbar>
      </AppBar>
)}
      
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((menu, item) => (
          <MenuItem key={item} onClick={handleClose} >
           <Link sx={linkStyle} to={menu.to}>{menu.name} </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}></MenuItem>
      </Menu>
    </>
  );
};

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