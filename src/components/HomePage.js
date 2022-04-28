import React from 'react'
import StartPagePictureShadows from './assets/shadowFirstPage.svg';
import StartPagePicture from './assets/startingPagePicture.png';
import arrow from './assets/arrowDown.png';
import './HomePage.css';
import './Body.css'
;


export default function HomePage() {
  return (
    <div className="firstPage">
            <span className="welcomeText">Ett skepp kommer lastat med <span className="textToChange"></span></span>
            
            <img src={StartPagePictureShadows} className="shadowFirstPage"/>
            <img src={StartPagePicture} className="lunchBoxImg"/>

        <button className="firstPageButton" onclick="location.href='#ekonomen'" type="button"><span className="buttonText">Hitta ditt studentkäk</span>  </button>

       <img src={arrow} className="arrowDownFirstPage"/>
    
    </div>
  )
}
