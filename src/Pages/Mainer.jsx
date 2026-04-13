import React from 'react'
import Wheat from '../Components/Wheat'
import Rice from '../Components/Rice'
import Millet from '../Components/Millet'

const Mainer = ({Mybutton}) => {
  return (
    <div style={{backgroundColor:"#f5f5ec"}}>
     <Wheat Mybutton={Mybutton}/>
     <Millet Mybutton={Mybutton}/>
     <Rice Mybutton={Mybutton}/>   
    </div>
  )
}

export default Mainer