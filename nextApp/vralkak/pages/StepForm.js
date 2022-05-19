import React from 'react'
import { MulitStepForm } from '../components/FormStep/MultiStepForm'
import { Navbar } from '../components/Navbar/Navbar'
import { Progressbar } from '../components/Progressbar/Progressbar'

export default function StepForm(){
return (
  <>
  <Navbar />
    <Progressbar />
  <MulitStepForm />
  </>
)
}
