
import React from 'react'
import Navbar from '../Navbar/Navbar'
import EkonomenCard from './EkonomenCard'
import { Footer } from './Footer'
import GretaCard from './GretaCard'
import HomePage from './HomePage'
import VeganenCard from './VeganenCard'


export const LandingPage = () => {
  return (
    <>
    
    <Navbar />
    <div style={{
        height: "3697px",
        width: "390px",
        
    }}>
    
    <HomePage />
    <EkonomenCard />
    <GretaCard />
    <VeganenCard />
    <Footer/>
    
    </div>
    </>
  )
}
