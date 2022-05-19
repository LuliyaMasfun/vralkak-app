import React from 'react'
import styles from './FoodCard.module.css';
import veganenShadow from '../../public/assets/shadowToEkonomen.png';
import veganenFood from '../../public/assets/veganFood.png';
import imgDescription1 from '../../public/assets/pictureToDescriptionV1.png';
import imgDescription2 from '../../public/assets/pictureToDescriptionV2.png';
import imgDescription3 from '../../public/assets/pictureToDescriptionV3.png';
import imgDescription4 from '../../public/assets/pictureToDescriptionV4.png';
import arrow from '../../public/assets/Vector.png';
import Link from 'next/link';
import Image from 'next/image';


export default function VeganenCard() {
  return (
    <div id={styles.veganen}>
        <div className={styles.foodCardName}>“Veganen”</div>
        <Image src={veganenShadow} className={styles.ekonomenShadow} layout="raw"/>
        <Image className={styles.ekonomenFood} src={veganenFood} layout="raw" />
        <div className={styles.priceBorder}>fr. 389 kr</div>
        <div className={styles.textBelowPicture}>Kassen för dig som oavsett anledning valt en en växtbaserad kost.</div>
        <div className = {styles.ekonomLine}></div> 
        <Image className={styles.pictureToDescription1}src={imgDescription1} layout="raw"/><span className={styles.textToDescription1}>Mat för 2 veckor på 2 timmar</span>
        <Image className={styles.pictureToDescription2}src={imgDescription2} layout="raw"/><span className={styles.textToDescription2}>Het vegansk chili, Zaras zucchinilasagne, Sonjas sojastroganoff</span>
        <Image className={styles.pictureToDescription3}src={imgDescription3} layout="raw"/><span className={styles.textToDescription3}>8 min tillagning per portion</span>
        <Image className={styles.pictureToDescriptionVeganen}src={imgDescription4} layout="raw"/><span className={styles.textToDescriptionVeganen}>Helt fritt från animaliska produkter</span>
        <Link href="/StepForm">
        <button className={styles.veganenCallToAction} href="/StepForm">Beställ</button>
        </Link>
        <Image className={styles.orderArrowRight3} src={arrow} layout="raw" />  
    </div>
  )
}
