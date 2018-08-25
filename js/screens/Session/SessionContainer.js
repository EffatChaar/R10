import React, { Component } from 'react'
import Session from './Session'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text,View } from 'react-native'

export default class SessionContainer extends Component {
    constructor(props){
        super(props)
    }
 
    render() {
    const { navigation } = this.props
    const sessionId = navigation.getParam('sessionId')
    console.log('SESSIONID',sessionId)

      return (
          <View>
              <Text>aaa</Text>
          </View>
        )
    }
}