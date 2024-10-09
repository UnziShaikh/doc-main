import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FiChevronsRight } from 'react-icons/fi';
import Layout from '../../../components/layout/Layout';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-8ch)] flex flex-col'>
        
      <div className='flex-1'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                    <img src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg" alt="" className="w-full h-full object-top object-cover" />

                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30'>
                <Layout>
                    <div className="bg-blue-300/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                        <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                            We take care of your health
                        </h1>
                        <p className="text-base text-neutral-300 font normal line-clapm-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolorem impedit provident quisquam sunt consequatur repellendus atque a! Ducimus!
                        </p>
                    </div>
                    <button onClick="w-fit px-8 py-3 text-base text-neutral-700 font-medium  rounded-xl bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    </button>
                    </div>     
                       </Layout>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide> 
             <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                    <img src=" https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg" alt="" className="w-full h-full object-top object-cover" />

                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30'>
                <Layout>
                    <div className="bg-blue-300/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                        <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                            We take care of your health
                        </h1>
                        <p className="text-base text-neutral-300 font normal line-clamp-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolorem impedit provident quisquam sunt consequatur repellendus atque a! Ducimus!
                        </p>
                    </div>
                    <button className="w-fit px-8 py-3 text-base text-neutral-700 font-medium  rounded-xl bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    </button>
                    </div>     
                       </Layout>
                </div>

            </div>
            </SwiperSlide>

        <SwiperSlide> 
             <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                    <img src=" https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" alt="" className="w-full h-full object-top object-cover" />

                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30'>
                <Layout>
                    <div className="bg-blue-300/40 border border-blue-200/50 backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                    <div className="space-y-4">
                        <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                            We take care of your health
                        </h1>
                        <p className="text-base text-neutral-300 font normal line-clamp-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil placeat dolorem impedit provident quisquam sunt consequatur repellendus atque a! Ducimus!
                        </p>
                    </div>
                    <button className="w-fit px-8 py-3 text-base text-neutral-700 font-medium  rounded-xl bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    </button>
                    </div>     
                       </Layout>
                </div>

            </div></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Hero
