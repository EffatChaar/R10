import React, { Component } from 'react'
import Faves from './Faves'
import FavesContext from '../../context/FavesContext'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text,View } from 'react-native'

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves'
  }
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              startTime
              location
              title
              id
            }
          }
        `}
      >
        {({ loading, error, data: { allSessions } }) => {
          if (loading) return <Text>Loading ...</Text>
          if (error) return <Text>Error ...(</Text>

          let sessions = allSessions
          return (
            <FavesContext.Consumer>
              { values => {
                  const ArrayFavesIds = []
                  values.favesIds.map( item => ArrayFavesIds.push(item.id))

                  const favedSessions = allSessions.filter(session =>
                    ArrayFavesIds.includes(session.id))
                  
                  let sessions = favedSessions.reduce((acc, curr) => {
                    const timeExists = acc.find(section => section.title === curr.startTime)
                    timeExists ? timeExists.data.push(curr)
                    : acc.push({ title: curr.startTime, data: [curr] })
                    return acc
                    }, []).sort((a, b) => a.title - b.title)
           
                  return (
                    <Faves
                      navigation= {this.props.navigation}
                      sessions= {sessions}
                      favesIds= {ArrayFavesIds}
                    />
                  )
                }}
            </FavesContext.Consumer>
        )
        }}
      </Query>
    )
  }
}