import React from 'react'
import Cover from '../../Shared/Cover/Cover'
import MenuItem from '../MenuItem/MenuItem'

const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div className='mt-6'>
        {title && <Cover img = {coverImg} title = {title}></Cover>}
        <div className='grid md:grid-cols-2 gap-10'>
            {
                items.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}

export default MenuCategory