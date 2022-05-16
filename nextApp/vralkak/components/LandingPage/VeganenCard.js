import React from 'react'
import './FoodCard.module.css';
import veganenShadow from '../../public/assets/shadowToEkonomen.png';
import veganenFood from '../../public/assets/veganFood.png';
import imgDescription1 from '../../public/assets/pictureToDescriptionV1.png';
import imgDescription2 from '../../public/assets/pictureToDescriptionV2.png';
import imgDescription3 from '../../public/assets/pictureToDescriptionV3.png';
import imgDescription4 from '../../public/assets/pictureToDescriptionV4.png';
import arrow from '../../public/assets/Vector.png';
import Link from 'next/link';

export default function VeganenCard() {
  return (
    <div className="foodCard" id="veganen">
        <div className="foodCardName">“Veganen”</div>
        <img src={veganenShadow} className="ekonomenShadow"/>
        <img className="ekonomenFood" id="veganFood" src={veganenFood} />
        <div className="priceBorder">fr. 389 kr</div>
        <div className="textBelowPicture">Kassen för dig som oavsett anledning valt en en växtbaserad kost.</div>
        <div className = "ekonomLine"></div> 
        <div className="foodDescription1"><img className="pictureToDescription1"src={imgDescription1} /><span className="textToDescription1">Mat för 2 veckor på 2 timmar</span></div>
        <div className="foodDescription2"><img className="pictureToDescription2"src={imgDescription2} /><span className="textToDescription2">Het vegansk chili, Zaras zucchinilasagne, Sonjas sojastroganoff</span></div> 
        <div className="foodDescription3"><img className="pictureToDescription3"src={imgDescription3} /><span className="textToDescription3">8 min tillagning per portion</span></div>
        <div className="foodDescription4"><img className="pictureToDescriptionVeganen"src={imgDescription4} /><span className="textToDescriptionVeganen">Helt fritt från animaliska produkter</span></div>
        <Link className="veganenCallToAction" href="/checkout">Beställ
        
        </Link>
        <img className="orderArrowRight3" src={arrow} />  
    </div>
  )
}
