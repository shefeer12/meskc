import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Name from './components/Name'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>welcome to login page</h1>
<Navbar/>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/name' element={<Name/>}/>
  <Route path='/counter' element={<Counter/>}/>
</Routes>
    </>
  )
}

export default App
