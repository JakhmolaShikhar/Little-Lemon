import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main />} ></Route>
            <Route path='' element={<Footer />}></Route>
        </Routes>
    </div>
  )
}

export default Navbar