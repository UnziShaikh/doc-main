import React from 'react'
import { Link } from 'react-router-dom'

const SpecialistCard = ({img,title,totalDoctors}) => {
  return (
  <Link to="/specialists" onClick='w-full h-full flex items-center flex-col spcae-y-6  px-3 md:py-7 py-4 bg-neutral-400/10 hover:bg-blue-500/20 rounded-md ease-inn-out duration-300'>
     <div className="w-16 h-16 rounded-full flex items-center justify-center bg-neutral-800/10 p-2">
        <img src={img} alt="specialist img" className="w-full h-full object-center object-cotain rounded-full" />
    </div>
    <div className="space-y-2">
        <h1 className="text-xl text-natural-700 font-semibold">{title}</h1>
        <p className="text-sm text-natural-500 font-normal text-center">{totalDoctors} Doctors</p>

    </div>
    <button onClick="w-fit px-6 py-2 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 ease-in-out duration-300">
        Read more
    
      </button>
  </Link>
  )
}

export default SpecialistCard
