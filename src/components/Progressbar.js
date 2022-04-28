import React from 'react'
import './Progressbar.css'
import './Body.css'

export default function Progressbar() {
  return (
    <div className="progress-bar">
    <div className="step">
        <p className="step-name">
         Kasse
         </p>
        <div className="bullet">
         <span className="step-number">1</span>
        </div>
        <div className="check-mark"></div>
    </div>

    <div className="step">
     <p className="step-name">
         Konto
     </p>
     <div className="bullet">
         <span className="step-number">2</span>
     </div>
     <div className="check-mark"></div>
     
    </div>
    <div className="step">
     <p className="step-name">
         Leverans
     </p>
     <div className="bullet">
         <span className="step-number">3</span>
     </div>
     <div className="check-mark"></div>
    </div>
    <div className="step">
     <p className="step-name">
         Betalning
     </p>
     <div className="bullet">
         <span className="step-number">4</span>
     </div>
     <div className="check-mark"></div>
    </div>
</div>

  )
}
