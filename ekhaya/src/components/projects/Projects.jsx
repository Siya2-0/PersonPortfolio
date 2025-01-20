
import React from 'react';
import "./Projects.css";
import ProjectTile from './projectTile/ProjectTile';

export default function Projects() {
    return (
      <div className='Project'>
     
      <div className="bg-[#F5F5F5] sticky rounded-3xl top-16 z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:content-[''] after:outline-1 after:outline-[#E6E6E6] after:outline after:-outline-offset-2 after:rounded-3xl px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20" style="top:calc(64px + 0px)">
        <div class=" lg:grid lg:grid-cols-2 lg:gap-16">
          <div class="lg:pb-16">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm tracking-wider font-light text-[#A3a3a3]">2024</div>
                <h3 class="text-2xl mt-2 md:mt-5 md:text-4xl">Pabi-Ecommerce</h3></div>
                <span class=" lg:hidden">
                <a href="https://github.com/Thati05/Pabi" target="_blank" rel="noopener noreferrer">
                <button>
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub Icon" width="35" height="35"> </img>
                </button>
                </a>
                </span>
                </div>
       
                <div class="text-[#737373] mt-4 md:mt-5 text-sm md:text-base">An exploration of 3D modeling using Blender and Three.js, integrating GSAP animations for interactive experiences.</div>
                <div class=" lg:flex lg:flex-row items-center lg:gap-5 ">
                  <div><a href="https://pabi.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button class="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 lg:w-auto px-6">
                    <span>Visit Live Site</span>
                    <img alt="Arrow Up Right Icon" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrowupright.06903fe6.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrowupright.06903fe6.png&amp;w=48&amp;q=75 2x" src="../"> </img>
                    </button></a></div><span class=" mt-9 max-lg:hidden"><a href="https://github.com/Thati05/Pabi" target="_blank" rel="noopener noreferrer"><button>
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub Icon" width="35" height="35"> </img></button></a>
                      </span>
                      </div></div>
                      <div class=" relative"><video class="rounded-[12px]   lg:ml-4 -mb-4 mt-8  lg:mt-1 border lg:absolute lg:h-full  border-[#E6E6E6] lg:w-auto lg:max-w-none " autoplay="" loop="" muted="">Your browser does not support the video tag.</video></div></div></div>
      </div>
    );
  }