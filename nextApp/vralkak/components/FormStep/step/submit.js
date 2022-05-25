import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Progressbar } from '../../Progressbar/Progressbar'
import imgDescription1 from '../../../public/assets/submitIcon1.png';
import imgDescription2 from '../../../public/assets/submitIcon2.png';
import Image from 'next/image';
import Link from 'next/link';
import Greta from '../../../public/assets/gretaDish.png'
import Ekonomen from '../../../public/assets/ekonomenDish.png'
import Veganen from '../../../public/assets/veganenCheckOut.png'


export const Submit = ({navigation, formData}) => {
  const {email} = formData;


  return (
    <>
    <Navbar />
    <Progressbar  img="/assets/checkMark.png" color1="none" color2="none" color3="none" color4="#none"
                  numberColor1="" numberColor2="" numberColor3="" numberColor4=""
                 number1="" number2="" number3="" number4=""
                 lineColor1="2px solid #FBA497" lineColor2="2px solid #FBA497" lineColor3="2px solid #FBA497" 
                 display1="block" display2="block" display3="block" display4="block"
                 textColor1="#FBA497" textColor2="#FBA497" textColor3="#FBA497" textColor4="#FBA497"
                 borderColor1="2px solid #FBA497" borderColor2="2px solid #FBA497" borderColor3="2px solid #FBA497" borderColor4="2px solid #FBA497" navigation={navigation} />

    <div style={{
      height: "1415px",
      width: "390px",
      position: "absolute",
      top: "163px",
      backgroundColor: "#F4F4F4",

    }}>

    <span style={{
      position: "absolute",
      top:"40px",
      left: "32px",
      fontSize: "36px",
      fontWeight: "600px"
    }}>Ditt storkok är <br /> påväg!</span>

    <Image src={imgDescription1} layout ="raw" style={{
      position: "absolute",
      top: "162.73px",
      left: "33.5px"
    }}/>

    <span style={{
      position: "absolute",
      top:"156px",
      left: "70px",
      fontSize: "16px",
      fontWeight: "normal",
    }}>Ett bekräftelsemail har skickats till <br/>
          {email}</span>


          <div style={{
      height: "88px",
      width: "326px",
      backgroundColor: "#AB3C3C",
      position: "absolute",
      top: "113px",
      left: "32px",
      marginTop:"100px",
      color:"white",
    }}>
     
          <Image  layout = "raw" src={Veganen}  style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Veganen</span>
</div>
<div style={{
      height: "88px",
      width: "326px",
      backgroundColor: "#006740",
      position: "absolute",
      top: "113px",
      left: "32px",
      color:"white",
      marginTop:"100px",
    }}>
     
          <Image  layout = "raw" src={Greta}  style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Greta</span>

          </div>

      <div style={{
      height: "88px",
      width: "326px",
      backgroundColor: "#0939BB",
      position: "absolute",
      top: "113px",
      left: "32px",
      color:"white",
      marginTop:"100px",
    }}>
     
          <Image  layout = "raw" src={Ekonomen}  style={{
            position: "absolute",
            top: "16px",
            left: "16px",
          }} />

          <span style={{
            fontSize: "20px",
            fontWeight: "500",
            position: "absolute",
            top: "32px",
            left: "84px",
          }}>Ekonomen</span>
          </div>


    <span style={{
      top: "368px",
      left: "70px",
      fontSize: "16px",
      fontWeight: "700",
      position: "absolute",
    }}>Levereras om 3-4 arbetsdagar</span>


    <Link href="/">
    <button 
        
        style={{
      width:"326px",
      height:"50px",
      position: "absolute",
      top: "467px",
      left: "32px",
      boxSizing:"border-box",
      backgroundColor: "#1F1E1F",
      color: "white",
      fontWeight: "500",
      fontSize: "20px",
      
    }} >Tillbaka till startsidan </button>
</Link>

    </div>

    </>
  )
}
