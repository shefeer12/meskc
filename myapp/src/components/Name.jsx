import { Button } from '@mui/material'
import React, { useState } from 'react'

export const
 Name = () => {
    const [x, setx] = useState()
    const inpt1 =()=>{
setx("React")
}
const inpt2 =()=>{
    setx("Angular")
}
const inpt3 =()=>{
    setx("Vue")
}
  return (
    <div>
        <h1>select {x} </h1> <br />
        <Button variant="contained" color="success" onClick={inpt1} >REACT</Button>&nbsp;
        <Button variant="contained" color="warning" onClick={inpt2} >ANGULAR</Button>&nbsp;
        <Button variant="contained" color="success" onClick={inpt3} >VUE</Button>&nbsp;
        </div>
  )
}

export default Name