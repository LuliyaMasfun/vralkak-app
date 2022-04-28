import React from 'react';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import {Route, Link, Router} from 'react-router-dom';
import EkonomenCard from './components/EkonomenCard';
import GretaCard from './components/GretaCard';
import VeganenCard from './components/VeganenCard';
import SignupPage from './components/SignupPage';



function App() {
  return (
    <>
     
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/ekonomen" component={EkonomenCard} />
    <Route exact path="/greta" component={GretaCard} />
    <Route exact path="/veganen" component={VeganenCard} />
    <Route exact path="/signup" component={SignupPage} />
    
    </>
   
  )
}

export default App;
