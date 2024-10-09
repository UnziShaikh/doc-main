import { div } from 'framer-motion/client'
import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import Layout from '../../../components/layout/Layout'
import { HiChevronDoubleRight } from 'react-icons/hi'

const About = () => {
  return (
   <div className='w-full'>
    <Layout>
    <div className='w-full flex items-center gap-16 justify-between flex-wrap'> 
      <div className='md:w-5/12 w-full space-y-9'>
      <div className="space-y-5">
        <div className="space-y-2">
            <h2 className="text-2xl text-blue-500 font-seibold">
                About
            </h2>
            <h1 className="md:text-5xl text-4xl text-neutral-800 font-bold leading-[1.3]">
                We are the best in health & care 
            </h1>
            <p className="text-base text-neutral-500 font-light line-clamp-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolorem impedit provident quisquam sunt consequatur repellendus atque a! Ducimus!
                        </p>
        </div>
      </div>
      <button onClick="w-fit px-8 py-3 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 ease-in-out duration-300">
        Read more
        <FiChevronsRight className='text-xl pt-0.5' />
      </button>
        </div>

      <div className="md:w-1/2 w-full rounded-xl overflow-hidden relative"><img src="https://cdn.pixabay.com/photo/2022/06/14/12/48/medicine-7261808_1280.jpg" alt="" className="w-full h-full object-cover object-center" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/80 to-transparent z-30">
      <div className='w-[90%] md:space-y-6 space-y-4'>
        <button onClick='md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 fnt-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300'>
        Appointment
        <HiChevronDoubleRight className='text-3xl pt-0.5'/>
        </button>
        <button onClick='md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 fnt-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300'>
        Find Doctors
        <HiChevronDoubleRight className='text-3xl pt-0.5'/>
        </button>
        <button handclick='md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 fnt-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300'>
        Emergency Contact
        <HiChevronDoubleRight className='text-3xl pt-0.5'/>
        </button>
      </div>
      </div>
      </div>
      
    </div>
    </Layout>
    
   </div>
  )
}

export default About
