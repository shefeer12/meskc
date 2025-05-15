import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
  var[name,setname]=useState("sana")
  var[val,setval]=useState("sana")

  const inputhandler=(e) => {
    console.log("e.target.value")
    setname(e.target.value)
  
  }
  const handlsubmit=()=>{
    setval(name)
  }
  return (
    <div>
      <h1>welcome {val}</h1><br/>
      <TextField id="outlined-basic" label="usename" onChange={inputhandler} /><br>
      </br>
<Button variant="contained" onClick={handlsubmit}>submit</Button>
    </div>
  )
}

export default Signup