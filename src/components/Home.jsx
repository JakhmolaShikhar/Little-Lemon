/* eslint-disable no-unused-vars */
import React from 'react'
import Menu from './Menu'

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
        <div className='text-center mb-12 divide-y-8 divide-double divide-green-800'>
            <h1 className='text-4xl font-bold text-green-800 mb-4'>Welcome to Little Lemon</h1>
            <p className='text-xl font-semibold '>A restaurant located in Chicago</p>
        </div>
        <Menu />
        <div>

        </div>
    </div>
  )
}

export default Home