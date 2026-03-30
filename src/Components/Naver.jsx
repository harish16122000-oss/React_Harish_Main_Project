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
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

  const menuItems = ['Home', 'About', 'Products', 'Cart', 'Contact'];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>

          {/* ✅ LEFT SIDE: Menu Icon + Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            

            <Typography variant="h6" sx={{ ml: 1 }}>
              🌿 Organic Store
            </Typography>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          

          {/* ✅ Desktop Menu */}
          {!isMobile && (
            <>
              {menuItems.map((item) => (
                <Link key={item} sx={linkStyle}>
                  {item}
                </Link>
              ))}
              <Button color="inherit" sx={{ fontWeight: 700 }}>
                Register
              </Button>
            </>
          )}

          {/* ✅ Mobile 3-dot menu */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          )}

        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Dropdown */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}>Register</MenuItem>
         
      </Menu>
     
    </>
  );
};

const linkStyle = {
  textDecoration: 'none',
  mr: 4,
  color: 'white',
  fontSize: '18px',
  fontWeight: 700,
  cursor: 'pointer',
};

export default Naver;