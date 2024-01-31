// import MaterialIcon, { colorPalette } from "material-icons-react";
import React from "react";
import Icon from '@mui/material/Icon';
// <link
//   rel="stylesheet"
//   href="https://fonts.googleapis.com/icon?family=Material+Icons"
// />
// import '../index.css';
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
export default function  Content() {

    return (
      <div id="about" className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-8 lg:py-20">
        <div className="text-5xl font-bold subpixel-antialiased mb-20">About The Course</div>
        
        <div className="flex flex-col lg:flex-row ">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {/* <MaterialIcon size='large' icon="psychology alt" />   */}
            <div className="flex flex-row gap-2 -mb-8">
            <Icon sx={{ fontSize: 60 }}>quizicon</Icon>Why Data</div>
            <br></br>
              <span className=" inline-block text-deep-purple-accent-400">
                Fusion?
              </span>
            </h2>
           
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
            To simplify the overwhelming array of paid and free online courses in Data Science, we have meticulously compiled
            a curated list of topics from more than 25 websites. This carefully crafted roadmap aims to guide our community 
            through a streamlined learning path within a span of two months.
            </p>
          </div>
        </div>
        <Divider className="my-full mt-16" />


        <div className="flex flex-col lg:flex-row pt-4 ">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {/* <MaterialIcon size='large' icon="psychology alt" />   */}
            <div className="flex flex-row gap-2 -mb-8">
            <Icon sx={{ fontSize: 60 }}>library_add_check_icon</Icon>What does it</div>
            <br></br>
              <span className=" inline-block text-deep-purple-accent-400">
                Cover?
              </span>
            </h2>
           
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
            At its core, Data Science involves deriving valuable insights from vast datasets. This certification course in Data Science,
            conducted online, focuses on key principles such as Python programming, Machine Learning, Data Cleaning, and Data Analysis.
            Participants will gain a comprehensive understanding of fundamental concepts and stay updated on recent developments, 
            covering both Supervised and Unsupervised machine learning. Moreover, the course introduces participants to cutting-edge
              tools and algorithms currently utilized in the industry.
            </p>
          </div>
        </div>
        <Divider className="my-full mt-16" />


        <div className="flex flex-col lg:flex-row pt-4 ">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {/* <MaterialIcon size='large' icon="psychology alt" />   */}
            <div className="flex flex-row gap-2 -mb-8">
            <Icon sx={{ fontSize: 60 }}>people_alt_icon</Icon>Who We</div>
            <br></br>
              <span className=" inline-block text-deep-purple-accent-400">
                Are?
              </span>
            </h2>
           
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700">
            
              Conducted by the Consulting,Finance & Analytics Club at IIT Indore during the winter, this course,
               extends support to over 25,000 students 
               and professionals annually. Initially designed to train IIT Indore students.
            </p>
          </div>
        </div>

      </div> 
      
    );
  };