import React from 'react'
import Naver from './Components/Naver'
import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Theme'

import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login1 from './Components/Login1';
 
import { styled } from '@mui/material/styles';
import Menu from './Components/Menu';
import Product from './Components/Product';

const Mybutton = styled(Button)({
  backgroundColor: "#2E7D32",
  color: "white",
  width: "150px",
  height: "40px",
  marginBottom: "5px",
  '&:hover': {
    backgroundColor: "#Fff",
    color: "#2E7D32",
  },
});

  
const App = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <BrowserRouter>
          <Naver  />
          <Routes>
            
            <Route path='/' element={<Menu Mybutton={Mybutton}/>} />
             
            <Route path='/log' element={<Login Mybutton={Mybutton}/>} />
            <Route path='/log/log1' element={<Login1 Mybutton={Mybutton}/>} />
            <Route path='/pro' element={<Product Mybutton={Mybutton}/>} />
            

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
