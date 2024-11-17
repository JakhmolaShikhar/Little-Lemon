/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div>
      { /*
        <meta name='og:title' content='' />
        <meta name='og:description' content='' />
        <meta name='og:image' content='./assets/Logo.svg' /> */
      }
      <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/reservation'>Reservations</Link>
        </li>
        <li>
          <Link to='/order'>Order Online</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Main />} ></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/about' element={<Footer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar