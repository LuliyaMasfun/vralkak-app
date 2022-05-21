import React from 'react'
import StartPagePictureShadows from '../../public/assets/shadowFirstPage.svg';
import StartPagePicture from '../../public/assets/startingPagePicture.png';
import arrow from '../../public/assets/arrowDown.png';


import {Link} from 'react-scroll'
import Image from 'next/image'

import HomePageImg1 from '../../public/assets/HomePageImg1.png'
import HomePageImg2 from '../../public/assets/HomePageImg2.png'
import HomePageImg3 from '../../public/assets/HomePageImg3.png'





export default function HomePage() {

  

  
  return (
    <div style={{
      
      position: "absolute",
      top: "60px",
      height: "784px",
      width: "390px",
      backgroundImage: "url(/assets/HomeGif.gif)",
      backgroundSize: "cover",
      boxShadow: "inset 0px 0px 0px 1000px rgba(255,255,255,0.75)"
     
    }}>
      

    <span style={{
      position: "absolute",
      top: "40px",
      left: "34px",
      fontSize: "36px",
      fontWeight: "600",
      color: "black",
      opacity: "1"
      
      

    }}>Billig mat till <br></br> plugget? Jajemän!</span>
            
           <Image src={HomePageImg1}  layout="raw" style={{
             position: "absolute",
             top: "160px",
             left: "155px"
           }} /> 

           <span style={{
             position: "absolute",
             top: "248px",
             left: "118px",
             fontSize: "16px",
             fontWeight: "normal",
           }}>1. Beställ ditt vrålkäk</span>

          <Image src={HomePageImg2}  layout="raw" style={{
             position: "absolute",
             top: "296px",
             left: "155px"
           }} /> 

            <span style={{
             position: "absolute",
             top: "384px",
             left: "142.5px",
             fontSize: "16px",
             fontWeight: "normal",
           }}>2. Släng ihop...</span>

          <Image src={HomePageImg3}  layout="raw" style={{
             position: "absolute",
             top: "428px",
             left: "155px"
           }} /> 

            <span style={{
             position: "absolute",
             top: "516px",
             left: "119px",
             fontSize: "16px",
             fontWeight: "normal",
           }}>3. Stapla upp i frysen!</span>
           
            

        <button type="button" style={{
          width:"326px",
          height:"50px",
          position: "absolute",
          top: "580px",
          left: "32px",
          boxSizing:"border-box",
          border: "1px solid #1F1E1F",
          backgroundColor: "#1F1E1F",
          color: "white",
          fontWeight: "500",
          fontSize: "20px"
        }}>Hitta ditt vrålkäk</button>

      
      <Link href="ekonomenCard" smooth={true} duration={1000}>
      <Image src={arrow} layout="raw" style={{
        position: "absolute",
        top: "657px",
        left: "163px"
      }} /> 
      </Link>
    
    </div>
    
  )
}
