import React from 'react'
import { Helmet } from 'react-helmet'
import Cover from '../../Shared/Cover/Cover'
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import MenuCategory from '../MenuCategory/MenuCategory'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import drinksImg from '../../assets/menu/drinks.jpg'

const Menu = () => {
  const [menu] = useMenu([]);
  const desertItems = menu.filter(item => item.category === 'dessert')
  const soupItems = menu.filter(item => item.category === 'soup')
  const pizzaItems = menu.filter(item => item.category === 'pizza')
  const saladItems = menu.filter(item => item.category === 'salad')
  const drinksItems = menu.filter(item => item.category === 'drinks')
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
        <MenuCategory items={desertItems} title='dessert' coverImg={desertImg}></MenuCategory>
        <MenuCategory items={pizzaItems} title='pizza' coverImg={pizzaImg}></MenuCategory>
        <MenuCategory items={saladItems} title='salad' coverImg={saladImg}></MenuCategory>
        <MenuCategory items={soupItems} title='soup' coverImg={soupImg}></MenuCategory>
        <MenuCategory items={drinksItems} title='drinks' coverImg={drinksImg}></MenuCategory>
    </div>
  )
}

export default Menu