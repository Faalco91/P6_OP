import React from 'react'
import '../Card/Card.scss'
import IMG from "../sets/IMG.png"

function Card() {
    return (
        <div className='card'>
            <div className='img-container'>
                <img id="img-top-card" src={IMG} alt="" />
                <p className='overlay-text'>Chez vous, partout et ailleurs</p>
            </div>
            
        </div>
    )
}

export default Card