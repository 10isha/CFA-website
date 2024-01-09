// Navbar.js

import React from "react";
import logo from "../logos/cga_logo_png.png"
export default function NavbarComponent() {
  return (
    <div >
   
    <div className=" bg-slate-800 p-4 text-white flex items-center space-x-4 z-10 w-full h-20 ">
      <img src={logo} alt="logo" className="w-24 m-4 "></img>
          <div className="flex flex-col   border-r-2 pr-2 ml-4 ">
            <p >Consultancy, Finance, and Analytics</p>
            <p>IIT Indore</p>
          </div>
          <p className="text-xl  ">Course Dashboard | Winter Analytics</p>
          
   
    
    </div>
   
  </div>
  
  );
};

// export default Navbar;