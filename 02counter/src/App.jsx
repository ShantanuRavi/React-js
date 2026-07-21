import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //this is special type of the function useState(hook), in which counter is a variable and setCounter is a function

  let [counter,setCounter] = useState(0)
  const addValue = ()=>{
    // console.log("clicked",counter)
    counter = counter + 1
    if(counter <= 20){
      setCounter(counter)
    }
    else if(counter > 20)
    {
      counter = 20
    }
  }
  const removeValue = () => {
    counter = counter - 1
    if(counter >= 0)
    {
      setCounter(counter)
    }
    else if(counter < 0)
    {
      counter = 0
    }
  }

  return (
    <>
    <div>
      <h1>Hello</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove Value</button>
    </div>
    </>
  )
}

export default App
