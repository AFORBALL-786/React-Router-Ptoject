import React from 'react'
import Template from '../components/Template'
import LoginImg from '../assets/Login.png'

const Login = ({setIsloggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      image={LoginImg}
      formtype="login"
      setIsloggedIn={setIsloggedIn}
    />
  )
}

export default Login
