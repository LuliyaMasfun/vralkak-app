import React from 'react'
import StartPagePictureShadows from '../../public/assets/shadowFirstPage.svg';
import StartPagePicture from '../../public/assets/startingPagePicture.png';
import arrow from '../../public/assets/arrowDown.png';
import styles from './HomePage.module.css';

import {Link} from 'react-scroll'
import Image from 'next/image'



export default function HomePage() {

  

  
  return (
    <div className={styles.firstPage}>
    <span className={styles.welcomeText}>Ett skepp kommer lastat med <span className={styles.textToChange}></span></span>
            
            <Image className={styles.shadowFirstPage} alt="" height={600} width={360} src={StartPagePictureShadows} />
            <Image src={StartPagePicture} className={styles.lunchBoxImg}/>

        <button className={styles.firstPageButton} type="button"><span className={styles.buttonText}>Hitta ditt studentkäk</span>  </button>

      
      <Link  href="ekonomen" smooth={true} duration={1000}>
      <Image src={arrow} className={styles.arrowDownFirstPage}/> 
      </Link>
    
    </div>
  )
}
