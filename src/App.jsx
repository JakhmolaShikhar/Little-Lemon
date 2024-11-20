import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import BookingForm from './components/BookingForm'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Navbar />
            <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/about' element={<Footer />} />
            <Route path='/order' element={<Menu />} />
            <Route path='/reservation' element={<BookingForm />} />
            </Routes>
          <Menu />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
