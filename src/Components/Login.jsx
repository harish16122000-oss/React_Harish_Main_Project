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
        gap: "20px"
      }}>
        <Typography variant='h4' sx={{ textAlign: "center", mt: "5%" }}>
          Register
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            gap: "25px",
            flexDirection: "column",
            '& > :not(style)': { m: 1, width: '25ch', minWidth: "400px" }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />

        </Box>
        <Button variant='outlined' sx={{ backgroundColor: "#2E7D32", color: "white", width: '150px', height: '40px', '&:hover': { backgroundColor: "white", color: "#2E7D32" } }}>Submit</Button>
          {/* <Button variant='contained'>hello</Button> */}
      </Container>
    </div>
  )
}

export default Login