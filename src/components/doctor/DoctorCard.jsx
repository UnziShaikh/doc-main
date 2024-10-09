import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoChatbubbles } from 'react-icons/io5'

const DoctorCard = ({img,name,position}) => {
  return (
    <div className='w-full rounded-xl overflow-hidden cursor-pointer'>
      <div className="w-full aspect-square relative">
        <img src={img} alt="doc img" className="w-full aspect-square object-cover object-top rounded-xl" />
<div className="w-full h-full flex items-end flex-col absolute top-0 right-o bg-gradient-to-r from-transparent to-neutral-900/50 rounded-xl">

<div className="p-6 flex items-end flex-col gap-y-5"><button onClick="w-9 h-9 rounded-full bg-neutral-100/30 hover:bg-neutral-100/40 flex items-center justify-center text-xl text-neutral-100 ease-in-out duration-300">

<FaPhone className='w-4 h-4'/>

</button>

<button onClick="w-9 h-9 rounded-full bg-neutral-100/30 hover:bg-neutral-100/40 flex items-center justify-center text-xl text-neutral-100 ease-in-out duration-300">

<IoChatbubbles className='w-4 h-4'/>

</button>
</div>
</div>

      </div>
      <div className="space-y-1 px-2 py-3 text-center">
        <h1 className="text-xl text-neutral-700 font-semibold">{name}</h1>
        <p className="text-base text-neutral-500 font-normal">{position}</p>
      </div>
    </div>
  )
}

export default DoctorCard
