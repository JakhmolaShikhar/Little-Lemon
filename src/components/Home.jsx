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
        <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h1 className='text-3xl font-bold text-yellow-400'>Little Lemon</h1>
            <h2 className='text-2xl font-semibold text-[#495E57]'>Chicago</h2>
            <p className='text-base leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum. Sed ut 
              perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
              inventore veritatis et quasi architecto beatae vitae dicta sunt 
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 border border-gray-100 rounded-lg overflow-hidden shadow-md">
            <img 
            src='/img/mario-and-adrian.jpg' 
            alt="Chefs Mario and Adrian"
            className='w-full h-[300px] md:h-[500px] object-cover'
            />
            <img 
            src='/img/Mario and Adrian b.jpg' 
            alt="Chefs Mario and Adrian" 
            className='w-full h-[300px] md:h-[500px] object-cover'
            />
          </div>
        </section>
    </div>
  )
}

export default Home