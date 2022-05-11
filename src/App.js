import React from 'react';
import {login} from './components/FormStep/step/login'
import {signup} from './components/FormStep/step/signup'
import {Route, Link, Router} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EkonomenCard from './components/LandingPage/EkonomenCard'
import GretaCard from './components/LandingPage/GretaCard'
import VeganenCard from './components/LandingPage/VeganenCard'
import { MulitStepForm } from './components/FormStep/MultiStepForm';




function App() {
  return (
    <>
     
    <Route exact path="/" component={LandingPage} />
    
    <Route exact path="/ekonomen" component={EkonomenCard} />
    <Route exact path="/greta" component={GretaCard} />
    <Route exact path="/veganen" component={VeganenCard} />
    <Route exact path="/checkout" component={MulitStepForm} />
    
    </>
   
  )
}

export default App;
