import { useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumber] = useState(false);
  const [charAllowed, setchar] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = () => {}
  return (
    <>
      <h1 className="text-4xl text-center text-white mt-10">Password Generator</h1>
    </>
  )
}

export default App
