import React from 'react'
import { useState } from "react";

function Counter() {
    const [count,setCount]=useState(0);
  const arttir=()=> {
    if (count<=9) {
        setCount(count +1)
    }
    
  }
  
  const azalt = ()=>{
    if (count >0) {
        setCount(count-1)
    }
    
  }
  return (
    <div>
        <h3>Count:{count}</h3>
        <br/>
      <button type="button" className="btn btn-success" onClick={arttir}>Arttır</button>
      <button type="button" className="btn btn-danger" onClick={azalt}>Azalt</button>
    </div>
  )
}

export default Counter