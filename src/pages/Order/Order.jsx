import React, { useState } from 'react'
import Cover from '../../Shared/Cover/Cover'
import orderCover from '../../../src/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
const Order = () => {
  const categories = ['salad','soup','dessert','drinks','pizza']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex,setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desertItems = menu.filter(item => item.category === 'dessert')
  const soupItems = menu.filter(item => item.category === 'soup')
  const saladItems = menu.filter(item => item.category === 'salad')
  const drinksItem = menu.filter(item => item.category === 'drinks')
  const pizzaItems = menu.filter(item => item.category === 'pizza')
  
  return (
    <div>
      <Helmet>
        <title>Spice Craft Kitchen | Order</title>
        <meta name="description" content="Your page description" />
        {/* Add more head elements as needed */}
      </Helmet>
        <Cover img={orderCover} title={"Order Food"}></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>Pizza</Tab>
          </TabList>
            
          <TabPanel>
            <OrderTab items={saladItems}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soupItems}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={desertItems}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinksItem}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizzaItems}></OrderTab>
          </TabPanel>
        </Tabs>
    </div>
  )
}

export default Order