import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import styled from 'styled-components';



const Login = () => {
  // const Mybutton = styled(Button)({
  //   backgroundColor: "#2E7D32", color: "white", width: '150px', height: '40px', 
  //   '&:hover': { backgroundColor: "white", color: "#2E7D32" },
  // }
  // )

  return (
    <div>
      <Container sx={{
        display: "flex", justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        gap: "20px",
        backgroundColor:'#F1F8E9',
         
         
      }}>
        
        
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            gap: "20px",
            flexDirection: "column",
            p:"3%",
            backgroundColor:"#FFFFFF",
            borderRadius:"20px",
           my:"4%",
            '& > .MuiTextField-root': { m: 1, width: '25ch', minWidth: "400px",  },
    
    
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant='h4' sx={{ textAlign: "center", }}>
          Register
        </Typography>
          
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Mobie Number" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
<Button variant='outlined' sx={{ backgroundColor: "#2E7D32 " , color: "white", width: '150px ', height: '40px ',mb:'10px',  '&:hover': { backgroundColor: "white", color: "#2E7D32" } }}>Submit</Button>
        </Box>
        
       
      </Container>
    </div>
  )
}

export default Login