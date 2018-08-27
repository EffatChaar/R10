import React, { Component } from 'react'
import Session from './Session'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text,View } from 'react-native'
import FavesContext from '../../context/FavesContext'


export default class SessionContainer extends Component {
    render() {
    const { navigation } = this.props
    const sessionId = navigation.getParam('sessionId')

      return (
          <Query
            variables={{ id: sessionId }}
            query={gql`
                query($id: ID) {
                    Session(id: $id) {
                        id
                        location
                        title
                        startTime
                        description
                        speaker {
                            id
                            image
                            name
                        }
                    }
                }`
            }>
            {({ loading, error, data }) => {
                if (loading) return <Text>Loading ...</Text>
                if (error) return <Text>Error</Text>

                return (
                    <FavesContext.Consumer>
                        { values => {
                            return (
                            <Session   
                                data={data} 
                                navigation={navigation}
                                favesIds={values}
                                sessionId={sessionId}
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