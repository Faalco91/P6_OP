import React, { useState, useRef, useEffect } from "react";
//On utilise useRef pour créer une référence carouselContainerRef lié à la div .caroussel-container
//On utilise également useEffect pour récupérer la largeur de la div une fois que le composant est dans le DOM et la stocker dans l'état carouselWidth.
import '../Slideshow/Slideshow.scss'

function Slideshow({datas}){
    console.log(datas);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselContainerRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
  
    useEffect(() => {
      //Permet de récuperer la largeur de la div
      const carouselContainerWidth = carouselContainerRef.current.offsetWidth;
      //On met à jour l'etat de carouselWidth et l'affecte ensuite (plus bas) à arrows afin qu'elle ne dépasse pas caroussel-container
      setCarouselWidth(carouselContainerWidth);
    }, []);

    const previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? datas.length - 1 : prevIndex - 1));
      };
    
    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === datas.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div className="caroussel-container" ref={carouselContainerRef}>
            <div className="arrows" style={{ width: `${carouselWidth}px` }}>
                <div className="arrow-container" onClick={previous}><span className='arrow left'></span></div>
                <div className="arrow-container" onClick={next}><span className='arrow right'></span></div>
            </div>
            {datas.map((log, index) => (
                <img className={`imgs-caroussel ${index === currentIndex ? "active" : "not-active"}`} src={log} alt={`log ${index}`} key={index}/>
            ))}

        </div>
    )

}

export default Slideshow;
