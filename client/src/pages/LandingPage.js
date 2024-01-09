import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import SideSection from '../components/SideSection'
import Content from '../components/content'
import '../index.css'
import Icon from '@mui/material/Icon';
{/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/> */}


export default function LandingPage() {
  return (
    <div>
      <Nav />
     
     
      
      <br /><br />
      <SideSection />
      <Content />
    </div>
  )
}
