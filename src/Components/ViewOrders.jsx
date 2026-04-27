import React from 'react'

const ViewOrders = () => {
  return (
    <div>
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
    </div>
  )
}

export default ViewOrders
