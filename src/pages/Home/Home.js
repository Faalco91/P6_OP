import React from 'react'
import '../Home/Home.scss'
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import Card from '../../components/Card/Card'
import ImgForHome from '../../components/sets/ImgTopCard_1.png'


function Home() {
    const showOverlayText = true;
    return(
    <div className='main'>
    <HeaderCard image={ImgForHome} showOverlayText={showOverlayText} />
    <Card />
    </div>
    )

}

export default Home