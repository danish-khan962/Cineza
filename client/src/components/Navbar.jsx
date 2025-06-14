import React, { useState } from 'react'
import { Link ,  NavLink, useNavigate} from "react-router-dom"
import { assets } from '../assets/assets'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { LuTicket } from "react-icons/lu";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  //authentication using clerk
  const {user} = useUser();
  const {openSignIn} = useClerk();

  return (
   <nav className='fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 lg:px-36'>
    <Link to="/" className='max-md:flex-1'>
    <img src={assets.logo} alt="" className='w-36 h-auto'/>
    </Link>

    <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

      <MdOutlineClose className='md:hidden absolute top-6 right-6 cursor-pointer w-6 h-6' onClick={()=>{setIsOpen(!isOpen)}}/>

      <NavLink to={"/"} onClick={()=> {scrollTo(0,0); setIsOpen(false)}}>Home</NavLink>
      <NavLink to={"/movies"} onClick={()=> {scrollTo(0,0); setIsOpen(false)}}>Movie</NavLink>
      <NavLink to={"/"} onClick={()=> {scrollTo(0,0); setIsOpen(false)}}>Theatre</NavLink>
      <NavLink to={"/"} onClick={()=> {scrollTo(0,0); setIsOpen(false)}}>Releases</NavLink>
      <NavLink to={"/favorites"} onClick={()=> {scrollTo(0,0); setIsOpen(false)}}>Favorites</NavLink>
    </div>

    <div className='flex justify-center items-center gap-8'>
      <IoIosSearch className='max-md:hidden w-6 h-6 cursor-pointer'/>
      
      {
        !user ? (<button className='px-4 py-1 sm:px-7 sm:py-2 bg-Primary-1 hover:bg-Primary-2 transition-all duration-200 ease-in rounded-full cursor-pointer font-medium' onClick={openSignIn}>Login</button>) 
        
        : 

        (<UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="My Bookings" labelIcon={<LuTicket width={15}/>} onClick={()=> navigate("/bookings")}/>
          </UserButton.MenuItems>
        </UserButton>)
      }
    </div>

    <GiHamburgerMenu className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}/>
   </nav>
  )
}

export default Navbar
