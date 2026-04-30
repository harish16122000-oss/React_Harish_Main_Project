import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
 import veg1 from '../assets/veg1.jpg';
import fruit1 from '../assets/fruit1.jpg';
import rice1 from '../assets/rice1.png';
import wheat1 from '../assets/wheat1.jpg';
import millet1 from '../assets/millet1.png';
import juice1 from '../assets/juice1.jpg';
import dairy1 from '../assets/dairy1.jpg';
import best1 from '../assets/dairy butter.jpg';
import best2 from '../assets/fruit apple.jfif';
import best3 from '../assets/millet ladoos.webp';
import best4 from '../assets/pomegranate juice.jpg';
import back1 from '../assets/background-1.jpg';
import back2 from '../assets/blue_background_2.jpg';
import back3 from '../assets/background3.jpg'
import { Avatar, Box, Button, Container, Grid, IconButton, Rating, TextField  } from '@mui/material';
import ban from '../assets/ban.png';
import CardActionArea from '@mui/material/CardActionArea';
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import  backgreen from '../assets/green_back.jpg';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


const Menu = ({ Mybutton, datam }) => {

  const [feed, setFeed]= useState(
    {
      name:'',
      email:'',
      title:'',
      review:''

    }
 )
 const handleChange= (e)=>{
  const[name, value]=e.target;
  setFeed((prev)=>({...prev, [name]:value}))
 }

 const handleSubmit= (e)=>{
  e.preventDefault;
  setFeed(
  {
      name:'',
      email:'',
      title:'',
      review:''

    })
  alert("Reviews Updated")
 }

  const [select, setSelect]= useState("");
  const navigate= useNavigate(); 
   const [value, setValue] = React.useState(2);
   const upload = () => {

   }
  const reviews = [
  {
    id: 1,
    name: "Harish Kumar",
    orderId: "ORD-1001",
    rating: 4,
    date: "28 Apr 2026",
    comment: "Very satisfied with the product quality.  Delivery was quick too. Will definitely order again."
  },
  {
    id: 2,
    name: "Priya Sharma",
    orderId: "ORD-1002",
    rating: 5,
    date: "27 Apr 2026",
    comment: "Excellent organic products! The vegetables were fresh and tasted natural. Loved the service and packaging."
  },
  {
    id: 3,
    name: "Arun Kumar",
    orderId: "ORD-1003",
    rating: 4,
    date: "26 Apr 2026",
    comment: "Good quality items, but delivery was slightly delayed. Overall happy with the purchase."
  },
  {
    id: 4,
    name: "Sneha Reddy",
    orderId: "ORD-1004",
    rating: 5,
     date: "25 Apr 2026",
    comment: "Amazing experience! Everything was fresh and organic as promised. Highly recommend this store."
  }
];

  const cards = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    title: 'Free delivery',
    description: 'Get your orders delivered to your doorstep at no extra cost.',
  },
  {
    id: 2,
     icon: <MdPayment />,
    title: '100% secure payment',
    description: 'Enjoy safe and secure transactions every time you shop.',
  },
  {
    id: 3,
     icon: <TiTickOutline />,
    title: 'Quality gurantee',
    description: 'We provide high-quality products you can trust.',
  },
  {
    id: 4,
     icon: <MdOutlineLocalOffer />,
    title: 'Daily offers',
    description: 'Grab exciting deals and discounts every day.',
  }
];
 
   const prod= [
          {id:1 , img: wheat1, head:'Wheat', to:"wheat"},      
          {id:2 , img: millet1, head:'Millet',to:"millet"},
          {id:3 , img: juice1 , head:'Juice',to:"juice" },
          {id:4 , img: dairy1, head:'Dairy ', to:"Dairy" },
          {id:5 , img: fruit1, head:'Fruits', to:"Fruits"},
          {id:6 , img: veg1, head:'Vegetables', to:"Vegetables" },
          {id:7 , img:rice1, head:'Rice', to:"rice" },
      ]
       
      const best =[
             {id:1, img:best1, name:"Butter"},
             {id:2, img:best2, name:"Apple"},
             {id:3, img:best3, name:" Ladoos"},
             {id:4, img:best4, name:"Juice"},
      ]
  return (
    <div> 
                       {/* Mainpage */}

                     {/* Backgroundimage */}

      <Box sx={{
        backgroundImage: `url(${ban})`,
        paddingY: {
          
          md: "10%",
          lg: "1%",
          xl: '2.7%'
        },
       paddingTop:{xs: "15%",md:'0'},
        paddingX: '1%',
        backgroundPosition: { xs: "10%" },
        paddingLeft: {xs:"10%", md:'3%'}

      }}>
        <Typography variant='h1' sx={{ color: '#66BB6A', fontWeight: 800, fontSize: { xs: '35px', sm: '50px', md: '80px' }, display: 'inline', marginLeft: '1%' }} >
          Organic
          <Box variant='span' sx={{ color: "#1B1B1B", display: 'inline', fontWeight: 100 ,marginLeft:'10px'}}>
            Foods at your
          </Box>
        </Typography>
        <Typography variant='h1' sx={{ color: '#2E7D32', marginTop: '1%', fontSize: { xs: '35px', sm: '50px', md: '80px' }, marginLeft: "1%" }}>
          Doorsteps
        </Typography>


        <Typography variant='h2' sx={{ color: '#1B1B1B', marginTop: '0.5%', marginLeft: '1%', fontWeight: '900', fontSize: { xs: '35px', sm: '50px', md: '80px',  } }}>
          Lingam's Organic
        </Typography>
        <Box sx={{marginTop:{xs:'30px', md:"50px"}}}>
        <Mybutton variant='outlined' fontSize={{ sx: '15px', marginTop: { xs: '40px', md: '15px',lg:'70px' }, paddingY: { xs: '25px', md: '25px', marginLeft: '1%' }, }}>
          Start Shopping
        </Mybutton>
        <Button variant='contained' sx={{ fontSize: '15px', marginTop: { xs: '0px', md: '0%',lg:'0px' }, paddingY: '12px', marginLeft: '35px', backgroundColor: '#1B1B1B' ,  }}>
          Join Now
        </Button>
</Box>
        <Box sx={{marginLeft:'1%', marginTop: { xs: '30px', md: '1%', xl:'3%' }, display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' } }}>
              15K
            </Box>
            <Box sx={{ fontSize: { sx: '13px', md: '20px' } }}>Product <br />  Varities</Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft:'30px'}}>
            <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' }, marginLeft: { xs: '1px', md: '0px' }, }}>
              50K
            </Box>
            <Box sx={{ fontSize: { sx: '13px', md: '20px' }, }}>Happy <br /> Customers</Box>
          </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft:'30px'}}>
          <Box sx={{ fontWeight: 700, fontSize: { xs: '25px', md: '48px' }, marginLeft: { xs: '1px', md: '0px' } }}>
            10+
          </Box>
          <Box sx={{ fontSize: { sx: '13px', md: '20px' } }}>Store <br /> Locations</Box>
          </Box>
        </Box>
         </Box>
         <Box>

                       {/* Categories */}
                       
                  <Typography variant='h2'sx={{textAlign:'center', marginTop:'50px', color:'#2E7D32', fontWeight:600, fontSize: { xs: '35px', sm: '50px', md: '60px',  }, marginBottom:{xs:"40px", md:'0px'}}}>Categories</Typography>
                 <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'10px', justifyContent:"center", marginTop:{xs:'0px',md:'50px'},paddingBottom:"6%"}}>
                     {prod.map((p)=>(
                    
                <Card key={p.id} sx={{ maxWidth: 345 , paddingY:'3%', paddingX:{xs:'3%',md:"1.5%",xl:'3%'}, marginLeft:{xs:'20px', md:'0px'},backgroundColor:'#f5e8cd', marginBottom:{xs:"20px", md:"0px"}}}>
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
                 <Mybutton variant='outlined' onClick={ ()=> navigate(`/navigate/${p.to}`)}  sx={{ml:{sm:'20%' ,xs:'25%', md:'1px',xl:'10%'}}}>View</Mybutton>
                 
               </CardActions>
             </Card>
               ))}
             </Box>
         
              
             </Box>
                                      {/* Best Selling products */}
             <Container>
             <Box>
              <Typography variant='h4' sx={{textAlign:"center"}}> Best Selling Products</Typography>
              <Grid container columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'20px',xl:'50px'},mx:'auto'}}>
                {best.map((e)=>(
                <Grid key={e.id} size={{xs:12, sm:6, md:3, lg:3, xl:3}}>
                
                <img src={e.img}  style={{ height: 180, width: 180, borderRadius:'50%' ,marginLeft:{xs:'80px', md:"0px"}, marginTop:{sx:"20px", md:"0px"}}} alt="" /> <br />
               <Typography   variant='body' sx={{ marginLeft:'65px', marginBottom:{xs:'50px', md:'auto'}}} > {e.name} </Typography>
              
                   </Grid>
               ))}
              </Grid>
                
             </Box>
             </Container>
              {/* Combo offers */}

             <Box sx={{display:{xs:"block", lg:'flex'}, marginX:"20px", marginY:{md:"100px"},gap:"20px",justifyContent:"center", marginTop:{xs:"50px", md:"100px"}}}>
              <Box sx={{position:"relative", }}>
                <Box component="img"src={back1}sx={{ height: "100%", width: { xs: "100%", xl: "100%" }}}/>
                 <Box sx={{position:"absolute", bottom:"55%", left:'5%', color:"white"}}>
                  <h1> items on Sale</h1>
                  <p> Discount upto 30%</p>
                 </Box>
              </Box>
              <Box sx={{position:"relative"}}>
                <Box component="img"src={back3}sx={{ height: "100%", width: { xs: "100%", xl: "100%" }}}/>
                 <Box sx={{position:"absolute", bottom:"25%", left:'30%', color:"white"}}>
                  <h1> Combo Offers</h1>
                  <p> Discount upto 30%</p>
                 </Box>
              </Box>
              
             </Box>
            {/* Delivery  */}
            <Typography variant='h4'sx={{textAlign:'center', marginTop:{xs:'50px', md:"100px"}}}>
             Why Choose Us
            </Typography>

             <Box
      sx={{
        width:{xs:'100%', md:"100%"},
        display: {xs:"block",md:'grid'},
        justifyContent:'center',
         paddingX:{xs:"15%", md:"auto"} ,
        gridTemplateColumns: '20% 20% 20% 20% ',
        gap: 3,
        marginTop:{xs:"50px", md:"50px"}
       
      
      }}
    >
      {cards.map((card, index) => (
        <Card sx={{border:"1px solid",marginTop:{xs:"20px", md:"0px"} }} key={card.id}>
          <CardActionArea
           
             
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%', }}>
              <Typography variant="h5" component="div">
                {card.icon}
              </Typography> 
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{color: 'text.secondary'}}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    <Container sx={{backgroundImage:`url(${backgreen})`, marginTop:{xs:"50px", md:"100px"}}}>
      <Typography variant='h2'sx={{color:"white", paddingTop:"100px", textAlign:"center", fontSize:{xs:"40px", md:'60px'}}}>Get 25% Discount on<br/> your first <br /> purchase
     
      </Typography>
      <p style={{color:'white', textAlign:'center', }}>Just Sign Up & Register it now to become member.
</p>
<Mybutton variant='outlined'sx={{marginLeft:{xs:"30%",md:"45%"},paddingX:"40px", marginY:"20px"}} onClick={ (()=> navigate("/log1"))}>Login</Mybutton>
    </Container>

{/* Customer Reviews */}

     <Box sx={{ p: 4, backgroundColor: "#f5f5f5", marginTop:{xs:"20px", md:"50px"} }}>
      
      <Typography variant="h4" textAlign="center" mb={3} sx={{marginY:{xs:"20px", md:"50px"}}}>
        Customer Reviews
      </Typography>

      <Grid container spacing={3} justifyContent='center'>
        {reviews.map((rev) => (
          <Grid item xs={12} sm={6} md={3} key={rev.id}>
            
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>

              
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>{rev.name[0]}</Avatar>
                  <Box>
                    <Typography fontWeight="bold">
                      {rev.name}
                    </Typography>
                    <Typography variant="caption" color="gray">
                      {rev.date}
                    </Typography>
                  </Box>
                </Box>

                
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Order: {rev.orderId}
                </Typography>

                
                <Rating value={rev.rating} readOnly sx={{ mt: 1 }} />

                
                <Typography sx={{ mt: 1, width:'200px' }}>
                  {rev.comment}
                </Typography>

              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
      {/* Users Review */}
<Box
  sx={{
    display: "flex",
    justifyContent: "center",   // horizontal center
    alignItems: "center",       // vertical (optional)
    mt: 5
  }}
>
   
  <Box component="form" sx={{ display: "flex", flexDirection: "column", width: 300, mx: "auto", gap: 2, mt: 2 }}>
       <Rating
      name="simple-controlled"
      sx={{ fontSize: "60px" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}/>
        <TextField label="Name" />
        <TextField label="Email"/>
        <TextField label="Review Title"/>
        <TextField label="What's your review?"/>

        <Button variant="contained" type='submit' >
          Submit
        </Button>
      </Box>
</Box>
    </Box>

     <Box sx={{ backgroundColor: "#115e15", color: "#fff", mt: 5, pt: 5, pb: 3 }}>
      
      <Grid container spacing={4} justifyContent="center" sx={{ px: 5 }}>
        
        {/* Brand Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Lingam's Organic
          </Typography>
          <Typography variant="body2">
            Fresh, natural and organic products directly from farms to your home.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          <Typography sx={{ cursor: "pointer" }}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }}>Products</Typography>
          <Typography sx={{ cursor: "pointer" }}>About</Typography>
          <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography>Email: harish16122000@gmail.com</Typography>
          <Typography>Phone: +91 8523904929</Typography>
          <Typography>Location: Tamil Nadu, India</Typography>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Newsletter
          </Typography>
          <TextField
            variant="filled"
            label="Your Email"
            fullWidth
            sx={{ backgroundColor: "#fff", borderRadius: 1, mb: 2 }}
          />
          <Button variant="contained" color="warning" fullWidth>
            Subscribe
          </Button>
        </Grid>

      </Grid>

      {/* Bottom Line */}
      <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #ccc", pt: 2 }}>
        <Typography variant="body2">
          © 2026 Lingam's Organic | All Rights Reserved
        </Typography>
      </Box>
    </Box>
    </div>
  )
}

export default Menu