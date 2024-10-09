import React from 'react'
import Layout from '../../../components/layout/Layout'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ServiceCard from '../../../components/service/ServiceCard'

const Services = () => {
    const serviceData = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2013/03/09/04/43/medicine-91754_640.jpg",
            title: "Preventive Care",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam."
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2024/07/14/11/52/ai-generated-8894225_640.jpg",
            title: "Diagnostic Testing",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam."
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_640.jpg",
            title: "Home Treatment",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam."
        },
        {
            id: 4,
            img: "https://cdn.pixabay.com/photo/2023/10/07/03/38/ai-generated-8299432_640.jpg",
            title: "Health Checkup",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam."
        },
        {
            id: 5,
            img: "https://cdn.pixabay.com/photo/2017/11/06/15/49/baby-2923997_640.jpg",
            title: "Child Care",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam."
        },
    ]

  return (
    <Layout>
        {/* top section  */}
        <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-natural-700 font-semibold">
            Our Services
        </h1>
        <Link to='/services' className='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 wase-in-out duration-300'>
         View All
         <FiChevronsRight className='text-lg'/>
         </Link>
        </div>
        {/* services card  */}
        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-3">
            {serviceData.map((item)=>(
                <ServiceCard key={item.id}{...item}/>
            ))}
        </div>
    </Layout>
  )
}

export default Services
