/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <meta name='og:title' content='' />
      <meta name='og:description' content='' />
      <meta name='og:image' content='./assets/Logo.svg' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
        <Routes>
            <Route path='/' element={<Main />} ></Route>
            <Route path='' element={<Footer />}></Route>
        </Routes>
    </div>
  )
}

export default Navbar