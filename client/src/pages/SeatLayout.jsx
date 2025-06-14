import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { FaArrowRight, FaClock, FaPenToSquare } from 'react-icons/fa6';
import ISOtimeFormat from '../libraries/ISOtimeFormat';
import BlurCircle from '../components/BlurCircle';
import {toast} from "react-hot-toast"

const SeatLayout = () => {

  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]]

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const fetchShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("❌ Please select the time first")
    } else if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast("⚠️ You can only select 5 seats")
    }

    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(seat => seat !== seatId) : [...prev, seatId])
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;

          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-Primary-1/60 cursor-pointer ${selectedSeats.includes(seatId) ? "bg-Primary-1 text-white" : ""
                }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );


  useEffect(() => {
    fetchShow();
  }, [])

  return show ? (
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-32 md:pt-52'>
      {/* Available timings */}
      <div className='w-60 bg-Primary-1/10 border border-Primary-1/20 rounded-lg py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timings</p>
        <div>
          {show.dateTime[date].map((item) => (
            <div
              key={item.time} onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedTime?.time === item.time ? "bg-Primary-1 text-white" : "hover:bg-Primary-1/20"
                }`}
            >
              <FaClock className="w-4 h-4" />
              <p className="text-sm">{ISOtimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Seat Layout */}
      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0px" right="0px" />
        <h1 className='text-2xl font-semibold mb-4'>Select your seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className='text-sm text-gray-400 mb-6'>SCREEN SIDE</p>

        <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>

          <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
            {groupRows[0].map(row => renderSeats(row))}
          </div>

          <div className='grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, index) => (
              <div key={index}>
                {group.map(row => renderSeats(row))}
              </div>
            ))}
          </div>
        </div>

            <button className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-Primary-1 hover:bg-Primary-2 transition rounded-full font-medium cursor-pointer active:scale-95' onClick={()=> navigate("/bookings")}>
              Proceed to Checkout
              <FaArrowRight strokeWidth={3} className='w-4 h-4'/>
            </button>

      </div>

    </div>
  ) : (
    <Loading />
  )
}

export default SeatLayout
