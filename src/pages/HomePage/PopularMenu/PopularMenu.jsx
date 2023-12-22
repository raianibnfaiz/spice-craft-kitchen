import React, { Component,useEffect,useState } from 'react'
import SectionHeader from '../../../Components/SectionHeader/SectionHeader'
import MenuItem from '../../MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

 const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)})
    // }, [])  
    const [menu] = useMenu([]);
    const popularItems = menu.filter(item => item.category === 'popular')
    console.log(popularItems);
    console.log(menu);
  return(

      <section className='mb-12 '>
        <SectionHeader heading='From Our Menu' subHeading='Popular Items'></SectionHeader>
        <div className='grid md:grid-cols-2 gap-8 '>
        
            {
                popularItems.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
            }
        </div>
      </section>
    );
    };
 export default PopularMenu
