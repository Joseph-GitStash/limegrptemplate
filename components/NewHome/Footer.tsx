"use client";

import React from "react";

const Footer = () => {
  return (
    <section className='pb-2' id='properties' >
      <div className="rounded-2xl mx-3 bg-black text-white">
        <div className="layout">
            
          <div className='  flex flex-col lg:justify-end'>
            <h1 className=' tracking-tighter text-3xl lg:text-5xl'> Ready to invest in  </h1>
            <h1 className='tracking-tighter text-3xl lg:text-5xl'>Limegroup real estate? </h1>
            <p className="text-[15px] mt-3">Then let&apos;s get acquainted.</p>

                <div className=" flex flex-col gap-3">
                  <div className="flex gap-3">
                    <h1 className='tracking-tighter font-normal text-[17px] md:text-2xl mb-2'>
                      020 7206 2551
                    </h1>
                    <h1 className='tracking-tighter font-normal text-[17px] md:text-2xl mb-2'>
                      kash@limeauctionhouse.co.uk
                    </h1>
                  </div>
                  <div className="">
                    <h1 className='tracking-tighter font-normal text-[17px] md:text-2xl mb-2'>
                      OR &nbsp;limewealth@gmail.com
                    </h1>
                  </div>

                </div>
          </div>

          <div className="flex pt-20 justify-between">
            <h2 className="tracking-tighter font-normal text-[17px] md:text-2xl">Designed by Joseph &copy;2025</h2>
            <p className="tracking-tighter font-normal text-[17px] md:text-2xl">Auctions | Estate Agency</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer