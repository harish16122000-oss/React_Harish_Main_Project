import React from 'react'
import Wheat from '../Components/Wheat'
import Rice from '../Components/Rice'
import Millet from '../Components/Millet'
import Juice from '../Components/Juice'
import Dairy from '../Components/Dairy'
import Fruits from '../Components/Fruits'
import Vegetable from '../Components/Vegetable'

const Mainer = ({Mybutton, datam}) => {
  return (
    
    <div style={{backgroundColor:"#f5f5ec"}}>
    <div style={{paddingTop:"30px",}}>
     <Wheat Mybutton={Mybutton} datam={datam}/>
     <Millet Mybutton={Mybutton} datam={datam}/>
     <Rice Mybutton={Mybutton} datam={datam}/> 
     <Juice Mybutton={Mybutton} datam={datam}/>
     <Dairy Mybutton={Mybutton} datam={datam}/>
     <Fruits Mybutton={Mybutton} datam={datam}/>
     <Vegetable Mybutton={Mybutton} datam={datam}/>
</div>
    </div>
  )
}

export default Mainer