import React from 'react'
import '../HeaderCard/HeaderCard.scss'
import IMG from "../sets/ImgTopCard_1.png"

function HeaderCard(){
    return (
            <div className='img-container'>
                <img id="img-top-card" src={IMG} alt="" />
                <p className='overlay-text'>Chez vous, partout et ailleurs</p>
            </div>    
    )
}

export default HeaderCard