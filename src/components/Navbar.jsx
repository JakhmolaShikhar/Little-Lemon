/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Header from './Header'

const Navbar = () => {
  return (
    <div>
      { /*
        <meta name='og:title' content='' />
        <meta name='og:description' content='' />
        <meta name='og:image' content='./assets/Logo.svg' /> */
      }
      
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} ></Route>
            <Route path='/menu' element={<Header />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar