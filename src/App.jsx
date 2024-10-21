import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sungless from './Compontent/Sungles/Sungless'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sungless></Sungless>
    </>
  )
}

export default App
