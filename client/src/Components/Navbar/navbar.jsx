import React from 'react'
import './navbar.css'
import appLogo from '../../Images/appLogo.svg'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <div className='appLogoContainer'>
            <img className='appLogo' src={appLogo} alt='appLogo' />
        </div>
      </Link>

      <div className='navbarButtons'>
          <div className='buttons home'><Link to="/">Home</Link></div>
          <div className='buttons post'><Link to="/post">Post</Link></div>
          <div className='buttons myPost'><Link to="/myblogs">My Blogs</Link></div>
          <div className='buttons aboutus'><Link to="/aboutus">About Us</Link></div>
          <div className='buttons search'><BiSearch size={25}/></div>
      </div>
      
      <Link to="/signin">
          <div className='signinButton'>
              <p className='signIn'>Sign In</p>
          </div>
      </Link>
    </div>
  )
}

export default Navbar
