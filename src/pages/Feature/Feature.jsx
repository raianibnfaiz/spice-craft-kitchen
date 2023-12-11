import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import featuredImg from '../../assets/home/featured.jpg'
import './Feature.css'
const Feature = ()=> {
  return (
    <div className='featured-item bg-fixed text-white pt-10 my-20'>
        <SectionHeader subHeading={"check it out"} heading={"Featured Item"}></SectionHeader>
        <div className='md:flex items-center justify-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50'>
            <div>
                <img  style={{ maxWidth: '100%', height: 'auto' }} src={featuredImg} alt="" srcset="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2023</p>
                <p className='uppercase'>Where can I get some?</p>
                <p>Ad quod quos animi maxime. Labore laudantium provident, quo voluptates molestias reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non ab dolorem eos ipsa quaerat, similique sunt error dolore fuga?</p>
                <button className='btn btn-outline my-4'>Order Now More</button>
            </div>
        </div>
    </div>
  )
}

export default Feature