import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BlogCard = ({img,title,desc}) => {
  return (
    <div className='w-full bg-blue-400/5 rounded-xl overflow-hidden'>
      <img src={img} alt="blog img" className="w-full aspect-video object-cover object-center" />
      <div className="p-3 space-y-4">
        <div className="space-y-2">
            <Link to="/blogs" onClick='text-xl text-neutral-700 font-semibold'>{title}</Link>
            <p className="text-sm text-neutral-500 font-normal line-clamp-2">{desc}</p>
        </div>
        <button onClick="w-fit py-2 text-sm text-blue-700 hover:text-blue-500 font-normal flex items-center gap-x-1.5 ease-in-out duration-300">
            Read more
            <FiChevronsRight className='text-base'/>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
