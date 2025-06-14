'use client'

import React, { useEffect } from 'react'
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from '@/public/assets/logos/logo-gr.png'

import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from 'next/image';



const navItems = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Properties",
        href: "#properties",
    },
    {
        label: "Locations",
        href: "#locations",
    },
    {
        label: "Activities",
        href: "#activities",
    },
    
]

const Header = () => {
const pathname = usePathname();
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const isHomePage = pathname === "/";
const [hasScrolled, setHasScrolled] = useState(false);
const { scrollY } = useScroll();
const [prevScrollY, setPrevScrollY] = useState(0);
const [isVisible, setIsVisible] = useState(true);
const [isOpen, setIsOpen] = useState(false)
const [topLineScope, topLineAnimate] = useAnimate()
const [bottomLineScope, bottomLineAnimate] = useAnimate()
const [navScope, navAnimate] = useAnimate()

useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mobileMenuOpen) {
      const scrollingUp = latest < prevScrollY;
      const shouldShow = scrollingUp || latest < 50;
      setIsVisible(shouldShow);

      if (latest > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (latest < 50) {
        setHasScrolled(false);
      }
    }
    setPrevScrollY(latest);
});

const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacitty: 0,
      height: 0,
    },
};

const navbarVariants = {
    initial: isHomePage
      ? {
          y: -100,
          opacity: 0,
        }
      : {
          y: 0,
          opacity: 1,
        },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        delay: isHomePage && !hasScrolled ? 1.8 : 0,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
};

useEffect(() => {
  if(isOpen){
    topLineAnimate([
      [
        topLineScope.current,
        {
          translateY: 4,
        }
      ],
      [
        topLineScope.current,
        {
          rotate: 45,
        }
      ],
    ]);
    
    bottomLineAnimate([
      [
        bottomLineScope.current,
        {
          translateY: -4,
        }
      ],
      [
        bottomLineScope.current,
        {
          rotate: -45,
        }
      ],
    ]);

    navAnimate(
      navScope.current,
      {
        height: "100%",
      },
      {
        duration: 0.7,
      }
    );

  } else {
    topLineAnimate([
      [
        topLineScope.current,
        {
          rotate: 0,
        }
      ],
      [
        topLineScope.current,
        {
          translateY: 0,
        }
      ]
    ]);

    bottomLineAnimate([
      [
        bottomLineScope.current,
        {
          rotate: 0,
        }
      ],
      [
        bottomLineScope.current,
        {
          translateY: 0,
        }
      ]
    ]);

    navAnimate(navScope.current,{height: 0})

  }

}, [isOpen]);

const handleClickNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  setIsOpen(false)

  const url = new URL(e.currentTarget.href);
  const hash = url.hash 

  const target = document.querySelector(hash);

  if(!target) return;
  target.scrollIntoView({ behavior: "smooth" })
}

  return (
    <AnimatePresence>
        <div className="fixed top-0 left-0 w-full h-0 overflow-hidden text-white bg-[black] z-10 " 
              ref={navScope}>
          <div className=' 2xl:max-w-screen-xl py-3 lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] mx-auto px-[20px] mt-20 flex flex-col'>
            {navItems.map(({ label, href }) => (
              <a href={href} key={label} className='border-b border-[#262525] border-dotted py-8 pr-3 group/nav-item relative isolate'
               onClick={handleClickNav}>
                <div className="flex items-center justify-between !max-w-full">
                  <span className="tracking-tight group-hover/nav-item:pl-4 transition-all duration-500 text-xl lg:text-2xl">{label}</span>

                  <div className="overflow-hidden size-5">
                    <div className="h-5 w-10 flex group-hover/nav-item:-translate-x-1/2 transition-transform duration-500">
                      <svg viewBox='0 0 24 24' 
                        fill='none' 
                        xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                        className='size-6 group-hover/nav:size-8 transition-all duration-500 '
                      >
                        <path strokeLinecap='round' 
                              strokeLinejoin='round'
                              d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                        /> 
                      </svg>
                      <svg viewBox='0 0 24 24' 
                        fill='none' 
                        xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                        className='size-6 group-hover/nav:size-8 transition-all duration-500 '
                      >
                        <path strokeLinecap='round' 
                              strokeLinejoin='round'
                              d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                        /> 
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute w-full bottom-0 -z-10 h-0 bg-[#0e0e0e] group-hover/nav-item:h-full transition-all duration-500  "></div>
              </a>
            ))}
          </div>
        </div>


        <motion.header
            key="navbar"
            animate={isVisible ? "visible" : "hidden"}
            variants={navbarVariants} 
            className='fixed top-0 left-0 w-full z-10 '
        >
          <div className="mx-4 ">

            <div className=' 2xl:max-w-screen-xl py-3 lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] items-center my-3 bg-[white] backdrop-blur ml-auto mr-auto px-[20px] rounded-[7px] border border-[#000000]'>
                <div className='flex justify-between items-center'>
                    <div className=' flex gap-2'>
                        <a href="/" className='flex gap-2 items-center'>
                        {/* <Image src={logo} alt='logo' className='dark:invert-0 w-[60px] ' /> */}
                            <span className='text-xl tracking-tighter font-semibold'>Limegroup</span>
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='hidden cursor-pointer ring-1 ring-black group text-[14px] tracking-tight relative text-black px-2 py-2 lg:inline-flex justify-center items-center h-[30px] w-[150px] gap-2'>
                            <div className="absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[150px] bg-black transition-all duration-300 group-hover:h-[30px]" />
                                <span className="group-hover:text-white">
                                    Finance
                                </span>
                        </button>

                        <div className='size-8 inline-flex items-center justify-center cursor-pointer border border-black rounded-full
                        ' onClick={() => setIsOpen(!isOpen)}>
                            <svg width="24" height="24" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/200/svg'>
                                <motion.rect x="3" 
                                      y="7" 
                                      width="18" 
                                      height="2" 
                                      fill='currentColor'
                                      ref={topLineScope}
                                      style={{ 
                                        transformOrigin: "12px 8px",
                                       }}
                                />
                                <motion.rect x="3" 
                                      y="15" 
                                      width="18" 
                                      height="2" 
                                      fill='currentColor'
                                      ref={bottomLineScope}
                                      style={{ 
                                        transformOrigin: "12px 16px",
                                       }}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </motion.header>
    </AnimatePresence>
  )
}

export default Header