import React from 'react'
import './Navbar.module.css';
import companyLogo from '../../public/assets/logo.png';
import hamburgerMenu from '../../public/assets/Frame135.png';

import Link from 'next/Link';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="insideNavbar">
        <span className="hamburgermenu"><img src={hamburgerMenu}/></span>
        <Link href="/" className="textenLängstUpp" ><span className="titel"><img src={companyLogo} className="companyLogo" />Vrålkäk</span></Link>
        </div>
    </div>
  )
}
