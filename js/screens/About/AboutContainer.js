import React, { Component } from 'react'
import About from './About'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text } from 'react-native'

const aboutData = gql`
  query {
    allConducts {
        title
        description
        id
    }
  }
`
export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About'
  }

  render() {
    return (
      <Query
        query= { aboutData } >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>
          return <About aboutData={data.allConducts} />
        }}
      </Query>
    )
  }
}