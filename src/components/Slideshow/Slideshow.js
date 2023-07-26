import React, { useState, useRef, useEffect } from "react";
//On utilise useRef pour créer une référence carouselContainerRef lié à la div .caroussel-container
//On utilise également useEffect pour récupérer la largeur de la div une fois que le composant est dans le DOM et la stocker dans l'état carouselWidth.
import '../Slideshow/Slideshow.scss'

function Slideshow({datas}){
    //datas est une props importée de Logements.js qui correspond aux images relatives au logement.
    console.log(datas);
    const [currentIndex, setCurrentIndex] = useState(0);
    //Sert à acceder à un élément du DOM (en l'occurence notre carroussel) et directement et le manipuler.
    const carouselContainerRef = useRef(null);
    //Sert à connaitre la largeur du conteneur de l'image afin de permettre de positionner les fleches directives
    //et le compteur d'image en fonction c'elle-ci.
    const [carouselWidth, setCarouselWidth] = useState(0);
   // const [carouselHeight, setCarouselHeight] = useState(0);

  
    useEffect(() => {
      //Permet de récuperer la largeur de la div
      const carouselContainerWidth = carouselContainerRef.current.offsetWidth;
      //On met à jour l'etat de carouselWidth et l'affecte ensuite (plus bas) à arrows afin qu'elle ne dépasse pas caroussel-container
      setCarouselWidth(carouselContainerWidth);
    }, []);

    
    const previous = () => {
    // si l'index actuel est égal à 0 (la première image).Alors l'index est mis à jour pour correspondre à la dernière image 
    //dans le tableau datas (qui est datas.length - 1). Cela permet de créer une boucle continue dans le diaporama.
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? datas.length - 1 : prevIndex - 1));
      };
    //Ici il s'agit de l'inverse, elle deviens la première image du tableau afin de continuer en boucle.
    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === datas.length - 1 ? 0 : prevIndex + 1));
    };

    //Ce code permet de faire en sorte que si il n'y a qu'une seul image dans la gallerie
    //On n'affiche que l'image sans les fleches ni le compteur.
    if (datas.length === 1) {
        return (
          <div className="caroussel-container" ref={carouselContainerRef}>
            {datas.map((log, index) => (
              <img className={`imgs-caroussel ${index === currentIndex ? "active" : "not-active"}`} src={log} alt={`log ${index}`} key={index}/>
            ))}
          </div>
        );
      }
    
    //On retourne le caroussel d'image avec les flèches pour naviguer et le compteur.
    return(
        <div className="caroussel-container" ref={carouselContainerRef}>
            <div className="arrows" style={{ width: `${carouselWidth}px` }}>
                <div className="arrow-container" onClick={previous}><span className='arrow left'></span></div>
                <div className=""><span className="counter"> {currentIndex + 1} / {datas.length} </span></div>
                <div className="arrow-container" onClick={next}><span className='arrow right'></span></div>
            </div>
            {datas.map((log, index) => (
                <img className={`imgs-caroussel ${index === currentIndex ? "active" : "not-active"}`} src={log} alt={`log ${index}`} key={index}/>
            ))}

        </div>
    )

}

export default Slideshow;
