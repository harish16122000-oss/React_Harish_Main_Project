import React from 'react'
import Wheat from '../Components/Wheat'
import Rice from '../Components/Rice'
import Millet from '../Components/Millet'
import Juice from '../Components/Juice'
import Dairy from '../Components/Dairy'
import Fruits from '../Components/Fruits'
import Vegetable from '../Components/Vegetable'

const Mainer = ({Mybutton}) => {
  return (
    <div style={{backgroundColor:"#f5f5ec"}}>
     <Wheat Mybutton={Mybutton}/>
     <Millet Mybutton={Mybutton}/>
     <Rice Mybutton={Mybutton}/> 
     <Juice Mybutton={Mybutton}/>
     <Dairy Mybutton={Mybutton}/>
     <Fruits Mybutton={Mybutton}/>
     <Vegetable Mybutton={Mybutton}/>

    </div>
  )
}

export default Mainer