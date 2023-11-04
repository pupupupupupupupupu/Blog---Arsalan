import React from 'react'
import './navbar.css'
import appLogo from '../../Images/appLogo.svg'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='appLogoContainer'>
          <img className='appLogo' src={appLogo} alt='appLogo' />
      </div>

      <div className='navbarButtons'>
          <div className='buttons home'>Home</div>
          <div className='buttons post'>Post</div>
          <div className='buttons myPost'>My Post</div>
          <div className='buttons aboutUs'>About Us</div>
          <div className='buttons search'><BiSearch size={25}/></div>
      </div>

      <div className='signinButton'>
          <p className='signIn'>Sign In</p>
      </div>
    </div>
  )
}

export default Navbar
