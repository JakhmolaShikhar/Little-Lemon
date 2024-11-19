/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import BookingForm from './BookingForm'

const Navbar = () => {
  return (
    <div>
      { /*
        <meta name='og:title' content='' />
        <meta name='og:description' content='' />
        <meta name='og:image' content='./assets/Logo.svg' /> */
      }
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
    </div>
  )
}

export default Navbar