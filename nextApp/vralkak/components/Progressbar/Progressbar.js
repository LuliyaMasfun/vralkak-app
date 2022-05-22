import React,{useState} from 'react'
import checkMark from '../../public/assets/checkMark.png'
import Image from 'next/image';



export const Progressbar = (probs) => {
    
    const {img, color1, color2, color3, color4, number1, number2, number3, number4,
         lineColor1, lineColor2, lineColor3, display1, display2, display3, 
         display4, textColor1, textColor2, textColor3, textColor4,
        borderColor1, borderColor2, borderColor3, borderColor4, navigation} = probs;
   
    
     
    
        
    

    const circle1 = {
        background: color1,
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "50%",
        position: "absolute",
        top: "45px",
        left: "45px",
        width: "32px",
        height: "32px",
        textAlign: "center",
        lineHeight: "30px",
        border: borderColor1
    }

    const text1 = {
        position: "absolute",
        fontSize: "12px",
        fontWeight: "600",
        color: textColor1,
        top: "26px",
        left: "46px"
    }

    const line1 = {
        borderBottom: lineColor1,
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "92px",
    }

    const circle2 = {
            background: color2,
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "50%",
            position: "absolute",
            top: "45px",
            left: "135px",
            width: "32px",
            height: "32px",
            textAlign: "center",
            lineHeight: "30px",
            border: borderColor2
    }
    
    const text2 = {
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: textColor2,
            top: "26px",
            left: "136px"
    }

    const line2 = {
        borderBottom: lineColor2,
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "180px",
    }

    const circle3  = {
        background: color3,
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "50%",
        position: "absolute",
        top: "45px",
        left: "223px",
        width: "32px",
        height: "32px",
        textAlign: "center",
        lineHeight: "30px",
        border: borderColor3

    }
     
    const text3 = {
        position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: textColor3,
            top: "26px",
            left: "217px"
    }

    const line3 = {
        borderBottom: lineColor3,
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "268px",
    }
    
    const circle4 = {
        background: color4,
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "50%",
        position: "absolute",
        top: "45px",
        left: "311px",
        width: "32px",
        height: "32px",
        textAlign: "center",
        lineHeight: "30px",
        border: borderColor4
    }

    const text4 = {
        position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: textColor4,
            top: "26px",
            left: "302px"
    }

    
    

    
  return (
    <div style={{
        width: "390px",
        height: "103px",
        position: "absolute",
        top: "60px",
        background:"white"
    }}>
        
        <span style={text1}>Kasse</span>

        <div style={circle1} onClick={()=> navigation.go(0)}>
          <Image src={img} layout="raw" width="18px" height="18px"  style={{
              display: `${display1}`,
              position: "absolute",
              top: "7px",
              left: "7px",
          }}/>  
          {number1}
            </div>

        <div style={line1}></div>


        <span style={text2}>Konto</span>
        
        <div style={circle2} onClick={()=> navigation.go(1)}>
        <Image src={img} layout="raw" width="18px" height="18px"  style={{
              display: `${display2}`,
              position: "absolute",
              top: "7px",
              left: "7px",
          }}/>  
          {number2}
            
        </div>

        <div style={line2}></div>


    <span style={text3} >Leverans</span>

        

        <div style={circle3} onClick={()=> navigation.go(3)}
        ><Image src={img} layout="raw" width="18px" height="18px"  style={{
              display: `${display3}`,
              position: "absolute",
              top: "7px",
              left: "7px",
          }}/>  
          {number3}</div>

        <div style={line3}></div>

        <span style={text4}>Betalning</span>

        <div style={circle4} onClick={()=> navigation.go(4)}>
        <Image src={img} layout="raw" width="18px" height="18px"  style={{
              display: `${display4}`,
              position: "absolute",
              top: "7px",
              left: "7px",
          }}/>  
          {number4}
           
        </div>

        

    </div>

  )
}
