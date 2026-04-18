import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { FiLogIn } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Try = () => {
     const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);
  const handleClicked = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClosed = () => {
    setAnchorE2(null);
  };
  return (
    <div>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClicked}
      >
        <AccountBoxIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorE2={anchorE2}
        open={open}
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
    </div>
  )
}

export default Try
