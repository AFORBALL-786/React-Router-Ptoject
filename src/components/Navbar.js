import React from 'react'
import Logo from '../assets/Logo.svg'
import { NavLink, Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsloggedIn = props.setIsloggedIn;

  return (
    <div className='flex items-center justify-between w-11/12 max-w-[1160px] py-4 mx-auto'>
      <NavLink to='/'><img src={Logo} alt='StudNotion' loading='lazy' width={160} height={32}/></NavLink>

      <nav>
        <ul className='text-white flex gap-x-6'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>

            <li>
                <NavLink to='/'>About</NavLink>
            </li>

            <li>
                <NavLink to='/'>Contact</NavLink>
            </li>
        </ul>

      </nav>

      {/* Four Button */}
        <div className='flex items-center gap-x-4'>
            {!isLoggedIn && <Link to='/login'><button className='bg-richblack-800 text-gray-300 px-[12px] rounded-[8px] py-[8px] border border-richblack-700'>Log in</button></Link> }
            {!isLoggedIn && <Link to='/signup'><button className='bg-richblack-800 text-gray-300 px-[12px] rounded-[8px] py-[8px] border border-richblack-700'>Sign up</button></Link> }
            {isLoggedIn && <Link to='/'><button className='bg-richblack-800 text-gray-300 px-[12px] rounded-[8px] py-[8px] border border-richblack-700' onClick={()=> {
                setIsloggedIn(false);
                toast.success("Logged Out");
            }}>Log out</button></Link> }
            {isLoggedIn && <Link to='/dashboard'><button className='bg-richblack-800 text-gray-300 px-[12px] rounded-[8px] py-[8px] border border-richblack-700'>Dashboard</button></Link> }
        </div>

    </div>
  )
}

export default Navbar
