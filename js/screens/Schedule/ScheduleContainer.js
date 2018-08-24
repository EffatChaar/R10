import React, { Component } from 'react'
import Schedule from './Schedule'

const scheduleData = gql`
  query {
    allSessions {
      startTime
      title
      location
      id
    }
  }
`

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule'
  }
  render() {
    return (
      <Query
        query= { scheduleData } >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>
          return <About scheduleData={data.allSessions} />
        }}
      </Query>
    )
  }
}