/* eslint-disable no-unused-vars */
import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
 
  const date = new Date();
  return (
    <>
      <footer className='bg-[#495E57] text-white py-4'>
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-6'>
          <img 
          src='/img/menu_items/logo-white.png'
          alt='little lemon footer logo'
          className='w-4 h-auto min-w-20 items-start m-2' 
          />
          <p className='text-center mb-4'>Copyright &copy; { date.getFullYear() } Little Lemon. All rights reserved.</p>
          <nav>
              <ul className=' items-center space-y-2'>
                <li>
                  <a href="/privacy" className='text-gray-300 hover:text-white transition-colors' />
                  Privacy Policy
                </li>
                <li>
                  <a href="/terms" className='text-gray-300 hover:text-white transition-colors' />
                  Terms & Conditions
                </li>
              </ul>
          </nav>
          <div className='md:col-span-1'>
            <h4 className='font-semibold mb-4'>Contact Us</h4>
            <div className='space-y-2'>
              <p className='flex items-center space-x-2'>
                <MapPin size={20} /> 123 Little Lemon St, Chicago, IL
              </p>
              <p className='flex items-center space-x-2'>
                <Phone size={20} /> (XXX) 123-4567
              </p>
              <p className='flex items-center space-x-2'>
                <Mail size={20} /> info@littlelemon.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer