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
    <div className='bg-white shadow-md'>
      { /*
        <meta name='og:title' content='' />
        <meta name='og:description' content='' />
        <meta name='og:image' content='./assets/Logo.svg' /> */
      }
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <ul className='flex space-x-4'>
          <li>
            <Link 
            to='/' 
            className='text-gray-700 hover:text-yellow-300 transition duration-200'>
              Home
            </Link>
          </li>
          <li>
            <Link 
            to='/about' 
            className='text-gray-700 hover:text-yellow-300 transition duration-200'>
              About
            </Link>
          </li>
          <li>
            <Link 
            to='/reservation' 
            className='text-gray-700 hover:text-yellow-300 transition duration-200'>
              Reservations
            </Link>
          </li>
          <li>
            <Link 
            to='/order' 
            className='text-gray-700 hover:text-yellow-300 transition duration-200'>
              Order Online
            </Link>
          </li>
          <li>
            <Link 
            to='/login' 
            className='text-gray-700 hover:text-yellow-300 transition duration-200'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar