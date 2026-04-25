import React, { useEffect, useState } from 'react'
import Naver from './Components/Naver'
import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Theme'

import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login1 from './Pages/Login1';
 
import { styled } from '@mui/material/styles';
import Menu from './Pages/Menu';
 
import Cart from './Components/Cart';
import Mainer from './Pages/Mainer';
import Wheat from './Components/Wheat';
import Details from './Pages/Details';
import Order from './Components/Order';
import axios from 'axios';


 
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
  const [datam, setDatam] = useState({
    wheat:[],
    millet:[],
    juice:[],
    Dairy:[],
    Fruits:[],
    Vegetables:[],
    rice:[],


  })
   useEffect(() => {
  Promise.all([
    axios.get("http://localhost:5000/wheat"),
    axios.get("http://localhost:5000/millet"),
    axios.get("http://localhost:5000/juice"),
    axios.get("http://localhost:5000/Dairy"),
    axios.get("http://localhost:5000/Fruits"),
    axios.get("http://localhost:5000/Vegetables"),
    axios.get("http://localhost:5000/rice")
  ])
    .then((responses) => {
      console.log("RESPONSES:", responses);

      setDatam({
        wheat: responses[0]?.data || [],
        millet: responses[1]?.data || [],
        juice: responses[2]?.data || [],
        Dairy: responses[3]?.data || [],
        Fruits: responses[4]?.data || [],
        Vegetables: responses[5]?.data || [],
        rice: responses[6]?.data || []
      });
    })
    .catch((err) => console.log("ERROR:", err));
}, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <BrowserRouter>
       
        
          <Naver  />
          <Routes>
            
            <Route path='/' element={<Menu Mybutton={Mybutton}/>} />
             
            <Route path='/log' element={<Login Mybutton={Mybutton}/>} />
            <Route path='/log1' element={<Login1 Mybutton={Mybutton}/>} />
             
            <Route path='/cat' element={<Mainer datam={datam} Mybutton={Mybutton}/>} />
            <Route path='/cart' element={<Cart Mybutton={Mybutton}/>} />
            <Route path='/det/:id' element={<Details Mybutton={Mybutton} datam={datam}/>} />
            <Route path='/order' element={<Order Mybutton={Mybutton}/>} />
             
            
            

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
