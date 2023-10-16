import React, { useState } from 'react'
import  {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({setIsloggedIn}) => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        email : "" , password : "",
    })

    const [showPassword, setShowPassword] = useState(false);

    function chageHandler(event){
        const {name, value} = event.target; 
        setFormData((prev)=> {
            return {
             ...prev,   
             [name] : value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsloggedIn(true);
        toast.success("Logged In");
        Navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-0 mt-6 text-white'>
        <label className='w-full'><p className='text-[0.975rem] text-white mb-1'>Email Address <sup className='text-[#EF476F]'>*</sup></p></label>
        <input required type='text' name='email' value ={formData.email}  placeholder='Enter email address' onChange={chageHandler} className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'/>
    
        <label className='w-full mt-2 relative'>
            <p className='text-[0.975rem] text-white mb-1'>Password <sup className='text-[#EF476F]'>*</sup></p>
            <input required type={showPassword ? ("text"): ("password")} name='password' value ={formData.password}  placeholder='Enter Password' onChange={chageHandler} className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] w-full border-b-[1px] border-whitw-100'/>
            <span className=' absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>
        </label>

            <Link to="#"><p className=' text-[13px] mt-1 text-blue-400 max-w-max ml-auto'>Forgot Password</p></Link>
        

        <button className='bg-yellow-400 text-black mt-6 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm
