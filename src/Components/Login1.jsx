  
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
 
 const Login1 = ({Mybutton}) => {

   return (
     <div>
        
         <Box
      component="form"
      sx={{ 
        display:'flex'
        ,justifyContent:'center',
        flexDirection:'column'
        ,alignItems:"center",
        mt:"10%",
        gap:'5%',
        '& >.MuiTextField-root': { m: 1, width: '25ch', minWidth: "200px",  } }}
      noValidate
      autoComplete="off"
    >
      <img src='' alt="" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Mybutton>Submit</Mybutton>
    </Box>
        
     </div>
   )
 }
 
 export default Login1
 