import React, {useState} from 'react'
import {Nav} from '../components/Nav'
import backgroundImage from "../logos/david-becker-crs2vlkSe98-unsplash.jpg"
import backgroundImage2 from "../logos/—Pngtree—3d rendered concept illustrating data_5749893.jpg"

import {
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import SideSection from '../components/SideSection'
import {Statistic} from '../components/Statistic'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Content from "../components/content"

export default function LandingPage() {
  return (
    <>
    <div className='relative'>
    {/* <div
      className="bg-cover top-0 absolute -z-20 left-0 bg-center opacity-75 h-[900px] w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    ></div> */}
    <div>
      <Nav />
      <br/><br/>
      <SideSection />
      <br/><br/>
      <Content/>
      <br></br>
      <Divider className="my-full" />
      <h1 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 text-center px-5'>SA'23 STATISTICS</h1>
      <Statistic />
      <br/><br/>
      <Divider className="my-full" />
      <h1 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 px-5 text-center  -mb-8'>TESTIMONIALS</h1>
      <Testimonial />
      <Divider className="my-full" />
      <br/><br/>
      <Footer />
    </div></div></>
    
  )
}

