import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Services from './services/services'
import Specialist from './specialist/Specialist'
import Banner from './banner/Banner'
import Doctor from './doctor/Doctor'
import Appointment from './appointment/Appointment'
import Blog from './blog/Blog'
const Home = () => {
  return (
    <div className='w-full h-auto space-y-20 pb-12'>
{/* hero section  */}
<Hero/>
{/* about  */}
<About/>
{/* services  */}
<Services/>
{/* specialist */}
<Specialist/>

{/* banner  */}
<Banner/>
{/* dooctors */}
<Doctor/>
{/* appointment */}
<Appointment/>
{/* blogs */}
<Blog/>
    </div>
  )
}

export default Home
