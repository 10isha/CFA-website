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
      <br/><br/>
      <SideSection />
      <br/><br/>
      <h1 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 px-5'>SA'23 Statistics</h1>
      <Statistic />
      <br/><br/>
      <h1 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 px-5 -mb-8'>Testimonials</h1>
      <Testimonial />
      <br/><br/>
      <Footer />
    </div>
  )
}
