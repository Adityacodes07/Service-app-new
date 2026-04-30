import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import About from './componets/About'
import Home from './componets/Home'
import Booking from "./componets/Booking";
import MyBookings from "./componets/MyBookings";
import Footer from './componets/Footer'
import Developer from './componets/Developer'

const App = () => {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/developer" element={<Developer />} />
        

      </Routes>
      <Footer />
    </>
  )
}

export default App
