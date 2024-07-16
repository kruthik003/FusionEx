import React from 'react'
import './Navbar.css'
import images from '../../Image'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className = 'Navbar'>
      <Link to = '/'><img className = 'image' src = {images['logo.png']} alt = ''/></Link>
      <div className = 'nav_content'>
        <a href = '/home'>Home</a>
        <a href  = '/about'>About Us</a>
        <a href = '/venue'>Venue</a>
        <a href = '/events'>Events</a>
        <a href = '/contact'>Speakers</a>
        <a href = '/partners'>Partners</a>
      </div>
      <a href = '/contact'>
      <button>Contact Us</button></a>
    </div>
  )
}

export default Navbar
