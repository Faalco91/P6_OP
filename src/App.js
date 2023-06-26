import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Apropos from './components/Apropos/Apropos'
import Banner from './components/Banner/Banner'

function App() {
  return (
  <div className='App'>
    <Banner />          
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
    </Routes>
  </div>
  )
}

export default App 