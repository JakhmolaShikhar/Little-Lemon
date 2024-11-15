import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <h1>Hello World</h1>
      <Header />
      <main>
        <Navbar />
        <Main />
      </main>
      <Footer />
    </>
  )
}

export default App
