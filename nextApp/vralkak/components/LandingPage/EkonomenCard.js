import React from 'react'

import styles from './FoodCard.module.css';
import ekonomenShadow from '../../public/assets/shadowToEkonomen.png';
import ekonomenFood from '../../public/assets/ekonomenFood.svg';
import imgDescription1 from '../../public/assets/pictureToDescriptionV1.png';
import imgDescription2 from '../../public/assets/pictureToDescriptionV2.png';
import imgDescription3 from '../../public/assets/pictureToDescriptionV3.png';
import imgDescription4 from '../../public/assets/ekonomenDescription4.png';
import arrow from '../../public/assets/Vector.png';
import Link  from 'next/link';
import Image from 'next/image';



export default function EkonomenCard() {
  return (

    <div className={styles.ekonomen} id={styles.ekonomen}>
    <div className={styles.foodCardName}>“Ekonomen”</div>
    <Image className={styles.ekonomenShadow} src={ekonomenShadow}/>
    <Image className={styles.ekonomenFood}src={ekonomenFood} />
    <div className={styles.priceBorder}>fr. 349 kr</div>
    <div className={styles.textBelowPicture}>Kassen för dig som är ute efter schysst mat till ett schysst pris.</div>
    <div className={styles.ekonomLine}></div>
    <div className={styles.foodDescription1}><Image className={styles.pictureToDescription1}src={imgDescription1} /><span className={styles.textToDescription1}>Mat för två veckor på två timmar</span></div>
    <div className={styles.foodDescription2}><Image className={styles.pictureToDescription2}src={imgDescription2} /><span className={styles.textToDescription2}>Arnes chili con carne, Farmors lasagne, Bengans korvstroganoff</span></div>
    <div className={styles.foodDescription3}><Image className={styles.pictureToDescription3}src={imgDescription3} /><span className={styles.textToDescription3}>8 min tillagning per portion</span></div>

    <div className={styles.foodDescription4}><img className={styles.pictureToDescriptionEkonomen} src={imgDescription4} /><span className={styles.textToDescriptionEkonomen}>Prispressade varor</span></div>

    <Link className={styles.ekonomenCallToAction} href="/MultiStepForm">Beställ

    </Link>
    <Image className={styles.orderArrowRight1} src={arrow} />   
    </div>

  )
}
