import React from 'react';
import logo from "../logos/cga_logo_png.png"
import Team from './Teamspage';
import Icon from '@mui/material/Icon';
// import Map1 from './Map1';
import Footer from './Footer';
import backgroundImage from "../logos/kedrion-case-study-arithmos-reporting-and-analytics-pharmacovigilance.png"
export default function Screen() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 from-10% via-white  to-teal-200 to-95%">
        <div className='flex flex-col md:flex-row'>
          <img src={logo} alt="logo" className="w-[40%] md:min-w-64   "></img>

          <div className='flex flex-col border-l-2 border-black gap-2 p-4 pl-8'>
            <div className='rounded-full text-white font-bold  bg-blue-600 font-bold w-fit p-1'>Welcome to the</div>
            <p className='text-6xl font-bold'>CFA CLUB</p>
            <p className='text-4xl font-bold mt-2'>IIT Indore</p>
            <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. </p>
          </div>
        </div>

      </div>

      <div id="about" className='bg-white shadow-xl md:mx-24'>
        <div className='font-bold text-4xl text-center mt-4 '>About Us</div>
        <div className='flex flex-col lg:flex-row mx-12 gap-12 mt-24 '>
          <div className='flex flex-col'>
            <div className='text-md font-bold mb-4'>Analytics</div>
            <div className='text-sm text-justify mb-12'>Consulting is a professional service provided by experts or consultants with specialized knowledge and experience
              in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems, improve performance
              , and achieve specific objectives Consulting is a professional service provided by experts or consultants with specialized knowledge
              and experience in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems,
              improve performance, and achieve specific objectives. Consultants are hired to provide advice, analysis, and recommendations to their
              clients based on their expertise</div>
          </div>


          <div className='flex flex-col'>
            <div className='text-md font-bold mb-4'>Consulting</div>
            <div className='text-sm text-justify mb-12'>Consulting is a professional service provided by experts or consultants with specialized knowledge and experience in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems, improve performance, and achieve specific objectives Consulting is a professional service provided by experts or consultants with specialized knowledge and experience in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems, improve performance, and achieve specific objectives. Consultants are hired to provide advice, analysis, and recommendations to their clients based on their expertise</div>
          </div>


          <div className='flex flex-col'>
            <div className='text-md font-bold mb-4'>Finance</div>
            <div className='text-sm text-justify mb-12'>Consulting is a professional service provided by experts or consultants with specialized knowledge and experience in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems, improve performance, and achieve specific objectives Consulting is a professional service provided by experts or consultants with specialized knowledge and experience in a particular field. The goal of consulting is to help individuals, businesses, or organizations solve problems, improve performance, and achieve specific objectives. Consultants are hired to provide advice, analysis, and recommendations to their clients based on their expertise</div>
          </div>


        </div>
      </div>



      <div className='flex flex-col md:flex-row mt-12' >
        <div
          className="bg-cover flex  left-0 bg-center h-[600px]  w-screen flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >



          <div className='flex flex-col border-l-4 border-white gap-2 p-4 pl-8 mt-24 ml-4'>

            <p className='text-6xl font-bold text-white'>WINTER ANALYTICS</p>
            <p className='text-4xl mt-2 text-white'>A PRIMER COURSE ON DATA SCIENCE AND MACHINE LEARNING</p>
            <div className='rounded-full text-white font-bold  bg-blue-600 font-bold w-fit p-1 px-4 hover:bg-blue-700 '><a href="/home">Register</a></div>

          </div>

        </div></div>

      

        <div id="event" className='text-4xl text-black font-bold w-full h-64 mt-12 mb-12 bg-white shadow-2xl text-center'>Events</div>



        <div id="ourteam" className=''>
          <Team />
        </div>




        <div id="contact" className='px-24  shadow-2xl flex flex-col justify-center align-center md:mx-24 mb-24'>
          <div className='text-4xl text-black font-bold mt-12 text-center w-full  '>Contact Us</div>
          <div className='flex flex-col lg:flex-row mt-12 w-full '>
            <div className='flex flex-col gap-y-4 mt-24'>
              <p className='text-sm text-black font-bold flex flex-row gap-1 '> <Icon sx={{ fontSize: 30 }}>call</Icon> CFA Club</p>
              <p className='text-sm text-black font-bold flex flex-row gap-1'><Icon sx={{ fontSize: 30 }}>call</Icon>565787565</p>
              <p className='text-sm text-black font-bold flex flex-row gap-1'><Icon sx={{ fontSize: 30 }}>mail</Icon>CFA@.iiti.ac.in</p>
              <p className='text-sm text-black font-bold flex flex-row gap-1'><Icon sx={{ fontSize: 30 }}>location_on</Icon>Indian Institute of Technology,Simrol,Indore,452020</p>
            </div>
            {/* <Map1/> */}

            <div className="w-full flex justify-center align-center mb-24 mt-12">
              <iframe id="iframemap" src="https://maps.google.com/maps?q=iit+indore%2Csimrol&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="300" frameborder="0" scrolling="no">
              </iframe>
            </div>
            <div>


            </div>


          </div>
          </div>
     
      
      





















    </>
  );
};

