import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SelectDate = ({dateTime, id}) => {


    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    const handleBooking = () => {
        if(!selected){
            return toast("❌ Please select a date");
        }else{
            navigate(`/movies/${id}/${selected}`)
            scrollTo(0,0)
        }
    }


  return (
    <div id='selectDate' className='pt-32'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-Primary-1/10 border border-Primary-1/20 rounded-lg'>
        <BlurCircle top='-100px' left='-100px'/>
        <BlurCircle top='100px' right='0px'/>

        <div>
            <p className='text-lg font-semibold'>Choose Date</p>
            <div className='flex items-center gap-6 text-sm mt-5'>
                <FaChevronLeft width={28}/>
                <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                    {Object.keys(dateTime).map((date)=>(
                            <button key={date} className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${selected === date ? "bg-Primary-1 text-white" : "border border-Primary-1/70"}`} onClick={()=> setSelected(date)}>
                                <span>{new Date(date).getDate()}</span>
                                <span>{new Date(date).toLocaleDateString("en-US", {month: "short"})}</span>
                            </button>
                    ))}
                </span>
                <FaChevronRight width={28}/>
            </div>
        </div>
        <button className='bg-Primary-1 text-white px-8 py-2 mt-6 rounded hover:bg-Primary-1/90 cursor-pointer' onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  )
}

export default SelectDate
