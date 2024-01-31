// Navbar.js

import React from "react";
import logo from "../logos/cga_logo_png.png"
import flux from "../logos/neon-1.png"
export default function NavbarComponent() {
  return (
    <div >
   
    <div className=" bg-slate-800 p-4 text-white flex items-center space-x-4 z-10 w-full md:h-20 sm:h-32 ">
      <img src={logo} alt="logo" className="w-24 m-4 "></img>
          <div className="flex flex-col   border-r-2 pr-2 ml-4 ">
            <p >Consulting, Finance, and Analytics</p>
            <p>IIT Indore</p>
          </div>
          <p className="text-xl  "> Course Dashboard | DataFusion </p>
          <div className="lg:pl-[25%] md:pl-0 ">
      <img src={flux} alt="logo" className="w-32 md:w-20 "></img>  </div>  
          
   
    
    </div>
   
  </div>
  
  );
};

// export default Navbar;