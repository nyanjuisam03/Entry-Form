import { useState } from 'react'
import Home from './pages/home'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Details from './pages/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/details'  element={<Details/>}></Route>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
