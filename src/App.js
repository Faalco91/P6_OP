import './App.css'
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Logements from './pages/Logements/Logements'
import Error from './pages/Error/Error'


function App() {
  return (
  <div className='App'>
    <Banner />          
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path='/Logements/:id' element={<Logements />} />
        <Route path='*' element={<Error/>} />
    </Routes>

    <Footer />
  </div>
  )
}

export default App 