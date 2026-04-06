import React from 'react'
import Naver from './Naver'
import { Box, Typography } from '@mui/material'
import ban from '../assets/banner1.png'

const Menu = () => {
  return (
    <div>
<Naver/>

<Box sx={{backgroundImage:`url(${ban})`,
        padding:'20%',

          }}> 
    <Typography variant='h4'>harish</Typography>
</Box>
    </div>
  )
}

export default Menu