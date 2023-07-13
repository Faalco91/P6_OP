import React, { useEffect, useState } from 'react';
import { logementsDatas } from '../../datas/data.js';
import { Link } from 'react-router-dom';
import '../Card/Card.scss'

function Card() {
  //Cette ligne utilise le hook useState pour déclarer une variable d'état appelée selectedId avec une valeur initiale null. selectedId sera utilisé pour stocker l'id sélectionné.
  const [selectedId, setSelectedId] = useState(null);
   useEffect(() => {
    //Cette fonction sert à gérer les clics sur les éléments avec la classe .card-element.
    //Quand un élément est cliqué HandleClick est appelée.
    const handleClick = (event) => {
      //handleClick extrait l'id de l'élément cliqué puis le stocke dans la variable clickedId.
      const clickedId = event.currentTarget.getAttribute('id');
      //setSelectedId met à jour l'état de selectedId en lui affectant la valeur de ClickedId.
      setSelectedId(clickedId);
    };
  
    const cardElements = document.querySelectorAll('.card-element');
    cardElements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });
    //On supprime les gestionnaires d'événements après les avoir appelés pour éviter les fuites de mémoire, les comportements indésirables et pour respecter les bonnes pratiques de programmation.
    return () => {
      cardElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, []);

  //Cette ligne filtre les données de logements en fonction de l'id sélectionné.
  //Si selectedId est différent de null, logementsDatas est filtré pour ne conserver que les élements correspondants à selectedId.
  const filteredData = selectedId ? logementsDatas.filter((log) => log.id === selectedId) : [];

  //acc sert à parcourir chaque éléments du tableau et log sert à accéder aux données.
  const logements = logementsDatas.reduce((acc, log) => {    
    const { title, cover, id } = log;
    if (!acc[title]) {
    //Si log.title n'est pas présent dans acc, il faut l'y ajouter.
      acc[log.title] = [];
    }
    //Si non (Si log.title est est présent dans acc) ajouter log.cover à acc.
    acc[log.title].push({cover, id});
    return acc;
  }, {});


  return (
    <div className='card'>
      {Object.entries(logements).map(([title, covers]) => (
        <div className='card-element' id={covers[0].id} key={title}>
          <h1 className='card-title'>{title}</h1>
          {covers.map(({cover, id}, index) => (
            <Link key={index} to={`/Logements/${covers[0].id}`}>
              <img className='card-img' key={index} src={cover} alt={`Cover ${index}`} />
            </Link>
          ))}
        </div>
      ))}
       {filteredData.map((log, index) => (
      <div id={log.id} key={index}>
        <h1>{log.title}</h1>
        <img src={log.cover} alt={`Cover ${index}`} />
        <p>{log.description}</p>
        {/* Afficher les autres données extraites ici */}
      </div>
    ))}
    </div>
  );
}

export default Card;