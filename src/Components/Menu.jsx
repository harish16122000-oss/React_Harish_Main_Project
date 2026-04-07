import React from 'react'

import { Box, Button, Typography } from '@mui/material';
import ban from '../assets/ban.png';
import { LuRefreshCcw } from "react-icons/lu";

const Menu = ({ Mybutton }) => {
  return (
    <div>


      <Box sx={{
        backgroundImage: `url(${ban})`,
        paddingY: {
          xs: "20%",
          md: "10%",
          lg: "1%",
          xl: '5%'
        },
        paddingX: '1%',
        backgroundPosition: { xs: "10%" },
        marginLeft: '3%'

      }}>
        <Typography variant='h1' sx={{ color: '#66BB6A', fontWeight: 800, fontSize: { xs: '35px', sm: '50px', md: '80px' }, display: 'inline', marginLeft: '1%' }} >
          Organic
          <Box variant='span' sx={{ color: "#1B1B1B", display: 'inline', fontWeight: 100 ,marginLeft:'10px'}}>
            Foods at your
          </Box>
        </Typography>
        <Typography variant='h1' sx={{ color: '#2E7D32', marginTop: '1%', fontSize: { xs: '35px', sm: '50px', md: '80px' }, marginLeft: "1%" }}>
          Doorsteps
        </Typography>


        <Typography variant='h2' sx={{ color: '', marginTop: '0.5%', marginLeft: '1%', fontWeight: '900', fontSize: { xs: '35px', sm: '50px', md: '80px', color: '#1B1B1B' } }}>
          Lingam's Organic
        </Typography>

        <Mybutton variant='outlined' sx={{ fontSize: '15px', marginTop: { xs: '40px', md: '15px' }, paddingY: { xs: '25px', md: '25px', marginLeft: '1%' } }}>
          Start Shopping
        </Mybutton>
        <Button variant='contained' sx={{ fontSize: '15px', marginTop: { xs: '40px', md: '0.5%' }, paddingY: '12px', marginLeft: '35px', backgroundColor: '#1B1B1B' }}>
          Join Now
        </Button>

        <Box sx={{ marginLeft: '1%', marginTop: { xs: '30px', md: '1%' }, display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' } }}>
              15K
            </Box>
            <Box sx={{ fontSize: { sx: '13px', md: '20px' } }}>Product <br />  Varities</Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft:'30px'}}>
            <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' }, marginLeft: { xs: '1px', md: '10px' }, }}>
              50K
            </Box>
            <Box sx={{ fontSize: { sx: '13px', md: '20px' }, }}>Happy <br /> Customers</Box>
          </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft:'30px'}}>
          <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' }, marginLeft: { xs: '1px', md: '10px' } }}>
            10+
          </Box>
          <Box sx={{ fontSize: { sx: '13px', md: '20px' } }}>Store <br /> Locations</Box>
          </Box>
        </Box>
        {/* <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: 'green', paddingY: '10%', paddingX: '5%' }}>
            <LuRefreshCcw style={{ fontSize: '25px', color: 'white' }} />

          </Box>
          <Box>2</Box>
          <Box>3</Box>
        </Box> */}
      </Box>
    </div>
  )
}

export default Menu