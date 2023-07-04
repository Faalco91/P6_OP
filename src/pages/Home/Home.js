import React from 'react'
import '../Home/Home.scss'
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import Card from '../../components/Card/Card'


function Home() {
    return(
    <div>
    <HeaderCard context="home"/>
    <Card />
    </div>
    )

}

export default Home