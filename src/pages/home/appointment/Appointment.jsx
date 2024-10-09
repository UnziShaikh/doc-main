 import React from 'react';
 import Layout from '../../../components/layout/Layout';

 const appointment = () => {
   return (
     <div className='w-full space-y-6'>
       <Layout>
         <div className="w-full flex items-center gap-10 justify-between md:flex-nowrap flex-wrap">
           <div className="md:w-1/3 w-full rounded-xl overflow-hidden relative">
             <img 
               src="https:cdn.pixabay.com/photo/2021/11/21/06/16/female-6813278_640.png" 
               alt="Healthcare professional" 
               className='w-full md:aspect-[3/4] aspect-[2/3] object-cover object-center'
             />
             <div className="w-full h-full absolute p-4 top-0 left-0 flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/40 to-neutral-900/40 z-30">
               <div className="w-full h-full bg-blue-300/10 border border-200/50 backdrop-blur p-5 rounded-lg md:space-y-10 space-y-6 flex justify-center flex-col">
                 <div className="space-y-2">
                   <h1 className="text-2xl text-neutral-800 font-semibold">Working Hours</h1>
                   <p className="text-base text-neutral-600 font-normal">This hospital is operating on the following days and hours:</p>
                 </div>
                 <div className="space-y-5">
                   <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                     Sunday - Monday <span>8AM - 8PM</span>
                   </p>
                   <div className="w-ful h-[0.5px] bg-blue-200/50"></div>
                   <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                     Tuesday - Wednesday <span>7AM - 8PM</span>
                   </p>
                   <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                   <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                     Thursday - Friday <span>8AM - 8PM</span>
                   </p>
                   <div className="w-full h-[0.5px] bg-blue-200/50"></div>

                   <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                     Saturday, Public holiday <span>Closed</span>
                   </p>

                   <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                   <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                     Emergency: <span>24/7 Emergency</span>
                   </p>
                   <p className="text-sm text-neutral-100 font-normal ">
                     For Emergency you have to contact us or book an doc app
                   </p>
                 
          
                 </div>
               </div>
             </div>
           </div>

           <div className="md:w-2/3 w-full space-y-6 bg-neutral-100/40 rounded-xl md:p-8 p-4">
           <h1 className="text-2xl text-neutral-800 font-semibold">Book an doc app</h1>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
             <div className="w-full space-y-1.5">
               <label className="text-base text-neutral-400 font-normal block">Full Name</label>
               <input type="text" placeholder='e.g John Doe' className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-base text-neutral-600 font-normal" />
             </div>
             <div className="w-full space-y-1.5">
               <label className="text-base text-neutral-400 font-normal block">
                                     Email Address
                                 </label>
                                 <input type="email" placeholder='e.g. info@example.com' className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal" />
                             </div>
                             <div className="w-full space-y-1.5">
                                 <label className="text-base text-neutral-400 font-normal block">
                                     Phone Number
                                 </label>
                                 <input type="text" placeholder='e.g. +977-9800000000' className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal" />
                             </div>
                             <div className="w-full space-y-1.5">
                                 <label className="text-base text-neutral-400 font-normal block">
                                     Choose Subject
                                 </label>
                                 <select name="department" id="" className='w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal'>
                                     <option value="consultant">Consultant</option>
                                     <option value="makeenquery">Make Enquiry</option>
                                     <option value="healthcheckup">Health Checkup</option>
                                     <option value="visitdoctor">Visti Doctor</option>
                                 </select>
                             </div>
                             <div className="w-full space-y-1.5">
                                 <label className="text-base text-neutral-400 font-normal block">
                                     Select Data
                                 </label>
                                 <input type="date" className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal" />
                             </div>
                             <div className="w-full space-y-1.5">
                                 <label className="text-base text-neutral-400 font-normal block">
                                     Select Time
                                 </label>
                                 <input type="time" classname="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal" />
                             </div>


           </div>
           <button classname='md:w-fit w-full px-8 py-3 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 ease-in-out duration-300'>Make an doc app</button>

           </div>
         </div>
       </Layout>
     </div>
   );
 };

 export default appointment;



