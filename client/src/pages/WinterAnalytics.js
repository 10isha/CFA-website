import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import NavbarComponent from '../components/NavbarComponent'
import SideBar from '../components/SideBar'
export default function Course() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-20'>
    <NavbarComponent/></div>
    <div className='flex flex-row mt-20 bg-gray-200'>
     
    <SideBar setSelectedKeys={setSelectedKeys}/>
    <AccordionComponent selectedKeysSideBar={selectedKeys}/>
    </div>
   </>
  )
}
