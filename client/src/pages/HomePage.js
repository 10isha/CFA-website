import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import NavbarComponent from '../components/NavbarComponent'
import SideBar from '../components/SideBar'
export default function HomePage() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  return (
    <>
    <NavbarComponent/>
    <div className='flex flex-row'>
    <SideBar setSelectedKeys={setSelectedKeys}/>
    <AccordionComponent selectedKeysSideBar={selectedKeys}/>
    </div>
   </>
  )
}
