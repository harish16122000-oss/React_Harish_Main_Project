import React, { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { placeOrder } from "../Counterslice";

const Details = ({ datam = {} }) => {
  const { id } = useParams();
  const orders= useDispatch();

  const allItems = Object.values(datam).flat();

  const deta = allItems.find(
    (item) => String(item.id) === String(id)
  );

  if (!deta) {
    return <Typography>Product not found</Typography>;
  }
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    pincode: ""
  });
  
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value});
  };

  const handleOrder = () => {
    console.log("Product: Rice Batter");
    console.log("Address:", address);
    

  };
  const navigate= useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px",
        flexWrap: "wrap"
      }}
    >
      
      {/* ✅ Product Section */}
      <Card    sx={{marginTop:{xs:"40px", md:'20px', lg:"0px"}, maxWidth: 250 ,backgroundColor:'#f5e8cd', marginBottom:{xs:"0px", md:'30px'}, marginTop:{xs:"1%", md:"1%"},  }}>
         
       <CardMedia
        sx={{ height:{xs: 250, md: 250 }, width:{xs: 250, md: 250}}}
        image={deta.img}
        title={deta.Name}

      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: "#2E7D32", fontWeight:700}}>
        {deta.Name}
        </Typography>
         
    <Typography sx={{marginTop:'20px', marginLeft:'1px'}}> <span style={{textDecoration:"line-through", color:'#584f4f'}}> {deta.discount}.00</span> <span style={{marginLeft:'5px',fontSize:'19px', fontWeight: 800,}}>{deta.price}.00</span><span style={{border:'1px solid ', padding:'2px', marginLeft:'10px', color:'#584f4f', fontSize:'13px'}}>{deta.offer}</span></Typography> 
     
     </CardContent> </Card>

      {/* ✅ Address Section */}
      <Box
        sx={{
          width: 350,
          padding: "20px",
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "#fff"
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Delivery Address
        </Typography>

        <TextField label="Full Name" name="name" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Mobile Number" name="mobile" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Street Address" name="street" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="City" name="city" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="State" name="state" fullWidth margin="normal" onChange={handleChange} />
        <TextField label="Pincode" name="pincode" fullWidth margin="normal" onChange={handleChange} />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: "green" }}
          onClick={()=> {  navigate("/order"); orders(placeOrder(deta))}} >
      
         Confirm order
        
        </Button>
      </Box>

    </Box>
  );
};

 

 
export default Details