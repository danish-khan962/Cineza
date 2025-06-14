import React from 'react'
import { assets } from '../assets/assets'
import { ImCalendar } from "react-icons/im";
import { LuClock } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>

      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>

      <h1 className='text-5xl md:tex-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br /> of the Galaxy</h1>

      <div className='flex items-center gap-4 text-gray-300'>
      <span>Action | Adventure | Sci-Fi</span>
      <div className='flex items-center gap-1'>
        <ImCalendar className='h-4.5 w-4.5'/> 2018
      </div>
      <div className='flex items-center gap-1'>
        <LuClock className='h-4.5 w-4.5'/> 2h 8m
      </div>
      </div>

      <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>

      <button className='flex items-center gap-2 px-5 py-3 bg-Primary-1 hover:bg-Primary-2 transition-all duration-300 ease-in-out rounded-full font-medium cursor-pointer' onClick={()=> navigate("/movies")}>
        Explore Movies <FaArrowRight className='w-5 h-5'/>
      </button>
    </div>
  )
}

export default Hero
