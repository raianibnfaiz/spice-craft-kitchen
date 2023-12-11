import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import { Helmet } from 'react-helmet'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <title>Spice Craft Kitchen | Home</title>
        <meta name="description" content="Your page description" />
        {/* Add more head elements as needed */}
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    )
  }
}
