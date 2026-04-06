import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Button, Container, Typography } from '@mui/material';
 
import { Link } from 'react-router-dom';
import axios from 'axios';

 



const Login = ({Mybutton}) => {
  const [detail, setDetail]= useState({
    name:'',
    email:'',
    mobile:'',
    password:'',
    cpass:''

  })

  const handleChange=(event)=>{
    const{name, value}= event.target;
    setDetail((prevstate)=>({
      ...prevstate,[name]:value
    })); }

    const handleSubmit= (async(e)=>{
      try{
      e.preventDefault();
      await axios.post("http://localhost:5000/details",detail);
      alert("Registered Successfully!");}
      catch(error){ 
        console.log(error);
        
       }
      setDetail({ name:'',
    email:'',
    mobile:'',
    password:'',
    cpass:''})
    })
 
   
  return (
    <div>
      

      <Container  sx={{
        display: "flex", justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        gap: "15px",
        backgroundColor:'#F1F8E9',
         
         
      }}>
        
        
        <Box
          component="form"
          onSubmit={handleSubmit}
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
          
          <TextField name='name' value={detail.name} onChange={handleChange}  label="Name" variant="outlined" type='name' />
          <TextField name='email' value={detail.email} onChange={handleChange}  label="Email" variant="outlined" />
          <TextField name='mobile'  value={detail.mobile} onChange={handleChange} label="Mobile " variant="outlined" />
          <TextField name='password' value={detail.password} onChange={handleChange}  label="Password" variant="outlined" />
          <TextField name='cpass'  value={detail.cpass} onChange={handleChange} label="Confirm Password" variant="outlined" />
 
<Mybutton type='submit'>Submit</Mybutton>
<Typography>If you already have an account please <Link to='log1'>login</Link></Typography>
      </Box>        
      
      </Container>
    </div>
  )
}

export default Login