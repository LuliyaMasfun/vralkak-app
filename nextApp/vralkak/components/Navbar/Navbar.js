import React from 'react'
import companyLogo from '../../public/assets/logo.png';
import hamburgerMenu from '../../public/assets/Frame135.png';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Navbar() {
  return (
    <>
    <Head>
    <link href='https://fonts.googleapis.com/css?family=Outfit' rel='stylesheet'/>
    </Head>
    <div className="navbar" style={{
      display: "grid",
      zIndex: "3",
      gridColumn: "1",
      gridRow: "1",
      background: "white",
      fontSize: "22px",
      fontWeight: "normal",
      fontStyle: "normal",
      height: "60px",
      position: "relative",
      textDecoration: "none"
    }}>
        <div className="insideNavbar" style={{
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
           margin: "15px",
           textDecoration: "none"
           
        }}>
        <span className="hamburgermenu">
          <Image src={hamburgerMenu}/></span>
        <Link href="/" className="textenLängstUpp" style={{
          textDecoration: "none",
          color: "black"
        }} ><span className="titel" style={{
          fontSize: "24px",
          fontweight: "500",
          textdecoration: "none"
      
        }}>
        <Image src={companyLogo} className="companyLogo" layout="raw"  style={{
          position: "absolute",
          left:"260px",
          top:"17px",
          textDecoration: "none"

        }}/>Vrålkäk</span></Link>
        </div>
    </div>
    </>
  )
}
