 import React from 'react'
import Naver from './Components/Naver'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Theme'
import '@fontsource/roboto/400.css';
import Login from './Components/Login';
 
 const App = () => {
   return (
     <div>
       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Naver/>
        <Login/>
       </ThemeProvider>
     </div>
   )
 }
 
 export default App
 