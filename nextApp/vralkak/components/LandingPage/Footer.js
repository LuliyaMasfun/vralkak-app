import { colors } from '@material-ui/core';
import Image from 'next/image';
import React from 'react'
import companyLogo from '../../public/assets/latestLogo.svg';
import companyText from '../../public/assets/companyText.svg'
import sweFlag from '../../public/assets/footerSwe.png'
import mapIcon from '../../public/assets/mapIcon.svg'
import phoneIcon from '../../public/assets/phoneIcon.svg'
import mailIcon from '../../public/assets/mailIcon.svg'

export const Footer = () => {
  return (
    <div style={{
        position: 'absolute',
        height: "354px",
        width: "390px",
        backgroundColor: "#1F1E1F",
        top: "3402px",

    }}>

    <Image src={companyLogo} layout="raw" style={{
        position: "absolute",
        top: "51px",
        left: "134px",
    }}
    />

    <Image src={companyText} layout="raw" style={{
        position: "absolute",
        top: "56.56px",
        left: "174.27px",
    }}/>

    <Image src={sweFlag} layout="raw" style={{
        position: "absolute",
        top: "127px",
        left: "66px",
    }}/>

    <span style={{
        position: "absolute",
        top: "126px",
        left: "111px",
        color: "white",
        fontSize: "16px",
        fontWeight: "normal",
    }}>Vi levererar svenska matvaror</span>

    <div style={{
        position: "absolute",
        top: "174px",
        left: "134.5px",
        width: "122px",
        borderBottom: "1px solid #FBA497",

    }}></div>

    <Image src={mapIcon} layout="raw" style={{
        position: "absolute",
        top: "198px",
        left: "71.5px",
    }}/>

    <span style={{
        position: "absolute",
        top: "200px",
        left: "105.5px",
        color: "white",
        fontSize: "16px",
        fontWeight: "normal",
    }}>Götgatan 7, 192 43, Stockholm</span>

<Image src={phoneIcon} layout="raw" style={{
        position: "absolute",
        top: "246px",
        left: "130.5px",
    }}/>

    <span style={{
        position: "absolute",
        top: "246px",
        left: "164.5px",
        color: "white",
        fontSize: "16px",
        fontWeight: "normal",
    }}>+46 843 72 19</span>

<Image src={mailIcon} layout="raw" style={{
        position: "absolute",
        top: "292px",
        left: "123px",
        color: "white",
    }}/>

    <span style={{
        position: "absolute",
        top: "294px",
        left: "157px",
        color: "white",
        fontSize: "16px",
        fontWeight: "normal",
    }}>info@vralkak.se</span>





    </div>
  )
}
