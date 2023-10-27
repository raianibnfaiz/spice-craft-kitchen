import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Category></Category>
      </div>
    )
  }
}
