import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Menu />
      </main>
      <Footer />
    </>
  )
}

export default App
