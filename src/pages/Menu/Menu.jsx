import React from 'react'
import { Helmet } from 'react-helmet'
import Cover from '../../Shared/Cover/Cover'
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import MenuCategory from '../MenuCategory/MenuCategory'
import desertImg from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
  const [menu] = useMenu([]);
  const desertItems = menu.filter(item => item.category === 'dessert')
  const soupItems = menu.filter(item => item.category === 'soup')
  const saladItems = menu.filter(item => item.category === 'salad')
  const offeredItems = menu.filter(item => item.category === 'offered')

  return (
    <div>
        <Helmet>
        <title>Spice Craft Kitchen | Menu</title>
        <meta name="description" content="Your page description" />
        {/* Add more head elements as needed */}
        </Helmet>
        <Cover img = {menuImg} title = "our menu"></Cover>
        <SectionHeader subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionHeader>
        <MenuCategory items={offeredItems}></MenuCategory>
        <MenuCategory items={desertItems} title='Desert' coverImg={desertImg}></MenuCategory>
    </div>
  )
}

export default Menu