
import React from 'react'
import Layout from '../../../components/layout/Layout'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import DentalCare from '../../../assets/dental-care.png'
import Cardiology from '../../../assets/cardiology.png'
import EyeCare from '../../../assets/eye-care.png'
import  Gynecology from '../../../assets/gynecology.png'
import  Neurology from '../../../assets/neurology.png'
import SpecialistCard from '../../../components/specialist/SpecialistCard'


const Specialist = () => {
    const specialistData = [
        {
            id: 1,
            img: DentalCare,
            title: "Dental Care",
            totalDoctors: "5+",
        },
        {
            id: 2,
            img: Cardiology,
            title: "Cardiology",
            totalDoctors: "3+",
        },
        {
            id: 3,
            img: EyeCare,
            title: "Eye Care",
            totalDoctors: "6+",
        },
        {
            id: 4,
            img: Gynecology,
            title: "Gynecologists",
            totalDoctors: "7+",
        },
        {
            id: 5,
            img: Neurology,
            title: "Neurology Care",
            totalDoctors: "4+",
        },
    ]

  return (
    <Layout>
    {/* top section  */}
    <div className="w-full flex items-center justify-between">
    <h1 className="text-2xl text-natural-700 font-semibold">
        Our Specialists
    </h1>
    <Link to='/specialists' onClick='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 wase-in-out duration-300'>
     View All
     <FiChevronsRight className='text-lg'/>
     </Link>
    </div>
    {/* services card  */}
    <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4">
        {specialistData.map((item)=>(
            <SpecialistCard key={item.id}{...item}/>
        ))}
    </div>
</Layout>
  )
}

export default Specialist
