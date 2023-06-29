import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Apropos/Apropos'
import Apropos from './pages/Apropos/Apropos'
import Banner from './components/Banner/Banner'
import HeaderCard from './components/HeaderCard/HeaderCard'
import Footer from './components/Footer/Footer'


function App() {
  return (
  <div className='App'>
    <Banner />          
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
    </Routes>
    <HeaderCard />
    <Footer />
  </div>
  )
}

export default App 