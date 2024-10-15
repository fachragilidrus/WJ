import React from 'react'
import './Navbar.css'
import logo from '../../assets/wj-logo.png'

const Navbar = () => {
    const navItems = [
        'Home', 
        'Product', 
        'Contact Person', 
        'About'
    ];
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <img src={logo} alt="" className='logo' />
            <h1 className='logo-text' style={{fontFamily: 'Times New Roman', marginLeft: 5}}>WJ Delivery</h1>
        </div>
        <ul className='nav-list'>
            {navItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div className='marquee-box'>
            <marquee behavior="scroll" direction="right">Welcome To WJ Delivery Website</marquee>
        </div>
    </div>
  )
}

export default Navbar;