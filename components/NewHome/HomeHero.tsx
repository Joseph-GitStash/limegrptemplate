'use client'

import React, { useEffect } from 'react'
import Button from './Button'
import SplitType from 'split-type'
import { useAnimate, motion, stagger  } from 'framer-motion'
import useTextReveal from '@/hooks/useTextReveal'


const HomeHero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const [titlemScope, titlemAnimate] = useAnimate();

  useEffect(() => {
    // new SplitType(titleScope.current, {
    //   types: 'lines,words',
    //   tagName: 'span'
    // });

    // titleAnimate(
    //   titleScope.current.querySelectorAll('.word'),
    //   {
    //     transform: "translateY(0)"
    //   },
    //   {
    //     duration: 0.3,
    //     delay: stagger(0.1),
    //   }
    // )

    // new SplitType(titlemScope.current, {
    //   types: 'lines,words',
    //   tagName: 'span'
    // });

    // titlemAnimate(
    //   titlemScope.current.querySelectorAll('.word'),
    //   {
    //     transform: "translateY(0)"
    //   },
    //   {
    //     duration: 0.3,
    //     delay: stagger(0.1),
    //   }
    // )
  }, [])

    

  return (
    <div className=' text-black pb-[120px] h-[90vh] flex flex-col lg:mt-1 lg:flex-col !w-full justify-between'>
      
        <section className=''>
          
          <div className=' tracking-tighter font-semibold hidden text-6xl md:flex flex-col lg:justify-end'>
            <motion.h1
              initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5
                }}
              className=' flex flex-col'> 
                <span>The real estate advisors</span>
                <span>on uk and uae property</span>
                <span>acquistions and sales</span>
               </motion.h1>
          </div>

          <div className='tracking-tighter font-bold mt-12 text-5xl md:hidden flex-col lg:justify-end'>
            <motion.h1 
              initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5
                }}
              className=' '> 
              The real estate advisors on uk and uae property acquistions and sales
            </motion.h1>
            
          </div>
          
        </section>
        <section className='lg:flex justify-between'>
          <div className='flex gap-5 mr-[48px] lg:justify-end'>
            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.0
                }}
                className='hidden lg:flex'
              >
                <Button variant='background' 
                    iconAfter= {
                      <div className='overflow-hidden size-5'>
                        <div className='h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500'>
                          <svg strokeWidth="1.5" stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/200/svg' className='group-hover:text-white size-5'>
                            <path strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' />
                          </svg>
                          <svg strokeWidth="1.5" stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/200/svg' className='group-hover:text-white size-5'>
                            <path strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' />
                              </svg>
                            </div>
                          </div>}
                >
                  <div className='absolute bottom-0 right-0 -z-10 !mx-auto  h-[0px] w-[140px] bg-black transition-all duration-300 group-hover:h-[30px] '/>
                  <span className='text-[14px] tracking-tight group-hover:text-white'>View Properties</span>                          
                </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.0
              }}>
              <button className='ring-1 ring-black hidden group text-[14px] tracking-tight relative text-black px-2 py-2 lg:inline-flex justify-center items-center h-[30px] w-[150px] gap-2'>
                  <div className="absolute bottom-0 -z-10 right-0 !mx-auto h-[0px] w-[150px] bg-black transition-all duration-300 group-hover:h-[30px]" />
                  <span className=" group-hover:text-white">
                    Contact Us
                  </span>
              </button>
            </motion.div>
            
          </div>


          <div className='pb-4 font-normal text-[14px] tracking-tight lg:text-[15px] lg:justify-end lg:text-start flex flex-col'>

            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2
              }}>
              <h1 className='lg:flex lg:flex-col'>
                <span>We cover land property auctions, luxury properties, </span>
                <span>offmarket, estate agency and finance.</span>
              </h1>
            </motion.div>
            


            <div className='mt-3 mb-2 lg:hidden flex flex-row gap-2'>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2
              }}>
                <Button variant='background' 
                    iconAfter= {
                      <div className=' overflow-hidden size-5'>
                        <div className='h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500'>
                          <svg strokeWidth="1.5" stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/200/svg' className='group-hover:text-white size-5'>
                            <path strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' />
                          </svg>
                          <svg strokeWidth="1.5" stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/200/svg' className='group-hover:text-white size-5'>
                            <path strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' />
                          </svg>
                        </div>
                      </div>}
                >
                  <div className='absolute bottom-0 right-0 -z-10 !mx-auto  h-[0px] bg-black transition-all duration-300 group-hover:h-[30px] '/>
                  <span className='text-[14px] tracking-tight group-hover:text-white'>Properties</span>                          
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2
              }}>
                <Button variant='border' >
                  <div className='absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[140px] bg-black transition-all duration-300 group-hover:h-[30px] '/>
                  <span className='group-hover:text-white'>Finance</span>                          
                </Button>
              </motion.div>
                      
            </div>
          </div>

        </section>
      
    </div>
  )
}

export default HomeHero