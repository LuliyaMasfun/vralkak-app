import React from 'react'
import './Body.css';
import './FoodCard.css';
import veganenShadow from './assets/shadowToEkonomen.png';
import veganenFood from './assets/veganFood.png';
import imgDescription1 from './assets/pictureToDescriptionV1.png';
import imgDescription2 from './assets/pictureToDescriptionV2.png';
import imgDescription3 from './assets/pictureToDescriptionV3.png';
import imgDescription4 from './assets/pictureToDescriptionV4.png';
import arrow from './assets/Vector.png';
import { Link } from 'react-router-dom';

export default function VeganenCard() {
  return (
    <div class="foodCard" id="veganen">
        <div class="foodCardName">“Veganen”</div>
        <img src={veganenShadow} class="ekonomenShadow"/>
        <img class="ekonomenFood" id="veganFood" src={veganenFood} />
        <div class="priceBorder">fr. 389 kr</div>
        <div class="textBelowPicture">Kassen för dig som oavsett anledning valt en en växtbaserad kost.</div>
        <div class = "ekonomLine"></div> 
        <div class="foodDescription1"><img class="pictureToDescription1"src={imgDescription1} /><span class="textToDescription1">Mat för 2 veckor på 2 timmar</span></div>
        <div class="foodDescription2"><img class="pictureToDescription2"src={imgDescription2} /><span class="textToDescription2">Het vegansk chili, Zaras zucchinilasagne, Sonjas sojastroganoff</span></div> 
        <div class="foodDescription3"><img class="pictureToDescription3"src={imgDescription3} /><span class="textToDescription3">8 min tillagning per portion</span></div>
        <div class="foodDescription4"><img class="pictureToDescriptionVeganen"src={imgDescription4} /><span class="textToDescriptionVeganen">Helt fritt från animaliska produkter</span></div>
        <Link className="veganenCallToAction" to="/login">Beställ
        
        </Link>
        <img class="orderArrowRight3" src={arrow} />  
    </div>
  )
}
