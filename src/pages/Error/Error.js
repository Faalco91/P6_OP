import React from "react";
import '../../pages/Error/Error.scss'
import ImgError from '../../components/sets/404.png'
import { Link } from 'react-router-dom'

function Error() {
    return(
        <div className="error-content">
            <img id="error-code" src={ImgError} alt=""></img>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link id='homeBack' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error