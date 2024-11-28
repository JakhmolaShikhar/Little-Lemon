import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import BookingForm from './components/BookingForm'
import Home from './components/Home'
import Order from './components/Order'
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
            <Route path='/order' element={<Order />} />
            <Route path='/reservation' element={<BookingForm />} />
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
