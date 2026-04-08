import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import veg1 from '../assets/veg1.jpg';
import fruit1 from '../assets/fruit1.jpg';
import rice1 from '../assets/rice1.png';
import wheat1 from '../assets/wheat1.jpg';
import millet1 from '../assets/millet1.png';
import juice1 from '../assets/juice1.jpg';
import dairy1 from '../assets/dairy1.jpg'
const Product = ({Mybutton}) => {
    const prod= [
        {id:1 , img: wheat1, head:'Wheat',},
        {id:2 , img: millet1, head:'Millet',  },
        {id:3 , img: juice1 , head:'Juice',},
        {id:4 , img: dairy1, head:'Dairy ',  },
        {id:5 , img: fruit1, head:'Fruits', },
        {id:6 , img: veg1, head:'Vegetables',  },
        {id:7 , img:rice1, head:'Rice',  },
    ]
  return (
    <div>
         
         <Typography variant='h2'sx={{textAlign:'center', marginTop:'50px', color:'#2E7D32'}}>Products</Typography>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'10px', marginTop:{xs:'10px',xl:'50px'}}}>
            {prod.map((p)=>(
           
       <Card key={p.id} sx={{ maxWidth: 345 , paddingY:'3%', paddingX:'3%', marginLeft:{xs:'50px', md:'0px'}}}>
      <CardMedia
        sx={{ height: 140, width: 140, borderRadius:'50%' ,marginLeft:{xs:'80px', md:"0px"}}}
        image={p.img}
        title={p.head}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
         {p.head}
        </Typography>
         
      </CardContent>
      <CardActions>
        <Mybutton variant='outlined' sx={{ml:{sm:'20%' ,xs:'25%', md:'18%'}}}>View</Mybutton>
        
      </CardActions>
    </Card>
      ))}
    </Box>

     
    </div>
  )
}

export default Product
