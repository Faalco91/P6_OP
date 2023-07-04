import './App.css'
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'


function App() {
  return (
  <div className='App'>
    <Banner />          
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
    </Routes>

    <Footer />
  </div>
  )
}

export default App 