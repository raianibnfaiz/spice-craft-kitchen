import React, { Component } from 'react';

 const MenuItem = ({item}) => {
    const {name,recipe,image,category, price} = item;
    return (
        <div className='flex space-y-4 space-x-4 me-2 my-6'>
        <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[210px] ms-4' src={image} alt="" />
        <div>
            <h3 className='uppercase'>{name}</h3>
            <p>{recipe}</p>
            <p>{category}</p>
            <p className='text-yellow-500'>{price}$</p>
        </div>
      </div>
    )
  }
export default MenuItem ;
