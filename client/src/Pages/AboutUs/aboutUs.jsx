import React from 'react'
import './aboutUs.css'
import Navbar from '../../Components/Navbar/navbar';


const AboutUs = () => {
  return (
    <div className='aboutus'>
        {/* <Navbar /> */}

        <div className='aboutusContent'>
            <div className='header'><h1>about us</h1></div>

            <div className='contentContainer'>
                <div className='words'>
                    <div className='head'><h3>Words from developer</h3></div>
                    <div className='content'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis. Pharetra vel turpis nunc eget lorem. In dictum non consectetur a erat nam. Auctor elit sed vulputate mi sit. Enim eu turpis egestas pretium aenean pharetra. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor. Felis donec et odio pellentesque diam volutpat commodo. Duis at consectetur lorem donec massa sapien faucibus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis. Pharetra vel turpis nunc eget lorem. In dictum non consectetur a erat nam. Auctor elit sed vulputate mi sit. Enim eu turpis egestas pretium aenean pharetra. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor. Felis donec et odio pellentesque diam volutpat commodo. Duis at consectetur lorem donec massa sapien faucibus et. Netus et malesuada fames ac turpis egestas integer eget. Vitae semper quis lectus nulla. Arcu bibendum at varius vel pharetra vel. Facilisis gravida neque convallis a cras semper. Tristique et egestas quis ipsum suspendisse ultrices. Ante in nibh mauris cursus mattis molestie a iaculis at. Ut pharetra sit amet aliquam id diam. Lorem sed risus ultricies tristique nulla. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nullam vehicula ipsum a arcu. Lorem ipsum dolor sit amet. Commodo nulla facilisi nullam vehicula. Id leo in vitae turpis massa sed.</p></div>
                </div>

                <div className='image'>
                    <img className='aboutusImage' alt='aboutusImage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs



