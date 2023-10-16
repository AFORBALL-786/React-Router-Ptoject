import React, { useState } from 'react'
import  {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsloggedIn}) => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  function changeHandler(event){
        const {name, value} = event.target; 
        setFormData((prev)=> {
            return {
             ...prev,   
             [name] : value
            }
        })
  }
  
  const[password,setPassword] = useState(false);
  const[confirmPassword,setConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student")

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password do not match");
      return;
    }
    setIsloggedIn(true);
    toast.success("Account Created");

    console.log("Finally Printing all data...", formData);
    Navigate("/dashboard")

  }

  return (
    <div className='w-full flex flex-col text-white'>
      {/* student-Instructor */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
          className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=> setAccountType("student")}>Student</button>
        <button
          className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=> setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-0 -mt-2 text-white'>
        {/* first and last name */}
        <div className='flex w-full justify-between'>
          <label >
          <p className='text-[0.975rem] text-white mb-1 mt-2'>First Name <sup className='text-[#EF476F]'>*</sup></p>
          <input
            required
            type='text'
            name='firstname'
            onChange={changeHandler}
            placeholder='Enter First Name'
            value={formData.firstname}
            className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'
          />
          </label>
          <label>
          <p className='text-[0.975rem] text-white mb-1 mt-2'>Last Name <sup className='text-[#EF476F]'>*</sup></p>
          <input
            required
            type='text'
            name='lastname'
            onChange={changeHandler}
            placeholder='Enter Last Name'
            value={formData.lastname}
            className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'
          />
          </label>
        </div>
        {/* email Add */}
        <label>
          <p className='text-[0.975rem] text-white mb-1 mt-3'>Email Address <sup className='text-[#EF476F]'>*</sup></p>
          <input
            required
            type='email'
            name='email'
            value={formData.email}
            placeholder='Enter Email Address'
            onChange={changeHandler}
            className='bg-richblack-800 w-full rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'
          />
        </label>
        {/* create Password and Confirm Password */}
        <div className='flex w-full justify-between'>
          <label className='relative'>
            <p className='text-[0.975rem] text-white mb-1 mt-2'>Create Password <sup className='text-[#EF476F]'>*</sup></p>
            <input
              required
              type={password?("text"):("password")}
              name='password'
              placeholder='Enter Password'
              value={formData.password}
              onChange={changeHandler}
              className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'
            />
            <span className='absolute right-3 top-[48px] cursor-pointer' onClick={() => setPassword((prev) => !prev)}>
                {password ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>
          </label>

          <label className='relative'>
            <p className='text-[0.975rem] text-white mb-1 mt-2'>Confirm Password <sup className='text-[#EF476F]'>*</sup></p>
            <input
              required
              type={confirmPassword?("text"):("password")}
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={changeHandler}
              className='bg-richblack-800 rounded -[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-white-100'
            />
            <span className='absolute right-3 top-[48px] cursor-pointer' onClick={() => setConfirmPassword((prev) => !prev)}>
                {confirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>
          </label>
        </div>

        <button className='bg-yellow-400 text-black mt-6 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
            Create Acccount
        </button>

      </form>

    </div>
  )
}

export default SignupForm
