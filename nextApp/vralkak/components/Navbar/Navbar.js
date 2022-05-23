import React from 'react'
import companyLogo from '../../public/assets/latestLogo.svg';
import hamburgerMenu from '../../public/assets/Frame135.png';
import brandName from '../../public/assets/Vrålkäk.svg';
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
        <Link href="/" className="imgLink">
        <Image src={companyLogo} className="companyLogo" layout="raw"  style={{
          position: "absolute",
          left:"260px",
          top:"17px",
          textDecoration: "none"

        }}/></Link>
        <Link href="/" className="brandNameLink">
        <Image src={brandName} style={{
          position : "absolute",
          left : "10px",
          right : "26.14px",
          bottom : "24.29"
        }}/></Link>
        </div>
    </div>
    </>
  )
}
