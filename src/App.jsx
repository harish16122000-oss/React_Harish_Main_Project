 import React from 'react'
import Naver from './Components/Naver'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Theme'

import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
 const App = () => {
   return (
     <div>
       <ThemeProvider theme={theme}>
        <CssBaseline/>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Naver/>}/>
        <Route path='/log' element={ <Login/>} />
       
      </Routes>
      </BrowserRouter>
       </ThemeProvider>
     </div>
   )
 }
 
 export default App
 