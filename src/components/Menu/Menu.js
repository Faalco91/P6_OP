import React from 'react'
import {Link} from 'react-router-dom'
import '../Menu/Menu.scss'

function Menu() {
    return (
        <nav className='menu'>
            <Link to={"/"}>Accueil</Link>
            <Link to={"/Apropos"}>À propos</Link>
        </nav>
    )
}

export default Menu