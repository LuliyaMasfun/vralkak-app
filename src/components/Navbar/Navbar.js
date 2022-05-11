import React from 'react'
import './Navbar.css';
import companyLogo from '../assets/logo.png';
import hamburgerMenu from '../assets/Frame135.png';
import '../Body.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="insideNavbar">
        <span className="hamburgermenu"><img src={hamburgerMenu}/></span>
        <Link to ="/" className="textenLängstUpp" ><span className="titel"><img src={companyLogo} className="companyLogo" />Vrålkäk</span></Link>
        </div>
    </div>
  )
}
