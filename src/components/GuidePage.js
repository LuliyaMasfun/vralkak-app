import React from 'react';
import './Body.css';
import './Guide.css';
import GuidePicture1 from './assets/tutorialImg1.png';
import GuidePicture2 from './assets/tutorialImg2.png';
import GuidePicture3 from './assets/tutorialImg3.png';
import GuideLogo from './assets/logoTutorial.png';


function GuidePage() {
  return (
    <div class="tutorialCard">
            <div class="pageTitle">Såhär funkar det</div>
            <div class="descText">Kom igång med 3 enkla steg</div>
            <div class="tutorialDescription1"><img class="pictureToTutorial1"src={GuidePicture1} /><span class="textToTutorial1">1. Beställ ditt vrålkäk</span></div>
            <div class="tutorialDescription2"><img class="pictureToTutorial2"src={GuidePicture2} /><span class="textToTutorial2">2. Släng ihop...</span></div> 
            <div class="tutorialDescription3"><img class="pictureToTutorial3"src={GuidePicture3} /><span class="textToTutorial3">3. Stapla upp i frysen!</span></div>

            <img class="logoTutorial"src={GuideLogo} onclick="location.href='LandingPage.html'"/>

    </div>
  )
}

export default GuidePage