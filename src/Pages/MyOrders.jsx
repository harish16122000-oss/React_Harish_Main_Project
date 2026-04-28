import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const MyOrders = ({datam}) => {
    const orders= useSelector((state)=> state.cart.orders)
    console.log(orders);
    
  return (
    <div>
      <Grid container columnSpacing={{md:6}} justifyContent="start" sx={{marginTop:{xs:"0px", md:"30px"},mx:"50px"  }}>
        {orders.map((p)=>(
             <Grid key={p.id} size={{xs:12, sm:6, md:3, lg:3, xl:3}}>
           <Card   sx={{marginTop:{xs:"40px", md:'20px', lg:"0px"}, maxWidth: 250 ,backgroundColor:'#f5e8cd', marginBottom:{xs:"0px", md:'30px'}, marginTop:{xs:"1%", md:"1%"},  }}>
         
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
     
     </CardContent> </Card>
    </Grid>
    ))}
    </Grid>
    </div>
  )
}

export default MyOrders
