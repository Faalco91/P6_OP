import React from 'react'
import '../Home/Home.scss'
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import Card from '../../components/Card/Card'
//L'image qu'on attribue à headercard pour la page Home
import ImgForHome from '../../components/sets/ImgTopCard_1.png'


function Home() {
    //Permet de controler l'affichage d'un texte superposé, ici il sagit de celui sur headerCard
    const showOverlayText = true;
    return(
    <div className='main'>
    <HeaderCard image={ImgForHome} showOverlayText={showOverlayText} />
    <Card />
    </div>
    )

}

export default Home