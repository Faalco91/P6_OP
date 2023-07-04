import React from 'react';
import '../HeaderCard/HeaderCard.scss';
import ImgForHome from "../sets/ImgTopCard_1.png";
import ImgForAbout from "../sets/ImgTopCard_2.png";

const HeaderCard = ({ context }) => {
  let image;

  if (context === 'home') {
    image = ImgForHome;
  } else if (context === 'about') {
    image = ImgForAbout;
  } else {
    console.log('error');
  }

  return (
    <div className='img-container'>
      <img id="img-top-card" src={image} alt="" />
      <p className='overlay-text'>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default HeaderCard;
