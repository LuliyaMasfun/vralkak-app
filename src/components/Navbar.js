import React from 'react'
import './Navbar.css';
import companyLogo from './assets/logo.png';
import hamburgerMenu from './assets/Frame135.png';
import './Body.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="insideNavbar">
        <span className="hamburgermenu"><img src={hamburgerMenu}/></span>
        <span className="titel"> <img src={companyLogo} className="companyLogo" onclick="location.href='LandingPage.html'"/>Vrålkäk</span>
        </div>
    </div>
  )
}
