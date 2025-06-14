'use client'

import { stagger, useAnimate, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import useTextReveal from '@/hooks/useTextReveal'

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scope, entranceAnimation } = useTextReveal()
  const inView = useInView(scope, {
    once: true
  })

  useEffect(() => {
    if(inView) {
      entranceAnimation()
    }
  }, [inView])


  return (
    <section className='bg-black mx-3 rounded-2xl text-white mt-12' id='about' ref={sectionRef} >
      <div className="layout">
        <div className="border mb-1 px-2 max-w-fit text-white">02</div>
        
        <h2 className='text-white font-semibold tracking-tighter text-3xl md:text-5xl ' ref={scope} >
          LimeGroup is a real estate agency founded on a passion for commitment to sustainabilty, we are a team who approach every client with dedication, integrity, respect and a deep understanding for the needs of our clients.
        </h2>

      </div>

      
    </section>
  )
}

export default AboutSection