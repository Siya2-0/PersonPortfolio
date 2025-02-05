import React, { useEffect } from 'react';
import "./Cards.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000) });

        gsap.ticker.lagSmoothing(0);

        const pinnedSection = document.querySelector(".pinned");
        const cardsSection=document.querySelector(".cards")
        const startAnimation=document.querySelector(".container")
        const stickyHeader = document.querySelector(".sticky-header");
        const cards = document.querySelectorAll(".card");
        const progressBarContainer = document.querySelector('.progress-bar');
        const progressBar = document.querySelector('.progress');
        const indicesContainer = document.querySelector('.indices');
        const indices = document.querySelectorAll('.index');
        const cardCount = cards.length;
        const pinnedHeight = window.innerHeight * (cardCount + 1);
        const startRotation = [0, 5, 0, -5];
        const endRotation = [-10, -5, 10, 5];
        const progressColors = ["#ecb74c", "#7dd8cd", "#e0ff57", "#7dd8cd"];

       
      
        cards.forEach((card, index) => {
            gsap.set(card, { rotation: startRotation[index] });
        });

        let isProgressBarVisible = false;
        let currentActiveIndex = -1;

        function animateIndexOpacity(newIndex) {
            if (newIndex !== currentActiveIndex) {
                indices.forEach((index, i) => {
                    gsap.to(index, {
                        opacity: i === newIndex ? 1 : 0.25,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                });
                currentActiveIndex = newIndex;
            }
        }

        function showProgressAndIndices() {
            gsap.to([progressBarContainer, indicesContainer], {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });

            isProgressBarVisible = true;
        }

        function hideProgressAndIndices() {
            gsap.to([progressBarContainer, indicesContainer], {
                opacity: 0, 
                duration: 0.5,
                ease: "power2.out"
            });

            isProgressBarVisible = false;
            animateIndexOpacity(-1);
        }

         ScrollTrigger.create({
            trigger: pinnedSection,
            start: "top top",
            end: `${pinnedHeight}`,
            //end: `+=400vh`, 
            pin: true,
            pinSpacing: true,
            onLeave: () => { hideProgressAndIndices(); },
            onEnter:() =>{showProgressAndIndices();},
            onEnterBack: () => {
                showProgressAndIndices();
            },
            onUpdate: (self) => {
                const progress = self.progress * (cardCount +1);
                const currentCard = Math.floor(progress);
                // const pinSpacer = document.querySelector('.pin-spacer');
                // if (pinSpacer) {
                //     pinSpacer.style.height = `${pinnedHeight}px`;
                // }
                if (progress <= 1) {
                    gsap.to(stickyHeader, {
                        opacity: 1 - progress,
                        duration: 0.1,
                        ease: "none",
                    });
                } else {
                    gsap.set(stickyHeader, {
                        opacity: 0,
                    });
                }

                if (progress > 1 && !isProgressBarVisible) {
                    showProgressAndIndices();
                } else if (progress <= 1 && isProgressBarVisible) {
                    hideProgressAndIndices();
                }
                let progressHeight = 0;
                let colorIndex = -1;

                if (progress > 1) {
                    progressHeight = ((progress - 1) / cardCount) * 100;
                    colorIndex = Math.min(Math.floor(progress - 1), cardCount - 1);
                }
                gsap.to(progressBar, {
                    height: `${progressHeight}%`,
                    duration: 0.3,
                    ease: "power1.out",
                    backgroundColor: progressColors[colorIndex],
                });
                if (isProgressBarVisible) {
                    animateIndexOpacity(colorIndex);
                }

                cards.forEach((card, index) => {
                    if (index < currentCard) {
                        gsap.set(card, {
                            top: "50%",
                            rotation: endRotation[index],
                        });
                    } else if (index === currentCard) {
                        const cardProgress = progress - currentCard;
                        const newTop = gsap.utils.interpolate(150, 50, cardProgress);
                        const newRotation = gsap.utils.interpolate(
                            startRotation[index],
                            endRotation[index],
                            cardProgress
                        );
                        gsap.set(card, {
                            top: `${newTop}%`,
                            rotation: newRotation,
                        });
                    } else {
                        gsap.set(card, {
                            top: "150%",
                            rotation: startRotation[index],
                        });
                    }
                });
            },
         });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        
       <section className='pinned'>
            <div className='sticky-header'>
                <h1>Projects</h1>
            </div>
       
            <div className='progress-bar'>
                <div className='progress'></div>
            </div>
            
            <div className="indices">
                <div className='index' id='index-1'>
                    <p>Title</p>
                </div>
                <div className='index' id='index-2'>
                    <p>Title</p>
                </div>
                <div className='index' id='index-3'>
                    <p>Title</p>
                </div>
                <div className='index' id='index-4'>
                    <p>Title</p>
                </div>
            </div>
        
            <div className="card" id="card-1"> 
                <div className="card-phase"><p>Phase 01</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-2">
                <div className="card-phase"><p>Phase 02</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-3">
                <div className="card-phase"><p>Phase 03</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-4">
                <div className="card-phase"><p>Phase 04</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
        
            
   
        </section>
    );
}
// import React from 'react';
// import "./Cards.css";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from 'lenis';


// gsap.registerPlugin(ScrollTrigger);
// export default function Cards() {
    
