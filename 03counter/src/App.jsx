import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter=5;

  const increase=()=>{
    if(counter<20)
    {
      //setCounter(counter+1)
      // setCounter(counter+1) Wont update as useState sends updates in batches, and when it finds same operation done multiple times, it does it once; if ever needed this scenario use below syntax

      setCounter((prevCounter)=>prevCounter+1) 
      setCounter((prevCounter)=>prevCounter+1) //when used this method, callback waits for previous update and then updates the next setCounter statement
      
    }
  }

  const decrease=()=>{
    if(counter>0)
    {
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={increase}>Increase</button>
    &nbsp;
    <button onClick={decrease}>Decrease</button>
    <p>Footer: {counter}</p>

    </>
  )
}

export default App
