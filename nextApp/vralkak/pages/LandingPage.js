import React from 'react'
import Navbar from '../components/Navbar/Navbarmponents/Navbar/Navbar'
import HomePage from '../components/LandingPage/HomePages/LandingPage/HomePage'
import EkonomenCard from '../components/LandingPage/EkonomenCardndingPage/EkonomenCard'
import GretaCard from '../components/LandingPage/GretaCard/LandingPage/GretaCard'
import VeganenCard from '../components/LandingPage/VeganenCardandingPage/VeganenCard'


export default function LandingPage() {
  return (
    <>
    <Navbar />
    <HomePage />
    <EkonomenCard />
    <GretaCard />
    <VeganenCard />
    
    
    </>
  )
}
