import React from 'react'
import StartPagePictureShadows from '../../public/assets/shadowFirstPage.svg';
import StartPagePicture from '../../public/assets/startingPagePicture.png';
import arrow from '../../public/assets/arrowDown.png';
import './HomePage.module.css';

import {Link} from 'react-scroll'
import Image from 'next/image'



export default function HomePage() {

  function animate(){
    var spin = keyframes `
    0%{
      content: '...';
      }
    25%{
      content: 'god mat';
      }
    50%{
      content: 'sparad tid';
      }
    75%{
      content: 'mer pengar över';
      }
    100%{
      content: 'aptitretande aromer';
    }
    `
  }

  
  return (
    <div className="firstPage" style={{
      display: "grid",
      backgroundColor: "FFC4BB",
      gridColumn: "1",
      gridRow: "2/11"
      
    }}>
    <span className="welcomeText" style={{
        zIndex: "3",
        marginTop: "60px",
        marginLeft: "32px",
        fontSize: "35px",
        color: "black",
        fontweight:"600",
    }}>Ett skepp kommer lastat med 
    
    <span className="textToChange"></span></span>
            
            <Image src={StartPagePictureShadows} className="shadowFirstPage" style={{
                  position: "absolute",
                  top: "20px",
                  left: "-180px",
                  width: "380px",
                  height: "600px",
                  zIndex: "1",
            }}/>
            <Image src={StartPagePicture} className="lunchBoxImg" style={{
               zIndex: "2",
               position: "absolute",
               marginTop: "116px"
            }}/>

        <button className="firstPageButton" type="button" style={{
          zIndex: "3",
          color: "white",
          border: "#1F1E1F solid 2px",
          fill: "#1F1E1F",
          background: "#1F1E1F",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          marginTop: "583px",
          left: "8.25%",
          padding: "0px",
          height: "50px",
          width: "326px",
          fontSize: "20px",
          fontWeight: "500",
        }}><span className="buttonText">Hitta ditt studentkäk</span>  </button>

      
      <Link  to="ekonomen" smooth={true} duration={1000}>
      <Image src={arrow} className="arrowDownFirstPage" style={{
         zIndex: "5",
         position: "absolute",
         top: "748px",
         left: "165px",
         opacity: "0.7"
      }}/> 
      </Link>
    
    </div>
  )
}
