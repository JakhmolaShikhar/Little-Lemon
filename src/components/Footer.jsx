/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
    
  const date = new Date();
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto px-4'>
        <p className='text-center mb-4'>Copyright &copy; { date.getFullYear() } Little Lemon. All rights reserved.</p>
        <nav>
            <ul className='flex justify-center space-x-6'>
                <li>
                  <a href="/privacy" className='text-gray-300 hover:text-white transition-colors' />
                  Privacy Policy
                </li>
                <li>
                  <a href="/terms" className='text-gray-300 hover:text-white transition-colors' />
                  Temrs & Conditions
                </li>
            </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer