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

import Footer from '../components/Footer'
import MainNav from '../components/mainpagenavbar';
import  Screen  from '../components/mainpagescreen';


export default function MainPage() {
  return (

    <>
        <MainNav/>
        <Screen/>
        <Footer/>


    
    </>
    
  )
}

