import React, { Component } from 'react'
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text,View } from 'react-native'


export default class SpeakerContainer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { navigation } = this.props
        const speakerId = navigation.getParam('speakerId')

        return (
            <Query
                variables={{ id: speakerId }}
                query={ gql`
                    query($id: ID!) {
                        Speaker(id: $id) {
                            bio
                            image
                            name
                            url
                        }
                    }`
                }
            >
            {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) return <Text>Error: </Text>

                return <Speaker data={data} navigation={navigation} />
            }}
            </Query>
        )
    }
}