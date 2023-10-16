import React from 'react'
import Template from '../components/Template'
import SignupImg from '../assets/Signup.png'

const Signup = ({setIsloggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      image={SignupImg}
      formtype="signup"
      setIsloggedIn={setIsloggedIn}
    />
  )
}

export default Signup
