import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Spotify from './pages/spotify'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" exact element={<Spotify/>}  ></Route>
      <Route path="/Login" exact element={<Login/>}  ></Route>   

    </Routes>
    </>
  )
}

export default App
