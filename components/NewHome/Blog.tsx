'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules'
import auc1 from '@/public/projects/airbnb.jpg'
import Image from "next/image";
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const posts = [
  {
    id: 1,
    title: "Residential Apartment",
    price: "20000",
    location: "",
    type: "land",
    description: "Situated in uae ...",
    recent: true,
    image: auc1.src
  }
];

const Blog = () => {
  return (
    <section className=' rounded-t-2xl text-black' id='blog' >
        <div className="layout">
            <h2 className=" border border-[white] text-white bg-black mb-1 px-2 max-w-fit ">05</h2>
            
            <div className=' font-semibold flex flex-col lg:justify-end'>
                <h1 className='tracking-tighter text-3xl lg:text-5xl'> Blog </h1>

                <div className="items-center flex justify-between">
                <h1 className='tracking-tighter font-normal text-[19px] md:text-2xl mb-2'>
                    
                </h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog