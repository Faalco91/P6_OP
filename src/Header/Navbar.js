import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home/Home'
import Apropos from './Apropos/Apropos'
function Navbar(){
    return (
    <div className='Nav-bar'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
        </Routes>
    </div>
    )
}

export default Navbar