import React, { useState } from 'react';
import './navbar.css';
import { Link, NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../../assets/logo.png';
function Navebar() {

  const [click, setClick] =useState(false);
  const [color, setColor] =useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor);
  const handleClick = () => {
    setClick(!click)

  }
  return (
    <div className = {color ? "header header-bg" : "header"} >
    <div className='container'>
    <div className='nav-bar'>
    <Link to='./'>
      <img src={logo} alt='logo' width={50} />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li onClick={handleClick}>
      <NavLink className="nav-link" to="/">
        Home
       </NavLink>
      </li>
      <li onClick={handleClick}>
      <NavLink className='nav-link' to='./Menue'>Menu</NavLink>
      </li>
      <li onClick={handleClick}>
      <NavLink className='nav-link' to='./delivery'>Delivery</NavLink>
      </li>
      <li onClick={handleClick}>
      <NavLink className='nav-link' to='./Aboutus'>About</NavLink>
      </li>
        <li onClick={handleClick}>
      <NavLink className='nav-link' to='./ContactUs' >Contect</NavLink>
      </li>
      <li onClick={handleClick}>
      <Link to="/OrderForm"><button>Order Now</button></Link>
        
      </li>
    
    </ul>
    <div className='hamburger'  onClick={handleClick}>
      {click ? (
          <FaTimes size={20} style={{color:"#fff"}}></FaTimes>
          ) : (
            <FaBars size={20} style={{color:'#fff'}}></FaBars>
        )}
      </div>
</div>
    </div>
      
    </div>
  )
}

export default Navebar
