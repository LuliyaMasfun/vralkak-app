import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import {login} from '../components/FormStep/step/login'
import {signup} from '../components/FormStep/step/signup'

import EkonomenCard from '../components/LandingPage/EkonomenCard'
import GretaCard from '../components/LandingPage/GretaCard'
import VeganenCard from '../components/LandingPage/VeganenCard'

import Navbar from '../components/Navbar/Navbar';
import HomePage from '../components/LandingPage/HomePage'
import { LandingPage } from '../components/LandingPage/LandingPage';
import {StepForm} from './StepForm/StepForm'
import { MulitStepForm } from '../components/FormStep/MultiStepForm';




function App() {
  return (
    <>
    
    <LandingPage/>
    
    {/* <Route exact path="/" component={LandingPage} />
    <Route exact path="/ekonomen" component={EkonomenCard} />
    <Route exact path="/greta" component={GretaCard} />
    <Route exact path="/veganen" component={VeganenCard} />
    <Route exact path="/checkout" component={MulitStepForm} />
     */}
    </>
   
  )
}

export default App;

