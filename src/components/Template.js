import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Frame from '../assets/Frame.png'
import {FcGoogle} from 'react-icons/fc';

const Template = ({title, des1, des2, image,formtype, setIsloggedIn}) => {
  return (
    <div className='flex  justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-[40%]'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
        <p className='text-[1.2rem] leading-[1.625rem] mt-4'>
            <span className='text-gray-400'>{des1}</span><br/>
            <span className='text-blue-400 italic'>{des2}</span>
        </p>

        {formtype === "signup" ? (<SignupForm setIsloggedIn={setIsloggedIn}/>) : (<LoginForm setIsloggedIn={setIsloggedIn}/>)}

        <div className='flex w-full items-center gap-x-2 my-4'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-gray-600 font-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-400 px-[12px] py-[8px] gap-x-2 mt-6 border border-richblack-700'>
          <FcGoogle/>
          <p>Sign Up with Goggle</p>
        </button>

      </div>

      <div>
        <div className='relative w-11/12 max-w-[500px] mx-auto'>
        <img src={Frame} alt='pattern' width={558} height={504} loading='lazy'/>
        <img src={image} alt='Student' width={558} height={504} loading='lazy'
        className='absolute -top-4 right-4'/>
        </div>
      </div>
    </div>
  )
}

export default Template