import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 



import TextField from '@mui/material/TextField';
import {  Container, Typography } from '@mui/material';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
 import { IoIosAddCircle } from "react-icons/io";
 import { FaCircleMinus } from "react-icons/fa6";
 import { MdDelete } from "react-icons/md";

 



/* const Details = ({Mybutton}) => {
 const { id } = useParams();

const product = useSelector((state) => state.cart.items  );

console.log("Products:", product);
console.log("URL id:", id);

const deta = product.find((pro) => pro.id === Number(id));

console.log("Matched product:", deta);

if (!deta) {
  return <Typography>Product not found</Typography>;
}
   
  
 
   
  return (
    <div>
     <p>{deta.Name}</p>
      

     
    </div>
  )
} */
const Details = () => {

  const { id } = useParams();

  const cartItems = useSelector((state) => state.cart.items || []);

  const deta = cartItems.find((item) => item.id === Number(id));

  if (cartItems.length === 0) {
    return <Typography>Cart is empty</Typography>;
  }

  if (!deta) {
    return <Typography>Product not found in cart</Typography>;
  }

  return (
    <div>
      <Typography variant="h5">{deta.Name}</Typography>
      <Typography>Price: {deta.price}</Typography>
      <Typography>Quantity: {deta.quantity}</Typography>
    </div>
  );
};

export default Details