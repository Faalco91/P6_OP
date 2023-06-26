import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Apropos from './components/Apropos/Apropos'
import Menu from './components/Menu/Menu'

function App() {
  return (
  <div className='App'>
    <Menu />          
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
    </Routes>
  </div>
  )
}

export default App 