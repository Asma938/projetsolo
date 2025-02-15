import React from 'react'
import { useState } from 'react';



function counter() {
    const[counter, setCounter] = useState(0);
    

   
    
    


 return (

    <div>
        <h1> {counter} </h1>
        <button onClick={() => setCounter(counter +1)}></button>
       </div>
  )
};
export default counter;

