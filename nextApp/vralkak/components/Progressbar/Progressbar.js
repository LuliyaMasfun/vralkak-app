import React,{useState} from 'react'
import checkMark from '../../public/assets/checkMark.png'
import Image from 'next/image';



export const Progressbar = (probs) => {

    const {color1, color2, number, color3} = probs;
   
    const image = "/public/assets/checkMark.png"
     
    
        
    

    const circle1 = {
        background: color2,
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
        border: "2px solid #FBA497"
    }

    const [text1, setText1] = useState({
        position: "absolute",
        fontSize: "12px",
        fontWeight: "600",
        color: "#FBA497",
        top: "26px",
        left: "46px"
    })

    const [line1, setline1] = useState({
        borderBottom: "2px solid #C4C4C4",
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "92px",
    })

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
            border: "2px solid #FBA497"
    }
    
    const [text2, setText2] = useState({
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#C4C4C4",
            top: "26px",
            left: "136px"
    })

    const[line2, setLine2] = useState({
        borderBottom: "2px solid #C4C4C4",
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "180px",
    })

     
    
    
    

    
  return (
    <div style={{
        width: "390px",
        height: "103px",
        position: "absolute",
        top: "60px",
        background:"white"
    }}>
        
        <span style={text1}>Kasse</span>

        <div style={circle1}>
          <Image src={color1} layout="raw" width="18px" height="18px"  style={{
              display: `${color3}`,
          }}/>  
          {number}
            </div>

        <div style={line1}></div>


        <span style={text2}>Konto</span>
        
        <div style={circle2}>2</div>

        <div style={line2}></div>


    <span style={{
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#C4C4C4",
            top: "26px",
            left: "217px"
        }}>Leverans</span>

        

        <div style={{
        background: "#C4C4C4",
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
        border: "2px solid #C4C4C4"

        }}>3</div>

        <div style={{
            borderBottom: "2px solid #C4C4C4",
            width: "30px",
            position: "absolute",
            top: "61px",
            left: "268px",

        }}></div>

<span style={{
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#C4C4C4",
            top: "26px",
            left: "302px"
        }}>Betalning</span>

        <div style={{
        background: "#C4C4C4",
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
        border: "2px solid #C4C4C4"


        }}>4
           
        </div>

        

    </div>

  )
}
