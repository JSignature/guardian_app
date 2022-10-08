import React from 'react'
// import './styles/NavBar.css'
import logo2 from './styles/logo2.png'
import styled from 'styled-components'
import { Btn } from './styles/ButtonStyle'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const NavBar = () => {
  const navigate = useNavigate()
  const userName = localStorage.getItem('user_first_name')

  const handleLogout = e => {
    e.preventDefault()
    toast.success(`${userName} is out!!! Come back soon!`)
    localStorage.clear()
    navigate('/')
  }

  return (
    <NavWrapper>
      <div className="navBar">
        <div className="navLogo">
          <a href="/dashboard">
            <img src={logo2} alt="" />
          </a>
        </div>
        <div>
          <p>{`HI ${userName}`}</p>
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
          <Btn onClick={handleLogout} className="navButton">
            Log Out
          </Btn>
        </a>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  li,
  a,
  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #f7ebe8;
  }

  .navBar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px, 10%;
    width: 1475px;
    height: 60px;
    background-color: #56a3a6;
  }
  .navLogo {
    margin-right: auto;
  }
  .navLogo img {
    width: 50px;

    border-radius: 50%;
    margin-left: 20px;
  }
  .navLogo div:hover {
    cursor: pointer;
  }
  .navLinks {
    list-style: none;
  }
  .navLinks li {
    display: inline-block;
    padding: 0px 20px;
  }
  .navLinks li a {
    transition: all 0.03s ease 0s;
    text-decoration: none;
  }
  .logOutBtn {
    text-decoration: none;
    list-style: none;
    margin-left: 20px;
    margin-right: 20px;
  }
  .logOutBtn h4:hover {
    color: #ffa987;
  }
  .navLinks li a:hover {
    color: #4f6d7a;
  }
  .navButton {
    color: #56a3a6;
    font-size: 10px;
  }
  p {
    color: #fff;
    font-size: larger;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-right: 292px;
    text-shadow: 2px 2px 2px #ffa987;
  }
`

export default NavBar
