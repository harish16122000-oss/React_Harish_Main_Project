import React, {useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { addItem } from '../Counterslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

 

const labels = {
  0.5: '',
  1: ' ',
  1.5: ' ',
  2: ' ',
  2.5: ' ',
  3: ' ',
  3.5: ' ',
  4: ' ',
  4.5: ' ',
  5: ' ',
};


const Juice = ({Mybutton}) => {
  const navigate= useNavigate()
  const dispatch =useDispatch()
    const[wheat, setWheat]= useState([]);
    const [loading, setLoading]= useState(true);

    const wheats = async()=>{ 
try{
     
     const res = await axios.get("http://localhost:5000/juice");
      setWheat(res.data);
   }
     catch(error){
      console.error( "Error fetching data:", error)
     }
     finally{
      setLoading(false);
     } };
     useEffect(()=>{wheats()},[]);

     const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

                     /* Loading */
    if(loading) return <Box sx={{ width: 300, display:{xs:"grid", md:'flex'},  justifyContent:"space-evenly", alignItems:'center', marginTop:{xs:"30px", md:"200px"} }}>


       <Box sx={{marginLeft:{md:"50px", lg:"80px"}}}>
       <Skeleton variant="rectangular" width={210} height={118}  />
       <Skeleton />
       <Skeleton width="80%" />
       <Skeleton width="50%" />
       
       </Box>
       <Box sx={{marginLeft:{md:"50px", lg:"80px"}}}>
       <Skeleton variant="rectangular" width={210} height={118}  />
       <Skeleton />
       <Skeleton width="80%" />
       <Skeleton width="50%" />
       
       </Box>
       <Box sx={{marginLeft:{md:"50px", lg:"80px"}}}>
       <Skeleton variant="rectangular" width={210} height={118}  />
       <Skeleton />
       <Skeleton width="80%" />
       <Skeleton width="50%" />
       
       </Box>
       <Box sx={{marginLeft:{md:"50px", lg:"80px"}}}>
       <Skeleton variant="rectangular" width={210} height={118}  />
       <Skeleton />
       <Skeleton width="80%" />
       <Skeleton width="50%" />
       
       </Box>
       <Box sx={{marginLeft:{md:"50px", lg:"80px"}}}>
       <Skeleton variant="rectangular" width={210} height={118}  />
       <Skeleton />
       <Skeleton width="80%" />
       <Skeleton width="50%" />
       
       </Box>
    </Box>;

    
  return (

    <div>
                                     {/* Juice */}

       <Typography variant='h2'sx={{textAlign:'center', marginTop:'50px', color:'#2E7D32', fontWeight:600, marginBottom:{xs:"0px",md:'40px'}}}>Juice Products</Typography>
  
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'50px'},mx:'auto'}}>
          
               {/* Mapmethod */}
           {wheat.map((w)=>(
           
             <Grid key={w.id} size={{xs:12, sm:6, md:3, lg:3, xl:2}}>
       <Card   sx={{marginTop:{xs:"40px", md:'20px', lg:"0px"}  , marginLeft:{xs:'80px', md:'0px'},backgroundColor:'#f5e8cd', marginBottom:"30px"}}>
       <CardMedia
        sx={{ height:{xs: 250, md: 250 }}}
        image={w.img}
        title={w.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: "#2E7D32", fontWeight:700}}>
        {w.Name}
        </Typography>
         <Box sx={{ width: 200, display:'flex', alignItems: 'center', }}>
      <Rating
      sx={{marginLeft:'50px'}}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      
    </Box>
    <Typography sx={{marginTop:'20px', marginLeft:'1px'}}> <span style={{textDecoration:"line-through",color:'#584f4f'}}> {w.discount}.00</span> <span style={{marginLeft:'5px',fontSize:'19px', fontWeight: 800,}}>{w.price}.00</span><span style={{border:'1px solid ', padding:'2px',marginLeft:'10px', color:'#584f4f', fontSize:'13px'}}>{w.offer}</span></Typography>
         
      </CardContent>
      <CardActions>
        <Mybutton variant='outlined' sx={{marginLeft:'40px'}} onClick={() =>(dispatch(addItem(w)),navigate("/cart"))}>Add to cart</Mybutton>
        <CiHeart  style={{fontSize:'32px', border:" 1px solid", padding:'3px'}}/>
      </CardActions>
    </Card>
      </Grid>
      
      ))}
   
    </Grid>

    </div>
  )
}

export default Juice
