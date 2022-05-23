
import React from 'react'
import Navbar from '../Navbar/Navbar'
import EkonomenCard from './EkonomenCard'
import GretaCard from './GretaCard'
import HomePage from './HomePage'
import VeganenCard from './VeganenCard'
import InfoCard from './InfoCard'

export const LandingPage = () => {
  return (
    <>
    
    <Navbar />
    <div style={{
        height: "3670px",
        width: "390px"
    }}>
    <InfoCard />
    <HomePage />
    <EkonomenCard />
    <GretaCard />
    <VeganenCard />
    
    </div>
    </>
  )
}
