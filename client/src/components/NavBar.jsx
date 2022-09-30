import React from 'react'
import './styles/NavBar.css'
import logo2 from './styles/logo2.png'

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navLogo">
        <a href="/">
          <img src={logo2} alt="" />
        </a>
      </div>
      <nav>
        <ul className="navLinks">
          <li>
            <a href="/guardians">Guardians</a>
          </li>
          <li>
            <a href="/kids">Kids</a>
          </li>
        </ul>
      </nav>
      <a className="logOutBtn" href="">
        <button className="navButton">Log Out</button>
      </a>
      {/* <div className="navLink">Guardians</div>
      <div className="navLink">Kids</div>
      <div className="navLink">Welcome, User!</div> */}
    </div>
  )
}

export default NavBar
