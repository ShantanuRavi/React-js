import { useState , useCallback, useEffect, useRef} from 'react'
// import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumber] = useState(false);
  const [charAllowed, setchar] = useState(false);
  const [password, setPassword] = useState("")

  //useRef is a React Hook that lets you reference a value that’s not needed for rendering

  const passwordRef = useRef(null)


  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //const cachedFn = useCallback(fn, dependencies)

    const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
    {
        str = str + "0123456789"
    }
    if(charAllowed)
    {
        str = str + "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`"
    }
    for(let i = 1; i <= length ; i++)
    {
        let char = Math.floor(Math.random() * str.length + 1)
        pass = pass + str.charAt(char)
    }
    setPassword(pass)
  } ,[length, numberAllowed, charAllowed, setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed])
  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 flex flex-col items-center justify-center">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
                <input 
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3 bg-white"
                placeholder="password"
                readOnly
                ref={passwordRef}
                />
                <button onClick={copyPassToClip} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 active:scale-95 transition-transform duration-100">Copy</button>
            </div>
            <div className="flex text-sm gap-x-4 py-2">
                <div className="flex items-center gap-x-2">
                    <input 
                    type="range"
                    min={6}
                    max={50}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{
                        setLength(e.target.value)
                    }}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input 
                    type="checkbox"
                    defaultChecked = {numberAllowed}
                    id = "numberInput"
                    className="cursor-pointer"
                    onChange={(e)=>{
                        setNumber((prev)=>!prev)
                    }}
                    />
                    <label htmlFor='numberInput'>Number</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input 
                    type="checkbox"
                    defaultChecked = {charAllowed}
                    id = "charInput"
                    className="cursor-pointer"
                    onChange={(e)=>{
                        setchar((prev)=>!prev)
                    }}
                    />
                    <label htmlFor='charInput'>Characters</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
