import React from 'react'



export const Progressbar = () => {

  

 

  return (
    <div style={{
        width: "390px",
        height: "103px",
        position: "absolute",
        top: "60px",
        background:"white"
    }}>

        <span style={{
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#FBA497",
            top: "26px",
            left: "45px"
        }}>Kasse</span>

        <div style={{
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

        }}>1</div>

        <div style={{
            borderBottom: "2px solid #C4C4C4",
            width: "30px",
            position: "absolute",
            top: "61px",
            left: "92px",

        }}></div>


        <span style={{
            position: "absolute",
            fontSize: "12px",
            fontWeight: "600",
            color: "#FBA497",
            top: "26px",
            left: "135px"
        }}>Konto</span>

        <div style={{
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
        lineHeight: "30px"

        }}>2</div>

        <div style={{
            borderBottom: "2px solid #C4C4C4",
            width: "30px",
            position: "absolute",
            top: "61px",
            left: "180px",

        }}></div>


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
