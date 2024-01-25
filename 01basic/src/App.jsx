import { useState } from 'react'
import './App.css'
import Hello from './hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello/>
    </>
  )
}

export default App
