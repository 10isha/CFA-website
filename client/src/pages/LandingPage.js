import React, {useState} from 'react'
import {Nav} from '../components/Nav'
import SideSection from '../components/SideSection'
import {Statistic} from '../components/Statistic'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div>
      <Nav />
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