//     const lenis= new Lenis();
//     lenis.on("scroll", ScrollTrigger.update);
//     gsap.ticker.add((time)=>{lenis.raf(time * 1000)});

//     gsap.ticker.lagSmoothing(0);

//     const pinnedSection =document.querySelector(".pinned");
//     const stickyHeader = document.querySelector(".sticky-header");
//     const cards=document.querySelectorAll(".cards");
//     const progressBarContainer =document.querySelector('.progress-bar');
//     const progressBar = document.querySelector('.progress');
//     const indicesContainer = document.querySelector('.indices');
//     const indices= document.querySelectorAll('.index');
//     const cardCount = cards.length;
//     const pinnedHeight = window.innerHeight * (cardCount +1 );
//     const startRotation = [0, 5, 0 -5];
//     const endRotation = [-10, -5, 10, 5];
//     const progressColors = ["#ecb74c", "#7dd8cd", "#e0ff57", "#7dd8cd"];

//     cards.forEach((card, index)=>{
//         gsap.set(card, {rotation:startRotation[index]});
//     });

//     let isProgressBarVisible=false;
//     let currentActiveIndex = -1;

//     function animateIndexOpacity(newIndex){
//         if(newIndex !== currentActiveIndex)
//         {
//             indices.forEach((index, i)=>{
//                 gsap.to(index,{
//                     opacity: i=== newIndex ? 1: 0.25,
//                     duration: 0.5,
//                     ease: "power2.out",
//                 } );
//             });
//             currentActiveIndex=newIndex;
//         }    
//     }

//     function showProgressAndIndices()
//     {
//         gsap.to([progressBarContainer, indicesContainer], {
//             opacity: 1,
//             duration:0.5,
//             ease: "power2.out"
//                 });

//         isProgressBarVisible=true;
//     }
//     function hideProgressAndIndices()
//     {
//         gsap.to([progressBarContainer, indicesContainer], {
//             opacity: 0,
//             duration:0.5,
//             ease: "power2.out"
//                 });

//         isProgressBarVisible=false;
//         animateIndexOpacity(-1);
//     }

//     ScrollTrigger.create({
//         trigger: pinnedSection,
//         start: "top top",
//         end: `+=${pinnedHeight}`,
//         pin: true,
//         pinSpacing: true,
//         onLeave: ()=>{hideProgressAndIndices();},
//         onEnterBack: ()=>{
//             showProgressAndIndices();
//         },
//         onUpdate: (self)=>{
//             const progress= self.progress * (cardCount+1);
//             const currentCard= Math.floor(progress);
//             if(progress<=1)
//             {
//                 gsap.to(stickyHeader, {
//                     opacity: 1- progress,
//                     duration: 0.1,
//                     ease: "none",
//                 });
//             }
//             else{
//                 gsap.set(stickyHeader, {
//                     opacity: 0,
//                 });

//             } 

//             if(progress>1 && !isProgressBarVisible)   
//             {
//                 showProgressAndIndices();
//             }
//             else if(progress<=1 && isProgressBarVisible)
//             {
//                 hideProgressAndIndices();
//             }
//             let progressHeight=0;
//             let colorIndex = -1;
            
//             if(progress > 1)
//             {
//                 progressHeight=((progress-1)/cardCount)*100;
//                 colorIndex= Math.min(Math.floor(progress-1), cardCount-1);
//             }   
//             gsap.to(progressBar, {
//                 height: `${progressHeight}`,
//                 duration: 0.3,
//                 ease: "power1.out",
//                 backgroundColor: progressColors[colorIndex],
//             }); 
//             if(isProgressBarVisible)
//             {
//                 animateIndexOpacity(colorIndex);
//             }   
            
//             cards.forEach((card, index)=>{
//                if(index< currentCard)
//                {
//                 gsap.set(card, {
//                     top: "50%",
//                     rotation: endRotation[index],
//                 });
//                }
//                else if(index=== currentCard)
//                {
//                 const cardProgress = progress - currentCard;
//                 const newTop = gsap.utils.interpolate(150, 50, cardProgress);
//                 const newRotation = gsap.utils.interpolate(
//                     startRotation[index],
//                     endRotation[index],
//                     cardProgress
//                 );
//                 gsap.set(card, {
                  
//                     top: `${newTop}`,
//                     rotation: newRotation,
//                 });

//                } 
//                else{
//                 gsap.set(card, {
                  
//                     top: "150%",
//                     rotation: startRotation[index],
//                 });

//                }
//             });
//         },
//     });

//     return (
//         <section className='pinned'>
//         <div className='sticky-header'>
//             <h1>Roadmap</h1>
//         </div>

//         <div className='progress-bar'>
//             <div className='progress'></div>
//         </div>

//         <div className='index' id='index-1'> 
          
//             <p>Title</p>
//         </div>
//         <div className='index' id='index-2'>
            
//             <p>Title</p>

//         </div>
//         <div className="card" id="card-1">
//             <div className="card-phase"><p>Phase 01</p></div>
//             <div className="card-title">
//                 <p>Date</p>
//                 <h1><span>Title</span></h1>

//             </div>
//         </div>
//         <div className="card" id="card-2">
//         <div className="card-phase"><p>Phase 01</p></div>
//             <div className="card-title">
//                 <p>Date</p>
//                 <h1><span>Title</span></h1>

//             </div>
            
//         </div>

//         </section>

//     );

// }