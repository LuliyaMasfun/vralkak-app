import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EkonomenCard from './components/EkonomenCard';
import GretaCard from './components/GretaCard';
import VeganenCard from './components/VeganenCard';
import GuidePage from './components/GuidePage';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/LoginPage" component={LogInPage} />
        <Route path="/SignUpPage" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
    
    
    
    
    
    {/* 
    <HomePage/>
    <EkonomenCard/>
    <GretaCard/>
    <VeganenCard/> */}
    
    </>
    
  )
}

export default App;
