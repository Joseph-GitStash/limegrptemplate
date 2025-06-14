'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules'
import auc2 from '@/public/houses/home2.jpg'
import auc3 from '@/public/houses/home3.jpg'
import auc4 from '@/public/houses/home4.jpg'
import auc5 from '@/public/houses/home5.jpg'
import auc7 from '@/public/houses/home7.jpg'
import Image from "next/image";
import { ArrowLeft, ArrowRight, Bath, Bed, MapPin } from 'lucide-react';


const auctions = [
  {
    id: 1,
    title: "Modern 4 bedroom condo",
    tag: "UAE",
    price: "5,800,000",
    location: "Damac lagoons, Dubai",
    type: "Villa",
    description: "Situated in uae ...",
    beds: "4",
    baths: "5",
    recent: true,
    image: auc2.src
  },
  {
    id: 2,
    title: "Newly built 2 bedroom ",
    tag: "UK",
    price: "4,000",
    location: "Mayfair, England",
    type: "Apartment",
    description: "Situated in uae ...",
    beds: "2",
    baths: "3",
    recent: true,
    image: auc3.src
  },
  {
    id: 3,
    title: "Spacious modern loft house",
    tag: "UK",
    price: "262,000",
    location: "Birmingham, England",
    type: "Loft",
    description: "Situated in uae ...",
    beds: "2",
    baths: "3",
    recent: true,
    image: auc5.src
  },
  {
    id: 4,
    title: "Modern 5 bedroom villa",
    tag: "UAE",
    price: "7,400,000",
    location: "Damac Lagoons, Dubai",
    type: "Villa",
    description: "Situated in uae ...",
    beds: "5",
    baths: "7",
    recent: true,
    image: auc7.src
  },
  {
    id: 5,
    title: "Beautiful 3 bedroom duplex",
    tag: "UK",
    price: "245,000",
    location: "Belgrave street, England",
    type: "House",
    description: "Situated in uae ...",
    beds: "3",
    baths: "3",
    recent: true,
    image: auc4.src
  },
];

const AuctionCard = ({
  title,
  price,
  tag,
  location,
  type,
  beds,
  baths,
  description,
  image,
  recent,
}:{
  title: string,
  price: string,
  tag: string,
  location: string,
  type: string,
  beds: string,
  baths: string,
  description: string,
  image: string,
  recent: boolean,
}) => {
  return(
    <div className="cursor-pointer">
      <div className='mt-[15px] flex flex-col relative overflow-hidden shadow-lg group/card'>
        <Image src={image} 
              className='transition-transform group-hover/card:scale-105 duration-200 object-cover w-full h-[270px]
              '
              width={240}
              height={700}
              alt="property thumbnail" 
        />
        <div className='absolute w-[100%] inset-0 flex items-end bg-[linear-gradient(180deg,_rgba(29,_30,_32,_0.20)_0%,_rgba(29,_30,_32,_0.21)_11.79%,_rgba(29,_30,_32,_0.22)_21.38%,_rgba(29,_30,_32,_0.25)_29.12%,_rgba(29,_30,_32,_0.28)_35.34%,_rgba(29,_30,_32,_0.33)_40.37%,_rgba(29,_30,_32,_0.38)_44.56%,_rgba(29,_30,_32,_0.43)_48.24%,_rgba(29,_30,_32,_0.49)_51.76%,_rgba(29,_30,_32,_0.55)_55.44%,_rgba(29,_30,_32,_0.61)_59.63%,_rgba(29,_30,_32,_0.67)_64.66%,_rgba(29,_30,_32,_0.73)_70.88%,_rgba(29,_30,_32,_0.79)_78.62%,_rgba(29,_30,_32,_0.85)_88.21%,_rgba(29,_30,_32,_0.90)_100%)]'>

          
          <h2 className="absolute overflow-hidden top-0 left-0 flex items-center justify-center mt-1 ml-1 text-[15px] tracking-tight border text-black bg-white mb-2 w-fit py-1 px-2">{price} </h2>
          
          <div className="absolute overflow-hidden top-0 right-0 flex items-center justify-center mt-1 mr-1 text-[14px] bg-white rounded-sm opacity-[0.8784] py-1 px-2 font-semibold ">
            <div className="overflow-hidden size-5">
              <div className=" h-4 w-9 flex group-hover/card:-translate-x-1/2 transition-transform duration-500">
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
          </div>

          <div className="px-2 py-3 text-white">
        <h2 className='text-[15px] border text-white mb-2 w-fit px-2'>{type} </h2>
        <h2 className=" ">{title} </h2>
        <p className="flex items-center gap-1">
          <MapPin size={14} />
          <span className='text-[14px] '>{location} </span>
        </p>
        <div className="flex gap-3 mt-3">
          <p className="flex text-[15px] bg-white text-black w-fit px-2 items-center gap-1">
            <Bed size={18} />
            <span>{beds} </span>
          </p>
          <p className="flex text-[15px] bg-white text-black w-fit px-2 items-center gap-1 ">
            <Bath size={18} />
            <span>{baths} </span>
          </p>
        </div>
      </div>

        </div>
      </div>

    </div>
  )
}

const OnSale = () => {
  return (
    <section className=' rounded-b-2xl text-black' id='properties' >
      <div className="layout">
        <h2 className=" border border-[white] text-white bg-black mb-1 px-2 max-w-fit ">03</h2>
        
        <div className=' font-semibold flex flex-col lg:justify-end'>
            <h1 className='tracking-tighter text-3xl lg:text-5xl'> Property auctions </h1>

            <div className="items-center flex justify-between">
              <h1 className='tracking-tighter font-normal text-[19px] md:text-2xl mb-2'>
                Explore our uk and uae properties
              </h1>

              <div className="hidden items-center lg:flex mb-2 gap-2">
                
                <button className='group relative'>
                  <div className='absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-full rounded-sm bg-black transition-all duration-300 group-hover:h-full '/>
                  <ArrowLeft className="prev text-black border border-black px-3 w-[50px] flex items-center justify-center text-7xl hover:text-white transition-colors " />
                </button>

                <button className='group relative'>
                  <div className='absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-full rounded-sm bg-black transition-all duration-300 group-hover:h-full '/>
                  <ArrowRight className="next text-black border border-black px-3 w-[50px] flex items-center justify-center text-7xl hover:text-white transition-colors" />
                </button>
                
              </div>
            </div>
        </div>

        <div className="relative max-w-full overflow-hidden">
                <Swiper slidesPerView={1} 
                  spaceBetween={20}
                  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    375: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024:{ slidesPerView: 3 },
                    1310:{ slidesPerView: 4 },
                  }} 
                  modules={[Navigation]}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {auctions.map((review, index) => (
                      <SwiperSlide key={index}>
                        <AuctionCard
                          key={index}
                          {...review}
                      />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
        </div>

        <div className="flex justify-end items-center mt-10 lg:hidden mb-2 gap-2">
    
          <button className='group relative'>
            <div className='absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-full rounded-sm bg-black transition-all duration-300 group-hover:h-full '/>
              <ArrowLeft className="prev text-black border border-black px-3 w-[50px] flex items-center justify-center text-7xl hover:text-white transition-colors " />
          </button>

          <button className='group relative'>
            <div className='absolute bottom-0 right-0 -z-10 !mx-auto h-[0px] w-full rounded-sm bg-black transition-all duration-300 group-hover:h-full '/>
              <ArrowRight className="next text-black border border-black px-3 w-[50px] flex items-center justify-center text-7xl hover:text-white transition-colors" />
          </button>
        </div>
      
      </div>

    </section>
  )
}

export default OnSale