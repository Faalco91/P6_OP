import HeaderCard from '../../components/HeaderCard/HeaderCard'
import Collapse from '../../components/Collapse/Collapse'
import ImgForAbout from "../../components/sets/ImgTopCard_2.png"

import './About.scss'

function About() {
    //Le contenu inséré ici dans Collapse correspond à la props {children} de Collapse.js
    return(
        <div>
            <HeaderCard image={ImgForAbout} />            
                <div className='about'>
                    <div className='about-content'>
                        <Collapse title="Fiabilité">      
                            <div className='collapse_content'>              
                                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                            </div>
                        </Collapse>
                         <Collapse title="Respect">
                            <div className='collapse_content'>
                                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                            </div>
                        </Collapse>
                        <Collapse title="Service">
                            <div className='collapse_content'> 
                                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                            </div>
                        </Collapse>
                        <Collapse title="Sécurité">
                            <div className='collapse_content'>
                                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                            </div>
                        </Collapse>
                    </div>
                </div>
        </div>
    )
}

export default About