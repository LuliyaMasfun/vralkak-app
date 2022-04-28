import React from 'react'
import './Body.css';
import './FoodCard.css';
import ekonomenShadow from './assets/shadowToEkonomen.png';
import gretaFood from './assets/gretaFood.svg';
import imgDescription1 from './assets/pictureToDescriptionV1.png';
import imgDescription2 from './assets/pictureToDescriptionV2.png';
import imgDescription3 from './assets/pictureToDescriptionV3.png';
import imgDescription4 from './assets/gretaDescription4.png';
import arrow from './assets/Vector.png';
import { Link} from 'react-router-dom';

export default function GretaCard() {
  return (
    <div className="ekonomen" id="greta">
    <div className="foodCardName">“Greta”</div>
    <img className="ekonomenShadow" src={ekonomenShadow}/>
    <img className="ekonomenFood" id="gretaFood" src={gretaFood} />
    <div className="priceBorder">fr. 400 kr</div>
    <div className="textBelowPicture">Miljömärkt kasse för dig som har fullt upp med att rädda världen likt Greta.</div>
    <div className="ekonomLine"></div>
    <div className="foodDescription1"><img className="pictureToDescription1"src={imgDescription1} /><span className="textToDescription1">Mat för två veckor på två timmar</span></div>
    <div className="foodDescription2"><img className="pictureToDescription2"src={imgDescription2} /><span className="textToDescription2">Arnes chili con carne, Farmors lasagne, Bengans korvstroganoff</span></div>
    <div className="foodDescription3"><img className="pictureToDescription3"src={imgDescription3} /><span className="textToDescription3">8 min tillagning per portion</span></div>

    <div className="foodDescription4"><img className="pictureToDescriptionEkonomen" src={imgDescription4} /><span className="textToDescriptionEkonomen">Prispressade varor</span></div>
    <Link className="gretaCallToAction" to="/login">Beställ
    
    </Link>
    <img className="orderArrowRight2" src={arrow} />   
    </div>
  )
}
