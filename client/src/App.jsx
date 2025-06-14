import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import Bookings from './pages/Bookings'
import Favorite from './pages/Favorite'
import { Toaster } from "react-hot-toast"
import Footer from './components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
   <>
   <Toaster />

    {!isAdminRoute && <Navbar />}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:id/:date" element={<SeatLayout />}/>
      <Route path="/bookings" element={<Bookings />}/>
      <Route path="/favorites" element={<Favorite />}/>
    </Routes>

    {!isAdminRoute && <Footer />}
   </>
  )
}

export default App
