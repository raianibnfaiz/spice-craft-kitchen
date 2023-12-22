import React from 'react'
import Cover from '../../Shared/Cover/Cover'
import MenuItem from '../MenuItem/MenuItem'
import { Link } from 'react-router-dom'

const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div className='mt-6'>
        {title && <Cover img = {coverImg} title = {title}></Cover>}
        <div className='grid md:grid-cols-2 gap-10'>
            {
                items.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
            }
        </div>
        <Link to = {`/order/${title}`}>
          <button className='bg-yellow-500 text-white px-4 py-2 mt-4'>Order</button>
        </Link>
    </div>
  )
}

export default MenuCategory