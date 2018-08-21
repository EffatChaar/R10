import React, { Component } from 'react'
import About from './About'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, View, Image, ScrollView } from 'react-native'


export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About'
  }
  render() {
    return (
      <Query
        query= {gql`
        {
          allConducts {
              id
              title
              description
            }
          }
        `}
        >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          console.log("mydata",data);
          return <About data={data} />;
        }}
      </Query>
    )
  }
}