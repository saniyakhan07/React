import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  //let counter =15

  const addValue = () => {
 //  counter = counter+1
 if(counter<20) {
  setCounter(counter + 1) //increase by 1 i.e 16
  // if we write setCounter(counter + 1)
  // one time then it will update value by 1 only
  // but if we pass call function then it will increase value by no. of call back function

  setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
setCounter(prevCounter => prevCounter + 1)
//this will update counter by 4
 }

   //console.log("Clicked", counter);
  }

  const removeValue = () => {
    if(counter>0) {
      setCounter(counter-1)}
  }

  return (
    <>
     <h1>React with Saniya</h1>
     <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick = {removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
