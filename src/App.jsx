import React, { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
const App = () => {

  const [loading, setLoading] =  useState(false)
  const [isOpen, setisOpen] = useState(false)


  return (
    <>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)}/>}  

        <div className={`min-h-screen transition-opacity duration-700 ${loading ? 'opacity-100': 'opacity-0'} bg-black text-gray-100`}
        >

          <Navbar menuOpen={isOpen} setmenuOpen={setisOpen}/>

          
          <MobileMenu menuOpen={isOpen} setmenuOpen={setisOpen}/>

          <Home />
          <About />
          <Projects />
          <Contact />

        </div>  
    </>
  )
}

export default App
