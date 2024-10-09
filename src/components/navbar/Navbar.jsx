// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { LiaTimesSolid } from 'react-icons/lia';
// import { nav } from 'framer-motion/client';

// const Navbar = () => {
//     const [open, setOpen]=useState(false)
//     const navLinks=[
//         {href:"/",label:"Home"},
//         {href:"/about",label:"About"},
//         {href:"/services",label:"Services"},
//         {href:"/doctors",label:"Doctors"},
//         {href:"/blogs",label:"Blogs"},
//     ]
//     const handleClick=()=>{
//         setOpen(!open)
//     }
//     const handleClose=()=>{
//         setOpen(false)
//     }

//   return (
//     <nav className='w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-neutral-200'>

// <Link to='/' className='text-2xl text-blue-500 font-bold mr-16 flex items-center'>
// Doctor
// </Link>

//         <button onClick={handleClick} className='flex-1 lg:hidden text-neutral-600 ease-in-out duration-300 flex items-center justify-end'>
//             {
//                 open?
//                 <LiaTimesSolid className='text-xl'/>
//                 :
//                 <FaBars className='text-xl'/>
//             }
//         </button>
//         <div  className={`${open?'flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md-realtive':'hidden'}flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 p-4 justify-between md:bg-transparent  bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none shadow-md rounded-md`}>
// <ul className="list-none flex md:items-center items-start gap-x-7 gap-y-3 flex-wrap md:flex-row flex-col  text-base text-neutral-500 font-medium">
//     {navLinks.map((nav,ind)=>(
//         <li key={ind}>
//             <Link to={nav.href } className='hover:text-blue-500 ease-in-out duration-300'>
//             {nav.label}
//             </Link>

//         </li>

//     ))}
// </ul>

// <div className="flex md:items-center items-start gap-x-5 md:flex-row flex-col text-base font-medium text-neutral-50 ">
// <button className='w-fit px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 ease-in-out duration-300'>Appointment</button>
// </div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/doctors", label: "Doctors" },
        { href: "/blogs", label: "Blogs" },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

//Close the menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (open && !event.target.closest('.navbar')) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open]);

    return (
        <nav className='w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-neutral-200 z-50'>
            <Link to='/' className='text-2xl text-blue-500 font-bold mr-16 flex items-center'>
                Doctor
            </Link>

            <button 
                onClick={handleClick} 
                className='flex-1 lg:hidden text-neutral-600 ease-in-out duration-300 flex items-center justify-end' 
                aria-expanded={open}
            >
                {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
            </button>

            <div className={`${open ? 'flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 p-4 justify-between md:bg-transparent bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none shadow-md rounded-md`}>
                <ul className="list-none flex md:items-center items-start gap-x-7 gap-y-3 flex-wrap md:flex-row flex-col text-base text-neutral-500 font-medium">
                    {navLinks.map((nav, ind) => (
                        <li key={ind}>
                            <Link to={nav.href} className='hover:text-blue-500 ease-in-out duration-300'>
                                {nav.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex md:items-center items-start gap-x-5 md:flex-row flex-col text-base font-medium text-neutral-50">
                    <button className='w-fit px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 ease-in-out duration-300'>Appointment</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
