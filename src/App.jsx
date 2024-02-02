import { useState } from 'react'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mainContainer">
      <Login />
    </div>
  )
}

export default App
