import React from 'react'
import './login.css'
import leftMail from '../../Images/leftMail.svg'
import leftRobo from '../../Images/leftRobo.svg'
import rightSearch from '../../Images/rightSearch.svg'
import bottomGuysKey from '../../Images/bottomGuys-key.svg'
import bottomGuysLeft from '../../Images/bottomGuys-left.svg'
import bottomGuysMid from '../../Images/bottomGuys-mid.svg'
import bottomGuysRight from '../../Images/bottomGuys-right.svg'

function Login() {
  return (
    <div className='loginBg'>
      {/* <p>Login</p> */}
      <img src={leftMail} alt='leftMail' />
      <img src={leftRobo} alt='leftRobo' />
      <img src={rightSearch} alt='rightSearch' />
      <img src={bottomGuysKey} alt='bottomGuys-key' />
      <img src={bottomGuysLeft} alt='bottomGuys-left' />
      <img src={bottomGuysMid} alt='bottomGuys-mid' />
      <img src={bottomGuysRight} alt='bottomGuys-top ' />
    </div>
  )
}

export default Login;
