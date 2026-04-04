import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Container, Typography } from '@mui/material';
 
import { Link } from 'react-router-dom';

 



const Login = ({Mybutton}) => {
   
  return (
    <div>
      <Container sx={{
        display: "flex", justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        gap: "15px",
        backgroundColor:'#F1F8E9',
         
         
      }}>
        
        
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            gap: "16px",
            flexDirection: "column",
            px:"3%",
            my:"1%",
            backgroundColor:"#FFFFFF",
            borderRadius:"20px",
           
            '& > .MuiTextField-root': { m: 1, width: '25ch', minWidth: "400px",  },
    
    
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant='h4' sx={{ textAlign: "center",mt:"5px" }}>
          Register
        </Typography>
          
          <TextField  label="Name" variant="outlined" type='name' />
          <TextField   label="Email" variant="outlined" />
          <TextField   label="Mobie Number" variant="outlined" />
          <TextField   label="Password" variant="outlined" />
          <TextField   label="Confirm Password" variant="outlined" />
 
<Mybutton>Submit</Mybutton>
<Typography>If you already have an account please <Link to='log1'>login</Link></Typography>
      </Box>        
      
      </Container>
    </div>
  )
}

export default Login