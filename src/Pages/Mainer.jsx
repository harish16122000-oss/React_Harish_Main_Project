import React from 'react'
import Wheat from '../Components/Wheat'
import Rice from '../Components/Rice'

const Mainer = ({Mybutton}) => {
  return (
    <div>
     <Wheat Mybutton={Mybutton}/>
     <Rice Mybutton={Mybutton}/>   
    </div>
  )
}

export default Mainer