import React,{useState} from 'react'




export const Progressbar = (probs) => {

    const {step} = probs;
   
    if(probs.step === "1") {
    setCircle2({
        background: "#black",
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
    })
}
    
    
        
    

    const [circle1, setCircle1] = useState({
        background: "#FBA497",
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
        lineHeight: "30px"
    })

    const [text1, setText1] = useState({
        position: "absolute",
        fontSize: "12px",
        fontWeight: "600",
        color: "#FBA497",
        top: "26px",
        left: "45px"
    })

    const [line1, setline1] = useState({
        borderBottom: "2px solid #C4C4C4",
        width: "30px",
        position: "absolute",
        top: "61px",
        left: "92px",
    })

    const [circle2, setCircle2] = useState({
            background: "#C4C4C4",
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
    })
    
    const [text2, setText2] = useState({
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#C4C4C4",
            top: "26px",
            left: "135px"
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

        <div style={circle1}>1</div>

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
            left: "213px"
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
        lineHeight: "30px"

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
            left: "300px"
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
        lineHeight: "30px"

        }}>4</div>

        

    </div>

  )
}
