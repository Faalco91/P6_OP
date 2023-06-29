import React from 'react'
import '../HeaderCard/HeaderCard.scss'
import IMG from "../sets/IMG.png"

function HeaderCard(){
    return (
        <div className='card'>
            <div className='img-container'>
                <img id="img-top-card" src={IMG} alt="" />
                <p className='overlay-text'>Chez vous, partout et ailleurs</p>
            </div>
            
        </div>
    )
}

export default HeaderCard