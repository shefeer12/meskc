import React, { useState } from 'react'

const Counter = () => {
    const [x, setCount] = useState(0);
    const increment= ()=>{
        setCount(x=1);
    };
    const decrement= ()=>{
        setCount(x-1);
    };
  return (
    <div><h1>select {x}</h1>
    <Button variant="contained" color="success"onClick={increment}> + </Button>&nbsp;
    <Button variant="contained" color="success"onClick={decrement}> - </Button>&nbsp;
    </div>
  )
}


export default Counter