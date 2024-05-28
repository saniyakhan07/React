import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "saniya",
    age: 21
  }
  let newArr = [1, 2, 3]
  

  return (
    <>
     <h1 className='bg-red-400 text-blue-400  p-6 mb-4'>Tailwind test</h1>
    <Card username="Saniya" btnText="click me"/>
    <Card username="Ansh" />
    </>
  )
}

export default App
