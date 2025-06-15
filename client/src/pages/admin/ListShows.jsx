import React, { useEffect, useState } from 'react'
import {dummyShowsData} from "../../assets/assets"
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import dateFormat from '../../libraries/dateFormat';

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY 

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try{
      setShows([{
        movie: dummyShowsData[0],
        showDateTime: "2025-06-30T02:30:00.000Z",
        showPrice: 59,
        occupiedSeats: {
          A1: "user1",
          B1: "user2",
          C1: "user3",
        }
      }])
      setLoading(false);
    }catch(error){

    }
  }

  useEffect (()=> {
    getAllShows();
  }, [])

  return !loading ?  (
    <>
      <Title text1={"List"} text2={"Shows"}/>

      <div className='max-4-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className='bg-Primary-1/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Total Bookings</th>
              <th className='p-2 font-medium'>Earnings</th>
            </tr>
          </thead>

          <tbody className='text-sm font-light'>
            {shows.map((show, index)=> (
              <tr key={index} className='border-b border-Primary-1/10 bg-Primary-1/5 even:bg-Primary-1/10'>
                <td className='p-2 min-w-44 pl-5'>{show.movie.title}</td>
                <td className='p-2 min-w-44'>{dateFormat(show.showDateTime)}</td>
                <td className='p-2 min-w-44'>{Object.keys(show.occupiedSeats).length}</td>
                <td className='p-2 min-w-44'>{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default ListShows
