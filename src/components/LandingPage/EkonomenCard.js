import React from 'react'
import '../Body.css';
import './FoodCard.css';
import ekonomenShadow from '../assets/shadowToEkonomen.png';
import ekonomenFood from '../assets/ekonomenFood.svg';
import imgDescription1 from '../assets/pictureToDescriptionV1.png';
import imgDescription2 from '../assets/pictureToDescriptionV2.png';
import imgDescription3 from '../assets/pictureToDescriptionV3.png';
import imgDescription4 from '../assets/ekonomenDescription4.png';
import arrow from '../assets/Vector.png';
import { Link } from 'react-router-dom';



export default function EkonomenCard() {
  return (

    <div className="ekonomen" id="ekonomen">
    <div className="foodCardName">“Ekonomen”</div>
    <img className="ekonomenShadow" src={ekonomenShadow}/>
    <img className="ekonomenFood"src={ekonomenFood} />
    <div className="priceBorder">fr. 349 kr</div>
    <div className="textBelowPicture">Kassen för dig som är ute efter schysst mat till ett schysst pris.</div>
    <div className="ekonomLine"></div>
    <div className="foodDescription1"><img className="pictureToDescription1"src={imgDescription1} /><span className="textToDescription1">Mat för två veckor på två timmar</span></div>
    <div className="foodDescription2"><img className="pictureToDescription2"src={imgDescription2} /><span className="textToDescription2">Arnes chili con carne, Farmors lasagne, Bengans korvstroganoff</span></div>
    <div className="foodDescription3"><img className="pictureToDescription3"src={imgDescription3} /><span className="textToDescription3">8 min tillagning per portion</span></div>

    <div className="foodDescription4"><img className="pictureToDescriptionEkonomen" src={imgDescription4} /><span className="textToDescriptionEkonomen">Prispressade varor</span></div>

    <Link className="ekonomenCallToAction" to="/login">Beställ

    </Link>
    <img className="orderArrowRight1" src={arrow} />   
    </div>

  )
}
