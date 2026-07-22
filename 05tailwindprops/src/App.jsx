import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Ravi",
    age:"23"
  }

  let newArr = [1 ,2 ,3]

  return (
    <>
      <div>
        <h1 className='bg-green-400 p-8 inline-block rounded-xl'>Tailwind Test</h1>
      </div>
      <div className="space-y-4">
        {/* This is how we send values form one component to another component */}
        {/* <Card channel="chai aur code" someArr={newArr}/> */}
        <Card name="Shantanu"  btntxt="jaldi jao"/>
        <Card name="Pramod" name="Shantanu"/>
      </div>
    </>
  )
}

export default App
