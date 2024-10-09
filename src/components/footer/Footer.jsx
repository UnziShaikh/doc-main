import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import { SiGooglemaps } from 'react-icons/si'
import { TfiHeadphone } from 'react-icons/tfi'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full py-7 bg-neutral-200/5'>
        <Layout className='w-full space-y-10'>
           <div className="grid md:grid-cols-5 grid-cols-2 gap-10"> 
            <div className="col-span-2 space-y-4">
                {/* logo section  */}
                <Link to='/' className='w-fit text-4xl text-blue-500 font-bold mr-16 flex items-center'>
                Doctor
            </Link>
            <div className="space-y-6">
                <p className="text-sm text-neutral-500 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero similique sapiente, reiciendis ut optio quasi corrupti vel nihil commodi veniam a nesciunt dolores mollitia?</p>
                <div className="spcae-y-3">
                    <div className="flex items-center gap-x-3">
                        <SiGooglemaps className='text-base text-neutral-500 font-normals' />
                        123 street Pakistan,Karachi
                    </div>
                    <div className="flex items-center gap-x-3">
                        <TfiHeadphone className='text-base text-neutral-500 font-normals' />
000-999-000                    </div>
                    <div className="flex items-center gap-x-3">
                        <FaEnvelope className='text-base text-neutral-500 font-normals' />
info@doc.com                    </div>
                </div>
            </div>
            </div>
            <div className="col-span-1 space-y-4">
                <h1 className="text-xl text-neutral-700 font-semibold">
                    Company
                </h1>
                <ul className="space-y-3">
                    <li>
                        <Link to="/" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        About
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-4">
            <div className="col-span-1 space-y-4">
                <h1 className="text-xl text-neutral-700 font-semibold">
                    Services
                </h1>
                <ul className="space-y-3">
                    <li>
                        <Link to="/" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick='text-base font-medium hover:text-blue-500 ease-in-out duration-300'>
                        About
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className="md:col-span-1 col-span-2 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
                    Connnect With Us
                </h1>
                <div className="flex items-center gap-5 w-full">
                    <Link to='/https://github.com/NishaRamzan00 'onClick='w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 ease-in-out duration-300'>
                    <FaGithub className='text-blue-500 text-lg'/>
                    </Link>
                    <Link to='www.linkedin.com/in/nisha-ramzan 'onClick='w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 ease-in-out duration-300'>
                    <FaLinkedin className='text-blue-500 text-lg'/>
                    </Link>
                </div>
            </div>

           </div>
            <div className="w-full h-[1px] bg-neutral-300"></div>
            <div className="w-full flex items-center justify-between flex-wrap gap-2">
                <p className="text-sm text-neutral-500/80 font-normal">Copyright &copy; 2024. all rights reserved</p>
                <p className="text-sm text-neutral-500/80 font-normal">Designed nd developed by
                <Link to='/https://github.com/NishaRamzan00' className='text-blue-500 hover:text-blue-600 ease-in-out duration-300 ml-2'>
                Nisha Ramzan and team
                </Link></p>
            </div>
          
        </Layout>

    </footer>
  )
}

export default Footer
