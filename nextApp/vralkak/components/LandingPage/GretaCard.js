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
    <div  id={styles.greta}>
    <div className={styles.foodCardName}>Greta</div>
    <Image className={styles.ekonomenShadow} src={ekonomenShadow} layout="raw"/>
    <Image className={styles.ekonomenFood} src={gretaFood} layout="raw" />
    <div className={styles.priceBorder}>fr. 400 kr</div>
    <div className={styles.textBelowPicture}>Miljömärkt kasse för dig som har fullt upp med att rädda världen likt Greta.</div>
    <div className={styles.ekonomLine}></div>
    <Image className={styles.pictureToDescription1} src={imgDescription1} layout="raw" /><span className={styles.textToDescription1}>Mat för två veckor på två timmar</span>
    <Image className={styles.pictureToDescription2} src={imgDescription2} layout="raw"/><span className={styles.textToDescription2}>Arnes chili con carne, Farmors lasagne, Bengans korvstroganoff</span>
    <Image className={styles.pictureToDescription3}src={imgDescription3} layout="raw"/><span className={styles.textToDescription3}>8 min tillagning per portion</span>

    <Image className={styles.pictureToDescriptionEkonomen} src={imgDescription4} layout="raw"/><span className={styles.textToDescriptionEkonomen}>Prispressade varor</span>
    <Link href="/StepForm">
    <button className={styles.gretaCallToAction}>Beställ</button>
    </Link>
    <Image className={styles.orderArrowRight2} src={arrow} layout="raw" />   
    </div>
  )
}
