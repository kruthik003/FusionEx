import React from 'react'
import './Navbar.css'
import images from '../../Image'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className = 'Navbar'>
      <Link to = '/'><img className = 'image' src = {images['logo.png']} alt = ''/></Link>
      <div className = 'nav_content'>
        <a href = '/home' style = {{textDecoration : 'none'}}>Home</a>
        <a href  = '/about' style = {{textDecoration : 'none'}}>About Us</a>
        <a href = '/events' style = {{textDecoration : 'none'}}>Events</a>
        <a href = '/partners' style = {{textDecoration : 'none'}}>Partners</a>
      </div>
    </div>
  )
}

export default Navbar
