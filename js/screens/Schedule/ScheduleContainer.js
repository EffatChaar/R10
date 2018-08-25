import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text,View } from 'react-native'

const scheduleData = gql`
   {
    allSessions {
      id
      title
      location
      startTime   
    }
  }
`

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule'
  }
  
  render() {
  console.log("OLOLOLO",this.props.navigation)
    return (
      <Query
        query= { scheduleData } >
        {({ loading, error, data:{allSessions}}) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>
          
            let sessions = allSessions.reduce((acc, curr) => {
              const timeExists = acc.find(section => section.title === curr.startTime)
                timeExists ? timeExists.data.push(curr)
                : acc.push({ title: curr.startTime, data: [curr] })
                return acc
              }, []).sort((a, b) => a.title - b.title)
              return (
                  <Schedule
                  sessions={sessions}
                  navigation={this.props.navigation}
                   />
              )
            }}
      </Query>
    )
  }
}