import React from 'react';
import '../HeaderCard/HeaderCard.scss';

const HeaderCard = ({ image, showOverlayText }) => {

  //Si ShowOverlay est true, on affiche le texte
  return (
    <div id="img-container" className='img-container'>
      <img id="img-top-card" src={image} alt="" />
      {showOverlayText && <p className='overlay-text'>Chez vous, partout et ailleurs</p>}
    </div>
  );
};

export default HeaderCard;
