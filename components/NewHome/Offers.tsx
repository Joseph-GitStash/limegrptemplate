'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const offers = [
    {
        topic: "Finance",
        explanation: "We focus on how people buy real estate, this involves planning, proper analysis and management of financial resources. Processes such as acquisition, development, construction are involved.",
    },
    {
        topic: "Offmarket",
        explanation: "We help buyers who want to keep their sales discreet, these sales are handled privately with efficiency.",
    },
    {
        topic: "Auctions",
        explanation: "We host public sales where potential buyers compete by placing bids to determine the ownership of a property.",
    },
]

const Offers = () => {
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null)

  return (
    <section className='section' id='activities'>
        <div className='layout flex flex-col lg:flex-col !w-full justify-between'>
              
                <section className='md:pb-[40px]'>
                  <div className="bg-black px-2 max-w-fit text-white">05</div>
                  <div className='font-semibold  flex flex-col lg:justify-end'>
                    <h1 className='tracking-tighter text-3xl lg:text-6xl'> What we offer </h1>
                    <h1 className='tracking-tighter font-normal text-[19px] md:text-2xl -mb-2'> Finance, Offmarket and Auction </h1>
                  </div>
                  
                </section>

                <section className='lg:flex justify-between'>
                  <div className='flex gap-5 mr-[48px] lg:justify-end'>
                    
                  </div>
        
        
                  <div className='w-full pb-4 font-normal text-[14px] tracking-tight lg:text-[15px] lg:justify-end lg:text-start flex flex-col'>
        
                    
                    <div className=" w-full mt-10">
                    {offers.map(({ topic, explanation }, faqIndex) => (
                        <div key={topic} className='py-6 mb-3 border px-5 border-black group/faq cursor-pointer border-dotted relative isolate' onClick={() => {
                          if(faqIndex === selectedIndex){
                            setSelectedIndex(null)
                          } else{
                            setSelectedIndex(faqIndex)
                          }
                        }}>
                            <div className={twMerge("absolute bottom-0 left-0 h-0 w-full bg-black text-white transition-all duration-700 -z-10 group-hover/faq:h-full", 
                              faqIndex === selectedIndex && "h-full"
                            )}>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className={twMerge("group-hover/faq:text-white tracking-tighter ",
                                faqIndex === selectedIndex && "text-white"
                                )}>{topic}</div>
                                    <div className="group-hover/faq:text-white">
                                        <svg strokeWidth="1.5" 
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            fill='none' 
                                            xmlns='http://www.w3.org/200/svg' 
                                            className={twMerge('size-5',
                                faqIndex === selectedIndex && "text-white"
                                            )}
                                        >
                                            <path strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' 
                                            />
                                        </svg>
                                    </div>
                            </div>

                            <AnimatePresence>
                            {faqIndex === selectedIndex &&
                             (
                              <motion.div className="overflow-hidden"
                                  initial={{ height: 0 }}
                                  animate={{ height: "auto" }}
                                  exit={{ height: 0 }}
                                  transition={{ 
                                    duration: 0.5,
                                    ease: "easeOut"
                                   }}
                                  >
                                <p className={twMerge('group-hover/faq:text-white lg:text-[19px] tracking-tight mt-4',
                                faqIndex === selectedIndex && "text-white"
                                )}>{explanation}</p>
                              </motion.div>
                             )
                            }
                            </AnimatePresence>
                        </div>
                    ) )}
                    </div>
        
                  </div>
        
                </section>
              
            </div>
    </section>
  )
}

export default Offers