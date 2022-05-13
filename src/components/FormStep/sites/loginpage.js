import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ProgressBar from '../../Progressbar/Progressbar'
import {LogIn} from '../step/LogIn'

export default function loginpage() {
  return (
    <>
    <Navbar />
    <ProgressBar />
    <LogIn />
    </>
  )
}
