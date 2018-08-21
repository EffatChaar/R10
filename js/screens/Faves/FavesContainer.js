import React, { Component } from 'react'
import Faves from './Faves'

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves'
  }
  render() {
    return (
      <Faves />
    )
  }
}