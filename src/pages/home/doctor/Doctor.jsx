import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import Layout from '../../../components/layout/Layout'
import DoctorCard from '../../../components/doctor/DoctorCard'
import { Link } from 'react-router-dom'

const Doctor = () => {
    const doctorData = [
        {
            id: 1,
            img: "https://staticconnect.marham.pk/assets/doctors/29257/assoc-prof-dr-masroor-hussain-sharfi-pediatric-cardiologist-karachi-40_170X170.webp",
            name: "Assoc. Prof. Dr. Masroor Hussain Sharfi",
            position: "Cardiologist",
        },
        {
            id: 2,
            img: "https://staticconnect.marham.pk/assets/doctors/4511/dr-prof-arif-herekar-neurologist-karachi-4_170X170.webp",
            name: "Prof. Dr. Arif Herekar",
            position: "Neurologist",
        },
        {
            id: 3,
            img: "https://staticconnect.marham.pk/assets/doctors/4242/dr-ali-shaukat-dentist-karachi-9_170X170.webp",
            name: "Dr. Ali Shaukat",
            position: "Dentist",
        },
        {
            id: 4,
            img: "https://staticconnect.marham.pk/assets/doctors/13073/dr-iqbal-khemane-psychiatrist-karachi-68_170X170.webp",
            name: "Dr. Iqbal Khemane",
            position: "Psychologist",
        },
    ]
  return (
    <Layout>
    {/* top section  */}
    <div className="w-full flex items-center justify-between">
    <h1 className="text-2xl text-natural-700 font-semibold">
       Meet Our doctors
    </h1>
    <Link to='/doctors' className='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 wase-in-out duration-300'>
     View All
     <FiChevronsRight className='text-lg'/>
     </Link>
    </div>
    {/* services card  */}
    <div className="grid md:grid-cols-4 grid-cols-1 gap-12 ">
        {doctorData.map((item)=>(
            <DoctorCard key={item.id}{...item}/>
        ))}
    </div>
</Layout>
  )
}

export default Doctor
