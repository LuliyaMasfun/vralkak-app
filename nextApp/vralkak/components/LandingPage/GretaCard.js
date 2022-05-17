import React from 'react'
import styles from './FoodCard.module.css';
import ekonomenShadow from '../../public/assets/shadowToEkonomen.png';
import gretaFood from '../../public/assets/gretaFood.svg';
import imgDescription1 from '../../public/assets/pictureToDescriptionV1.png';
import imgDescription2 from '../../public/assets/pictureToDescriptionV2.png';
import imgDescription3 from '../../public/assets/pictureToDescriptionV3.png';
import imgDescription4 from '../../public/assets/gretaDescription4.png';
import arrow from '../../public/assets/Vector.png';
import Link from 'next/link';
import Image from 'next/image';

export default function GretaCard() {
  return (
    <div className="ekonomen" id="greta">
    <div className="foodCardName">“Greta”</div>
    <Image className="ekonomenShadow" src={ekonomenShadow}/>
    <Image className="ekonomenFood" id="gretaFood" src={gretaFood} />
    <div className="priceBorder">fr. 400 kr</div>
    <div className="textBelowPicture">Miljömärkt kasse för dig som har fullt upp med att rädda världen likt Greta.</div>
    <div className="ekonomLine"></div>
    <div className="foodDescription1"><Image className="pictureToDescription1"src={imgDescription1} /><span className="textToDescription1">Mat för två veckor på två timmar</span></div>
    <div className="foodDescription2"><Image className="pictureToDescription2"src={imgDescription2} /><span className="textToDescription2">Arnes chili con carne, Farmors lasagne, Bengans korvstroganoff</span></div>
    <div className="foodDescription3"><Image className="pictureToDescription3"src={imgDescription3} /><span className="textToDescription3">8 min tillagning per portion</span></div>

    <div className="foodDescription4"><Image className="pictureToDescriptionEkonomen" src={imgDescription4} /><span className="textToDescriptionEkonomen">Prispressade varor</span></div>
    <Link className="gretaCallToAction" href="/MultiStepForm">Beställ
    
    </Link>
    <Image className="orderArrowRight2" src={arrow} />   
    </div>
  )
}
