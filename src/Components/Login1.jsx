  
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import img1 from  '../assets/logo1.png'
import { Container, Typography } from '@mui/material';
 
 
 const Login1 = ({Mybutton}) => {

   return (
     <div sx={{backgroundColor:"#F5F5F5"}}>
        <Container sx={{width:"350px", }}>
         <Box
      component="form"
      sx={{ 
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
        ,alignItems:"center",
        mt:"20%",
          padding:"10%",
          borderRadius:"30px",
        backgroundColor:"#E8F5E9",
        '& >.MuiTextField-root': { m: 2, width: '25ch', minWidth: "200px",  } }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' sx={{mb:"12%"}}>Login</Typography>
      <img src= {img1} alt="" height="150px" width="250px"/>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Mybutton>Submit</Mybutton>
    </Box>
        </Container>
     </div>
   )
 }
 
 export default Login1
 