import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement = {
//   type:"a",
//   props:{
//     href:"https://google.com",
//     target:"_blank"
//   },
//   children:"Click me to visit google"
// }


// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )


// function MyApp (){
//   return (
//     <h4>Injected last</h4>
//   )
// }


//This is the predefined format of the createElement in React 

//here React.createElement is by default injected ny Bable i.e transpiler
const author = "Shan"
const reactElement = React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "This is google link",
  author
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>
  // anotherElement
  // <MyApp />
  // MyApp()
  reactElement

)
