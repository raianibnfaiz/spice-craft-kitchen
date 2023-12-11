import React, { Component } from 'react'

 const SectionHeader= ({heading, subHeading}) => {

    return (
      <div className='mx-auto my-8 md:w-4/12 text-center'>
        <p className='text-yellow-700 mb-2'>{subHeading}</p>
        <h3 className='text-4xl py-4 border-y-4'>{heading}</h3>
      </div>
    )
  }
export default SectionHeader;
