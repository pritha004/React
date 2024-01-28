import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-pink-400 p-4 text mb-4'>Tailwind </h1>
      <Card username='Jennie' bio="Hey, nice to meet you!!"/>
      <Card username="Alex"/>
    </>
  )
}

export default App
