import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

//componentes
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div class="container">
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about'element={<About/>} />
              </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
