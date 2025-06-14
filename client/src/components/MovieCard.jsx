import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoStar } from "react-icons/go";
import timeFormat from '../libraries/timeFormat';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:translate-y-0.5 transition duration-300 w-[270px] '>
      <img src={movie.backdrop_path} alt="" className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'  onClick={()=> {navigate(`/movies/${movie._id}`); scroll(0,0)}}/>

      <p className='font-semibold mt-2 truncate'>{movie.title}</p>

      <p className='text-sm text-gray-400 mt-2'>{new Date(movie.release_date).getFullYear()} . {movie.genres.slice(0,2).map(genre => genre.name).join(" | ")} . {timeFormat(movie.runtime)}</p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button className='px-4 py-2 text-xs bg-Primary-1 hover:bg-Primary-2 transition-all duration-300 ease-in-out font-medium cursor-pointer rounded-md' onClick={()=> {navigate(`/movies/${movie._id}`); scroll(0,0)}}> Buy Tickets </button>
        <p>
            <GoStar className='w-4 h-4 text-Primary-1 fill-Primary-1'/> {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
