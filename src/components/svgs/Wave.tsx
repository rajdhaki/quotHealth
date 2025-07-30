"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Wave = () => {
  const svgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.set("#wave1", { opacity: 1 })
      .set("#wave2", { opacity: 0 })
      .set("#wave1", {
        attr: {
          x1: "-100%",
          x2: "0%"
        }
      })
    
    .to("#wave1", {
      duration: 2,
      attr: {
        x1: "100%",
        x2: "200%"
      },
      ease: "power2.inOut"
    })
    

    .to("#wave1", { duration: 1, opacity: 0 }, "-=2")
    .to("#wave2", { duration: 1, opacity: 1 }, "-=2")
    .set("#wave2", {
      attr: {
        x1: "-100%",
        x2: "0%"
      }
    })

    .to("#wave2", {
      duration: 2,
      attr: {
        x1: "100%",
        x2: "200%"
      },
      ease: "power2.inOut"
    })
    
    .to("#wave2", { duration: 1, opacity: 0 }, "-=2")
    .to("#wave1", { duration: 1, opacity: 1 }, "-=2")
    .set("#wave1", {
      attr: {
        x1: "-100%",
        x2: "0%"
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className='w-full lg:-mt-14'>
      <svg 
        ref={svgRef}
        className='w-full h-full' 
        width="1850" 
        height="250" 
        viewBox="0 0 1440 191" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >

        <path 
          id="wave1"
          d="M701.732 111.722C348.964 -7.07464 91.0959 39.5658 -1 89.0645V48.6289C14.0156 39.5658 291.304 -69.4464 701.732 71.984C1086.13 204.446 1329.88 140.13 1440 82.2656V128.454C1376.43 160.524 1142.69 260.219 701.732 111.722Z" 
          fill="url(#paint0_linear_455_213)" 
        />
        
        <path 
          id="wave2"
          d="M701.732 111.722C348.964 -7.07464 91.0959 39.5658 -1 89.0645V48.6289C14.0156 39.5658 291.304 -69.4464 701.732 71.984C1086.13 204.446 1329.88 140.13 1440 82.2656V128.454C1376.43 160.524 1142.69 260.219 701.732 111.722Z" 
          fill="url(#paint1_linear_455_214)" 
        />
        
        <defs>

          <linearGradient 
            id="paint0_linear_455_213" 
            x1="-1" 
            y1="95.5" 
            x2="1440" 
            y2="95.5" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#81E089" />
            <stop offset="1" stopColor="#07C4B8" />
          </linearGradient>
          
          <linearGradient 
            id="paint1_linear_455_214" 
            x1="-1" 
            y1="95.5" 
            x2="1440" 
            y2="95.5" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07C4B8" />
            <stop offset="1" stopColor="#81E089" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Wave