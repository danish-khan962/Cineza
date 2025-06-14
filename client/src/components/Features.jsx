import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';
import {dummyShowsData} from "../assets/assets"

const Features = () => {

    const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>

      <div className='relative flex items-center justify-between pt-20 pb-10'>

        <BlurCircle top='0' right='-80px'/>

        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer' onClick={()=> navigate("/movies")}>View All <FaArrowRight className='w-4.5 h-4.5 group-hover:translate-x-0.5 transition'/></button>
      </div>

      <div className='flex flex-wrap justify-center gap-8 mt-8'>
        {dummyShowsData.slice(0,4).map((show)=>(
          <MovieCard key={show._id} movie={show}/>
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button className='px-10 py-3 text-sm bg-Primary-1 hover:bg-Primary-2 transition-all duration-300ms ease-in-out cursor-pointer font-medium rounded-md' onClick={() => {navigate("/movies"); scrollTo(0,0)}}>Show more</button>
      </div>
    </div>
  )
}

export default Features
