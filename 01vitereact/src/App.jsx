
import Hello from "./Hello"

function App() {
  const author = "Ravi"


  return (
    <>
      <Hello/>
      <h1>Namaste Duniya || From vite react</h1>
      <p>Test Paragraph</p>
      {/* This {author} is the evaluated expression*/}
      <p>Author: {author}</p>
    </>
  )
}

export default App
