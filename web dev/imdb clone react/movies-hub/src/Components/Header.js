import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import img1 from "../images/img1.png"
const Header = () => {
  const[menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className='header'>
      <Link to="/"  style={{textDecoration:"none"}} > <img className='header-icon' src={img1} alt=''/></Link>

        <div className='menu' onClick={()=> setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      <ul className={menuOpen? "open":""}>
        <li>
            <Link to="/movies/popular"  style={{textDecoration:"none"}} ><span>Popular </span></Link>
        </li>
        <li>
            <Link to="/movies/top_rated"  style={{textDecoration:"none"}} ><span>TopRated</span></Link>
        </li>
        <li>
          <Link to="/movies/upcoming" style={{textDecoration:"none"}}> <span> Upcoming</span></Link>
        </li>
      </ul>

    
    </nav>
  )
}

export default Header
