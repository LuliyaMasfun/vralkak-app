import React from 'react'
import StartPagePictureShadows from '../../public/assets/shadowFirstPage.svg';
import StartPagePicture from '../../public/assets/startingPagePicture.png';
import arrow from '../../public/assets/arrowDown.png';
import './HomePage.module.css';
import {Link} from 'react-scroll'



export default function HomePage() {
  return (
    <div className="firstPage">
            <span className="welcomeText">Ett skepp kommer lastat med <span className="textToChange"></span></span>
            
            <img src={StartPagePictureShadows} className="shadowFirstPage"/>
            <img src={StartPagePicture} className="lunchBoxImg"/>

        <button className="firstPageButton" type="button"><span className="buttonText">Hitta ditt studentkäk</span>  </button>

      {/*<img src={arrow} className="arrowDownFirstPage"/> */} 
      <Link  to="ekonomen" smooth={true} duration={1000}>
      <img src={arrow} className="arrowDownFirstPage"/> 
      </Link>
    
    </div>
  )
}
