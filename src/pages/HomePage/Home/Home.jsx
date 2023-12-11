import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    )
  }
}
