import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const Login = () => {
  return (
    <div> 
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch',display: "flex"   } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      
    </Box>
   
    </div>
  )
}

export default Login