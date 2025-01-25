import React, { useEffect } from 'react';
import CanvasContainer from './canvas/CanvasContainer';
import Heading from './HomeLayouts/Heading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfoCard from './HomeLayouts/InfoCard';
import Horizontal from './HomeLayouts/Horizontal';

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the canvas-container on scroll
    gsap.to(".canvas-container", {
      scrollTrigger: {
        trigger: ".canvas-container",
        start: "top top", // start animation when the top of the element reaches the top of the viewport
        end: "bottom top", // end animation when the bottom of the element reaches the top of the viewport
        scrub: true, // ensures smooth and scroll-driven animation
        toggleActions: "restart pause reverse pause"
      },
      x: "50vw", // move 50% of the viewport width
      rotation: 0,
      duration: 10,
    });

    // Animate heading based on scroll position
    gsap.to(".heading", {
      scrollTrigger: {
        trigger: ".heading",
        start: "top top", // start when the top of the heading reaches the center of the viewport
        end: 'bottom top',
        scrub: true, // ensures smooth and scroll-driven animation
        toggleActions: "restart reverse reverse pause"
      },
      y: "-100vh", // move the heading offscreen
      rotation: 0,
      duration: 2,
    });
  }, []);

  return (
    <div className="bg-amber-500 h-[200vh] w-screen flex justify-start items-start font-extrabold text-white">
      <div className="canvas-container fixed w-full md:w-1/2 h-screen flex justify-center items-center bg-transparent">
        <CanvasContainer />
      </div>
       <div className=' flex justify-center items-center flex-col'>
          <div className="heading w-screen max-h-screen h-screen bg-transparent relative flex flex-col justify-between items-center">
              <Heading />
          </div>
         
          <div className=" w-screen max-h-screen h-screen bg-transparent relative flex flex-col justify-between items-center">
              <Horizontal/>
          </div>

          <div className="w-screen h-screen bg-transparent relative flex justify-start items-center">
              <InfoCard/>
           </div>
       </div>
    </div>
  );
}

export default Home;
