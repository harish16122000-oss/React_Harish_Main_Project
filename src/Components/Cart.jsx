import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 import { addItem, removeItem, increaseQty, decreaseQty, clearCart } from '../Counterslice'
import Typography from '@mui/material/Typography';
import { CiHeart } from "react-icons/ci";
 
import { useSelector } from 'react-redux';
 


const Cart = ({Mybutton}) => {
    const  product= useSelector((state)=>state.cart.items);
  return (
    <div>
        {product.map((p)=>(
       <Card key={p.id}  sx={{marginTop:{xs:"40px", md:'20px', lg:"0px"} ,maxWidth: 250 , marginLeft:{xs:'80px', md:'0px'},backgroundColor:'#f5e8cd'}}>
       <CardMedia
        sx={{ height:{xs: 250, md: 250 }, width:{xs: 250, md: 250}}}
        image={p.img}
        title={p.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: "#2E7D32", fontWeight:700}}>
        {p.Name}
        </Typography>
         
    <Typography sx={{marginTop:'20px', marginLeft:'1px'}}> <span style={{textDecoration:"line-through",color:'#584f4f'}}> {p.discount}.00</span> <span style={{marginLeft:'5px',fontSize:'19px', fontWeight: 800,}}>{p.price}.00</span><span style={{border:'1px solid ', padding:'2px',marginLeft:'10px', color:'#584f4f', fontSize:'13px'}}>{p.offer}</span></Typography>
         
      </CardContent>
      <CardActions>
        <Mybutton variant='outlined' sx={{marginLeft:'40px'}}>Buy Now</Mybutton>
        <CiHeart  style={{fontSize:'32px', border:" 1px solid", padding:'3px'}}/>
      </CardActions>
    </Card>
    ))}
    </div>
  )
}

export default Cart
