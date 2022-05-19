
import React from 'react'
import Navbar from '../Navbar/Navbar'
import EkonomenCard from './EkonomenCard'
import GretaCard from './GretaCard'
import HomePage from './HomePage'
import VeganenCard from './VeganenCard'

export const LandingPage = () => {
  return (
    <>
    
    <Navbar />
    <div style={{
        height: "3316px",
        width: "390px"
    }}>
    <HomePage />
    <EkonomenCard />
    <GretaCard />
    <VeganenCard />
    </div>
    </>
  )
}
