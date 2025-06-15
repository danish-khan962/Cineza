import React, { use } from 'react'
import { assets } from '../../assets/assets'
import { RxDashboard } from "react-icons/rx";
import { BsFillPlusSquareFill} from "react-icons/bs";
import { BiCollapse } from "react-icons/bi";
import { FaList } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {

    const user = {
        firstName: "Admin",
        lastName: "User",
        imageURL: assets.profile,
    }

    const adminNavLinks = [
        { name: "Dashboard", path:"/admin", icon:  RxDashboard },
        { name: "Add Shows", path:"/admin/add-shows", icon:  BsFillPlusSquareFill  },
        { name: "List Shows", path:"/admin/list-shows", icon:  FaList },
        { name: "List Bookings", path:"/admin/list-bookings", icon:  BiCollapse },
    ]

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>

        <img src={user.imageURL} alt="" className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'/>
        <p className='mt-2 text-base max-md:hidden'>{user.firstName} {user.lastName}</p>

        <div className='w-full'>
            {adminNavLinks.map((link, index)=>(
                <NavLink key={index} to={link.path} end className={({isActive}) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 text-gray-400 ${isActive && "bg-Primary-1/15 text-Primary-1 group"}`}>
                    {({isActive})=>(
                        <>
                          <link.icon className='w-5 h-5'/>
                          <p className='max-md:hidden'>{link.name}</p>
                          <span className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive && "bg-Primary-1"}`}></span>
                        </>
                    )}
                </NavLink>
            ))}
        </div>
      
    </div>
  )
}

export default AdminSidebar
