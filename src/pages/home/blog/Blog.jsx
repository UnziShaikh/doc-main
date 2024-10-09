import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import BlogCard from '../../../components/blog/BlogCard'

const Blog = () => {
    const blogData = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_640.jpg",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2021/11/20/03/35/doctor-6810776_640.png",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
    ]
  return (
    <Layout>
        {/* top section  */}
        <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-natural-700 font-semibold">
            Our Blogs
        </h1>
        <Link to='/blogs' onClick='text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 wase-in-out duration-300'>
         View All
         <FiChevronsRight className='text-lg'/>
         </Link>
        </div>
        {/* services card  */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
            {blogData.map((blog)=>(
                <BlogCard key={blog.id}{...blog}/>
            ))}
        </div>
    </Layout>
  )
}

export default Blog
