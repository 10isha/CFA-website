// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import eve1 from "../logos/Screenshot 2023-08-24 195250.png"
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Events = () => {
//   return (
//     <Carousel className='h-24'>
//       <div className='mx-auto max-w-[10%]'>
//          <img src={eve1} />
//          <p className="legend">Legend 1</p>
//        </div>
//        <div>
//          <img src="https://placehold.co/200x200" />
//          <p className="legend">Legend 2</p>
//        </div>
//       <div>
//       <img src="https://placehold.co/300x300" />
//       <p className="legend">Legend 3</p>
//      </div>
//    </Carousel>
//   );
// };
// export default Events

// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// const Events = () => {
//   return (
//     <CarouselProvider
//      naturalSlideWidth={100}
//      naturalSlideHeight={30}
//      totalSlides={3}
//     >

//     <Slider>
//       <Slide index={0}>

//         Slide 1
//         <div className="w-46  h-24">
//         <img src ={eve1}></img></div>




//         </Slide>
//       <Slide index={1}>Slide 2</Slide>
//       <Slide index={2}>Slide 3</Slide>
//     </Slider>

//     <ButtonBack>Back</ButtonBack>
//     <ButtonNext>Next</ButtonNext>
//    </CarouselProvider>
//   );
// };
// export default Events;



// Carousel.js

// Carousel.js

// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// const images = [
//    eve1,
//   'https://placekitten.com/601/300',
//   'https://placekitten.com/602/300',
// ]; // Replace with your own image URLs

// const Events = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative flex flex-row items-center w-full justify-center gap-24">
//       <button className=" top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={prevSlide}>
//         Prev
//       </button>

//       <div className="carousel-container flex flex-row  overflow-hidden w-1/2 shadow-2xl h-96 mx-auto">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             style={{
//               transform: `translateX(${-currentSlide * 100}%)`,
//             }}
//             className="w-full h-full transition-all duration-500"
//             src={image}
//             alt={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
//       <button className=" top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={nextSlide}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Events;





// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import stock from "../logos/1.png";
import kaggle from "../logos/Kaggle Competition- Time Series Prediction of Covid-19 Death Data.png"
import analytic from "../logos/Copy of NLP.png"
import finance from "../logos/Screenshot 2023-08-24 195310.png"

export default function Events() {


  return(
<div className = "flex flex-col gap-y-12  lg:flex-col lg:gap-y-24 lg:mx-24 mx-2 shadow-2xl  scroll-smooth " >
    <div className="lg:w-full lg:h-[500px]  gap-12 flex lg:flex-row flex-col md:h-[800px] align-center shadow-2xl items-center px-8  mt-2 ">
        <img
                  className="md:h-[300px] lg:py-2 mt-4 lg:h-full h-[200px]  object-cover"
                  src={stock}
                  alt={`Slide ${1}`}
                />
                <div className="flex flex-col md:flex-col  w-full">
              <div className="md:text-2xl font-bold mb-4 text-sm  ">STOCKMARKET MASTERCLASS:</div>  
            <div className="text-xs text-justify">
    The "Stock Market Masterclass - The Secrets to Win the Race of Money" is a comprehensive educational program designed to equip individuals with the knowledge and skills necessary for success in the stock market. The masterclass covers key objectives, including understanding the stock market, risk management, technical and fundamental analysis, portfolio diversification, trading psychology, practical application, and staying abreast of market trends. Participants can expect a hands-on approach, gaining insights into effective investment strategies, risk mitigation, and navigating the complexities of the stock market to achieve their financial goals.
    </div></div>   
      
    </div>
    <div className="lg:w-full lg:h-[500px]  gap-12 flex lg:flex-row flex-col md:h-[800px] align-center shadow-2xl items-center px-8  mt-2 ">
   
              <div className="flex flex-col md:flex-col w-full">
            <div className="md:text-2xl font-bold mb-4 text-sm ">DATA ANALYTICS WORKSHOP:</div>  
          <div className="text-xs text-justify">
          The Data Analytics Workshop offers a condensed, hands-on learning experience for participants keen on mastering analytics. Covering key concepts such as data interpretation, statistical analysis, and visualization tools, the workshop empowers attendees with practical skills. Ideal for professionals seeking to enhance their analytical capabilities, this workshop provides valuable insights for effective data-driven decision-making.
    </div></div>

    <img
                className="md:w-[400px] w-[200px]  py-2 "
                src={analytic}
                alt={`Slide ${1}`}
              />
    
      </div> 



    <div className="lg:w-full lg:h-[500px]  gap-12 flex lg:flex-row flex-col md:h-[800px] align-center shadow-2xl items-center px-8  mt-2  ">
    <img
                className="md:h-[300px] lg:py-2  lg:h-full h-[200px]  object-cover  "
                src={finance}
                alt={`Slide ${1}`}
              />
              <div className="flex flex-col md:flex-col w-full">
            <div className="md:text-2xl font-bold mb-4 text-sm ">  Finance Discussion:</div>  
          <div className="text-xs text-justify">
In the Finance Discussion, the question "Is your portfolio red?" prompts reflection on investment performance. A 'red' portfolio signifies losses, sparking dialogue on market trends, risk management, and strategy adjustments. Participants may share experiences, insights, and coping mechanisms during downturns. This discussion not only delves into financial outcomes but also cultivates a supportive community where investors can exchange ideas to navigate challenging market conditions, potentially leading to informed decisions and improved portfolio resilience.

    </div></div> </div>




<div className="lg:w-full lg:h-[500px]  gap-12 flex lg:flex-row flex-col md:h-[800px] align-center shadow-2xl items-center px-8  mt-2 ">

<div className="flex flex-col md:flex-col w-full">
<div className="md:text-2xl font-bold mb-4 text-sm ">Kaggle competition:</div>  
<div className="text-xs text-justify">
The Kaggle Competition on Timeseries Prediction of COVID-19 Death Data challenges data enthusiasts to apply their analytical skills
in forecasting pandemic outcomes. Participants will grapple with timeseries data, employing statistical models and machine learning
algorithms to predict COVID-19 death rates. This competition serves as a dynamic platform for honing predictive modeling expertise,
fostering innovation in the fight against the pandemic. Entrants will engage in real-world problem-solving, contributing to the global
effort to comprehend and manage the impact of COVID-19. The competition not only tests analytical prowess but also encourages
collaborative solutions to address the evolving challenges posed by the pandemic's timeseries data.
</div>
</div>

<img
            className="md:h-[300px] lg:py-2  lg:h-full h-[200px]  object-cover "
            src={kaggle}
            alt={`Slide ${1}`}
          />
</div>



</div>




  );
};




