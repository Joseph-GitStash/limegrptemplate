'use client'

import React from 'react'
import auc1 from '@/public/projects/airbnb.jpg'
import Image from "next/image";
import Button from './Button';
import { House, HouseIcon, LandPlot } from 'lucide-react';
import { PiBuildingApartment } from 'react-icons/pi';

const auctions = [
  {
    id: 1,
    title: "Residential Apartment",
    price: "20000",
    location: "",
    type: "land",
    description: "Situated in uae ...",
    recent: true,
    image: auc1.src
  },
  {
    id: 2,
    title: "Residential Apartment",
    price: "20000",
    location: "",
    type: "land",
    description: "Situated in uae ...",
    recent: true,
    image: auc1.src
  },
]

const Places = () => {
  return (
    <section className='bg-black mx-3 flex flex-col justify-center rounded-2xl text-white' id='locations' >
      <div className="laySect  ">
        
        <h2 className='w-full justify-center flex font-semibold tracking-tighter text-3xl md:text-5xl '  >
          Locations
        </h2>

        <div className="mt-4 w-full justify-center flex flex-col lg:flex-row gap-3">

          <button className=' justify-center bg-white w-full lg:w-fit rounded-sm text-black flex gap-2 px-5 py-2 group/may'>
            <span className='text-[14px] tracking-tight '>Mayfair England</span>  
            <div className=' overflow-hidden size-5'>
              <div className='h-5 w-10 flex group-hover/may:-translate-x-1/2 transition-transform duration-500'>
                <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              </div>
            </div>                                        
          </button>

          <button className='justify-center w-full lg:w-fit border bg-white rounded-sm text-black flex gap-2 px-5 py-2 group/damac'>
            <span className='text-[14px] tracking-tight '>Damac Lagoons, UAE</span>  
            <div className=' overflow-hidden size-5'>
              <div className='h-5 w-10 flex group-hover/damac:-translate-x-1/2 transition-transform duration-500'>
                <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              </div>
            </div>                                        
          </button>

          <button className=' justify-center w-full lg:w-fit border bg-white rounded-sm text-black flex gap-2 px-5 py-2 group/birm'>
            <span className='text-[14px] tracking-tight '>Birmingham, England</span>  
            <div className=' overflow-hidden size-5'>
              <div className='h-5 w-10 flex group-hover/birm:-translate-x-1/2 transition-transform duration-500'>
               <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              </div>
            </div>                                        
          </button>

          <button className='justify-center w-full lg:w-fit border bg-white rounded-sm text-black flex gap-2 px-5 py-2 group/belstr'>
            <span className='text-[14px] tracking-tight '>Belgrave str, England</span>  
            <div className=' overflow-hidden size-5'>
              <div className='h-5 w-10 flex group-hover/belstr:-translate-x-1/2 transition-transform duration-500'>
               <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              <svg viewBox='0 0 24 24' 
                  fill='none' 
                  xmlns='http://www.w3.org/200/svg' stroke='currentColor' strokeWidth="1.5"
                  className='size-5 '
              >
                <path strokeLinecap='round' 
                  strokeLinejoin='round'
                  d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                /> 
              </svg>
              </div>
            </div>                                        
          </button>

        </div>

      </div>

      
    </section>
  )
}

export default Places