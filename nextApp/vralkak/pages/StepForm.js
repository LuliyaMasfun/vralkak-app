import React from 'react'
import { MulitStepForm } from '../components/FormStep/MultiStepForm'
import { Navbar } from '../components/Navbar/Navbar'
import { Progressbar } from '../components/Progressbar/Progressbar'

const StepForm =()=>{
return (
  <>
  <Navbar />
    <Progressbar />
  <MulitStepForm />
  </>
)
}
export default StepForm;
