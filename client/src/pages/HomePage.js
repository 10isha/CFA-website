import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import NavbarComponent from '../components/NavbarComponent'
import SideBar from '../components/SideBar'
export default function HomePage() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  return (
    <>
    <div className='fixed top-0 left-0 w-full'>
    <NavbarComponent/></div>
    <div className='flex flex-row mt-20'>
    <SideBar setSelectedKeys={setSelectedKeys}/>
    <AccordionComponent selectedKeysSideBar={selectedKeys}/>
    </div>
   </>
  )
}
