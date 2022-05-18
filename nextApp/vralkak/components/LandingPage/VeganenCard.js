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
    <div className={styles.foodCard} id={styles.veganen}>
        <div className={styles.foodCardName}>“Veganen”</div>
        <Image src={veganenShadow} className={styles.ekonomenShadow}/>
        <Image className={styles.ekonomenFood} id={styles.veganFood} src={veganenFood} />
        <div className={styles.priceBorder}>fr. 389 kr</div>
        <div className={styles.textBelowPicture}>Kassen för dig som oavsett anledning valt en en växtbaserad kost.</div>
        <div className = {styles.ekonomLine}></div> 
        <div className={styles.foodDescription1}><Image className={styles.pictureToDescription1}src={imgDescription1} /><span className={styles.textToDescription1}>Mat för 2 veckor på 2 timmar</span></div>
        <div className={styles.foodDescription2}><Image className={styles.pictureToDescription2}src={imgDescription2} /><span className={styles.textToDescription2}>Het vegansk chili, Zaras zucchinilasagne, Sonjas sojastroganoff</span></div> 
        <div className={styles.foodDescription3}><Image className={styles.pictureToDescription3}src={imgDescription3} /><span className={styles.textToDescription3}>8 min tillagning per portion</span></div>
        <div className={styles.foodDescription4}><Image className={styles.pictureToDescriptionVeganen}src={imgDescription4} /><span className={styles.textToDescriptionVeganen}>Helt fritt från animaliska produkter</span></div>
        <Link className={styles.veganenCallToAction} href="/StepForm">Beställ
        
        </Link>
        <Image className={styles.orderArrowRight3} src={arrow} />  
    </div>
  )
}
