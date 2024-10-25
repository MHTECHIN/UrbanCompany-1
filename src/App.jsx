import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Slider from './pages/Slider'
import Noteworthy from './pages/Noteworthy'
import BookedService from './pages/BookedServices'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Slider />
    <Noteworthy />
    <BookedService />
    </>
  )
}

export default App