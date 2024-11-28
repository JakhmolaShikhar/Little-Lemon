/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useRef} from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import BookingForm from './BookingForm'

const Navbar = () => {
  const footerRef = useRef(null);

  const scrollDown = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className='bg-white shadow-md'>
      { /*
        <meta name='og:title' content='' />
        <meta name='og:description' content='' />
        <meta name='og:image' content='./assets/Logo.svg' /> */
      }
      <div className='container mx-auto px-4 py-2 flex justify-between items-end text-right'>
        <ul className='flex space-x-4'>
          <li>
            <Link 
            to='/' 
            className='text-gray-700 hover:bg-gray-100 rounded-full px-2 py-2 hover:text-yellow-400 transition duration-200'>
              Home
            </Link>
          </li>
          <li>
            <Link 
            to='/reservation' 
            className='text-gray-700 hover:bg-gray-100 rounded-full px-2 py-2 hover:text-yellow-400 transition duration-200'>
              Reservations
            </Link>
          </li>
          <li>
            <Link 
            to='/order' 
            className='text-gray-700 hover:bg-gray-100 rounded-full px-2 py-2 hover:text-yellow-400 transition duration-200'>
              Order Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar