import React, { useEffect, useState } from 'react'
import {dummyBookingData} from "../../assets/assets"
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import dateFormat from '../../libraries/dateFormat';

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY 

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllBookings = async () => {
    setBookings(dummyBookingData);
    setLoading(false);
  }

  useEffect(()=>{
    fetchAllBookings();
    setLoading(false);
  }, [])

  return !loading ?  (
    <>
      <Title text1={"List"} text2={"Bookings"}/>

      <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hiddden text-nowrap'>
          <thead>
            <tr className='bg-Primary-1/20 text-left text-white'>
            <th className='p-2 font-medium pl-5'>User Name</th>
            <th className='p-2 font-medium '>Movie Name</th>
            <th className='p-2 font-medium '>Show Time</th>
            <th className='p-2 font-medium '>Seats</th>
            <th className='p-2 font-medium '>Amount</th>
            </tr>
          </thead>


          <tbody className='text-sm font-light'>
            {bookings.map((item, index)=> (
              <tr key={index} className='border-b border-Primary-1/20 bg-Primary-1/5 even:bg-Primary-1/10'>
                <td className='p-2 min-w-44 pl-5'>{item.user.name}</td>
                <td className='p-2'>{item.show.movie.title}</td>
                <td className='p-2'>{dateFormat(item.show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(" , ")}</td>
                <td className='p-2'>{currency} {item.amount}</td>
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

export default ListBookings
