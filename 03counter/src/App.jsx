import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter=5;

  const increase=()=>{
    if(counter<20)
    setCounter(counter+1)
  }

  const decrease=()=>{
    if(counter>0)
    setCounter(counter-1)
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
