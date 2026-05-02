import React from 'react'
import { useParams } from 'react-router-dom'

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


const Navigate = ({Mybutton, datam }) => {
    const {to}= useParams();
    const dispatch = useDispatch();
const navigate = useNavigate();
    console.log(to);
    
  return (
    <div>
        <Typography variant='h2' sx={{ textAlign: 'center', PaddingTop: '50px', color: '#2E7D32', fontWeight: 600, marginTop:{xs:'20px', md:'50px'} }}>Products</Typography>
        {/* wheat */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginX:{xs:'0px',md:'40px'}}}>

    {to === 'wheat' && datam.wheat.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd', }}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
     sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px', marginLeft:{xs:'20px', lg:'40px',xl:'1px'} }}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>
    {/* millet */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'0px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'millet' && datam.millet.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "30px" }, backgroundColor: '#f5e8cd', }}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
       sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px',marginLeft:{xs:'20px', lg:'40px',xl:'1px'}}}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>
    {/* juice */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'50px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'juice' && datam.juice.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd', }}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
       sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px',marginLeft:{xs:'20px', lg:'40px',xl:'1px'}}}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>
    {/* diary */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'20px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'Dairy' && datam.Dairy.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd', }}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
      sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px', marginLeft:{xs:'20px', lg:'40px',xl:'1px'}}}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>
    {/* fruit */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'0px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'Fruits' && datam.Fruits.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd'}}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
       sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px', marginLeft:{xs:'20px', lg:'40px',xl:'1px'} }}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>
    {/* vegetable */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'0px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'Vegetables' && datam.Vegetables.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd'}}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
      sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px', marginLeft:{xs:'20px', lg:'40px',xl:'1px'}}}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>

    

    {/* rice */}
        <Grid container   columnSpacing={{md:6}} justifyContent="space-evenly"     sx={{marginTop:{xs:'10px',md:'20px'},marginX:{xs:'0px',md:'40px'}}}>

    {to === 'rice' && datam.rice.map((w)=>(
         <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
            
            <Card sx={{ marginTop: { xs: "40px", md: '20px', lg: "50px" }, backgroundColor: '#f5e8cd'}}>
              <CardMedia
                sx={{ height: { xs: 250, md: 250 } }}
                image={w.img}
                title={w.Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: "#2E7D32", fontWeight: 700 }}>  
                  {w.Name}
                </Typography>
                <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                   <Rating
       sx={{marginLeft:{xs:'50px',md:'70px', xl:"30px"}}}
      value={w.value}
      precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"  />}
      readOnly />
       
                </Box>
                <Typography sx={{ marginTop: '20px',marginLeft:{xs:'20px', lg:'40px',xl:'1px'} }}> <span style={{ textDecoration: "line-through", color: '#584f4f' }}> {w.discount}.00</span> <span style={{ marginLeft: '5px', fontSize: '19px', fontWeight: 800, }}>{w.price}.00</span><span style={{ border: '1px solid ', padding: '2px', marginLeft: '10px', color: '#584f4f', fontSize: '13px' }}>{w.offer}</span></Typography>

              </CardContent>
              <CardActions>
                <Mybutton variant='outlined' sx={{ marginLeft: '40px' }} onClick={() => (dispatch(addItem(w)), navigate("/cart"))}>Add to cart</Mybutton>
                <CiHeart style={{ fontSize: '32px', border: " 1px solid", padding: '3px' }} />
              </CardActions>
            </Card>
          </Grid>
    ))}  
    </Grid>

    </div>
  )
}

export default Navigate