import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 import { addItem, removeItem, increaseQty, decreaseQty, clearCart } from '../Counterslice'
import Typography from '@mui/material/Typography';

 import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
 import { IoIosAddCircle } from "react-icons/io";
 import { FaCircleMinus } from "react-icons/fa6";
 import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';

const Cart = ({Mybutton}) => {
  const dispatch =useDispatch()
    const  product= useSelector((state)=>state.cart.items);
  return (
    <div>
      <Grid container columnSpacing={{md:6}} justifyContent="start" sx={{marginTop:{xs:"0px", md:"30px"},mx:"50px"  }}>
        {product.map((p)=>(
          <Grid key={p.id} size={{xs:12, sm:6, md:3, lg:3, xl:3}}>
       <Card    sx={{marginTop:{xs:"40px", md:'20px', lg:"0px"} ,maxWidth: 250 , marginLeft:{xs:'30px', md:'0px'},backgroundColor:'#f5e8cd', marginBottom:{xs:"0px", md:'30px'}}}>
         
       <CardMedia
        sx={{ height:{xs: 250, md: 250 }, width:{xs: 250, md: 250}}}
        image={p.img}
        title={p.Name}

      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: "#2E7D32", fontWeight:700}}>
        {p.Name}
        </Typography>
         
    <Typography sx={{marginTop:'20px', marginLeft:'1px'}}> <span style={{textDecoration:"line-through", color:'#584f4f'}}> {p.discount}.00</span> <span style={{marginLeft:'5px',fontSize:'19px', fontWeight: 800,}}>{p.price}.00</span><span style={{border:'1px solid ', padding:'2px', marginLeft:'10px', color:'#584f4f', fontSize:'13px'}}>{p.offer}</span></Typography>
    <Box sx={{display:"flex", justifyContent:"space-evenly", marginTop:"15px"}}>
          <IoIosAddCircle style={{color:"#2a14ec", fontSize:'30px', backgroundColor:'white'}} onClick={()=> dispatch(increaseQty(p.id))} /> <span style={{fontSize:"30px", fontWeight:800}}>{p.quantity}</span>
            <FaCircleMinus onClick={()=> dispatch(decreaseQty(p.id))}  style={{fontSize:'32px',  padding:'3px'}}/></Box>
      </CardContent>
      <CardActions>
       
        <Mybutton variant='outlined' sx={{marginLeft:'40px'}}>Buy Now</Mybutton>
        
          <MdDelete onClick={()=> dispatch(removeItem(p.id))} style={{
          
          color:"red", fontSize:'30px', backgroundColor:'#f5e8cd' }}/>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  )
}

export default Cart
