import React from 'react';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import {Route, Link, Router} from 'react-router-dom';



function App() {
  return (
    <>
     
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={LoginPage} />
    
    </>
   
  )
}

export default App;
