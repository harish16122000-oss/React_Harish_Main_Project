import React from 'react'
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
import { Box, Button, Container, Grid  } from '@mui/material';
import ban from '../assets/ban.png';
import CardActionArea from '@mui/material/CardActionArea';
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import  backgreen from '../assets/green_back.jpg'


const Menu = ({ Mybutton }) => {
  const navigate= useNavigate(); 


  
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
          {id:1 , img: wheat1, head:'Wheat'},      
          {id:2 , img: millet1, head:'Millet',},
          {id:3 , img: juice1 , head:'Juice', },
          {id:4 , img: dairy1, head:'Dairy ',  },
          {id:5 , img: fruit1, head:'Fruits', },
          {id:6 , img: veg1, head:'Vegetables',  },
          {id:7 , img:rice1, head:'Rice',  },
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
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                 <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'10px', marginTop:{xs:'0px',md:'50px'},paddingBottom:"6%"}}>
                     {prod.map((p)=>(
                    
                <Card key={p.id} sx={{ maxWidth: 345 , paddingY:'3%', paddingX:{xs:'3%',md:"1.5%",xl:'3%'}, marginLeft:{xs:'50px', md:'0px'},backgroundColor:'#f5e8cd', marginBottom:{xs:"20px", md:"0px"}}}>
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
                 <Mybutton variant='outlined' onClick={ (()=> navigate("/cat"))}  sx={{ml:{sm:'20%' ,xs:'25%', md:'1px',xl:'10%'}}}>View</Mybutton>
                 
               </CardActions>
             </Card>
               ))}
             </Box>
         
              
             </Box>
                                      {/* Best Selling products */}
             <Container>
             <Box>
              <Typography variant='h4' sx={{textAlign:"center"}}> Best Selling Products</Typography>
              <Grid container columnSpacing={{md:6}} justifyContent="space-evenly"    sx={{marginTop:{xs:'10px',xl:'50px'},mx:'auto'}}>
                {best.map((e)=>(
                <Grid key={e.id} size={{xs:12, sm:6, md:3, lg:3, xl:3}}>
                
                <img src={e.img}  style={{ height: 180, width: 180, borderRadius:'50%' ,marginLeft:{xs:'80px', md:"0px"}, marginTop:{sx:"20px", md:"0px"}}} alt="" /> <br />
               <Typography   variant='body' sx={{ marginLeft:'65px'}} > {e.name} </Typography>
              
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

             <Box
      sx={{
        width: '100%',
        display: {xs:"block",md:'grid'},
         paddingLeft:{xs:"20px", md:"150px"},
        gridTemplateColumns: '20% 20% 20% 20% ',
        gap: 3,
        marginTop:{xs:"50px", md:"0px"}
       
      
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
      <Typography variant='h2'sx={{color:"white", paddingTop:"100px", textAlign:"center"}}>Get 25% Discount on<br/> your first <br /> purchase
     
      </Typography>
      <p style={{color:'white', textAlign:'center', }}>Just Sign Up & Register it now to become member.
</p>
<Button variant='outlined'sx={{marginLeft:"45%", backgroundColor:'White',paddingX:"40px", marginY:"20px"}}><Link to='/log' style={{textDecoration:"none", color:"#2E7D32"}}>login</Link></Button>
    </Container>

    </div>
  )
}

export default Menu