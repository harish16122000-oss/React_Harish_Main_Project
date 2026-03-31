import React from 'react';
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
} from '@mui/material';
 
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
 



const Naver = () => {
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

  const menuItems = ['Home', 'About', 'Products', 'Cart', 'Contact', 'Register'];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>

           
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           

            <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
              🌿 Lingam's Organic
            </Typography>
             <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

         
          {!isMobile && (
            <>
            {menuItems.map((menu, index)=>(
               <Box key={index}  sx={linkStyle}>{menu}</Box>
            ))}
              
              
              <Link to="/log"><Button color="secondary" variant="contained">
                Login
              </Button></Link>
             </>
          )}

         
          {isMobile && (
            <IconButton color="inherit" onClick={handleClick}>
                <Link to="/log" sx={linkStyle}><ListIcon /></Link> 
              
            </IconButton>
          )}

        </Toolbar>
      </AppBar>

      
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem key={item} onClick={handleClose} >
            {item }
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}>Login</MenuItem>
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