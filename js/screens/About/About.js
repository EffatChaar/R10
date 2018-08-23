import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

const About = () => {
    return (
        <View>
            <ScrollView >
                <Image
                    source={require('../../assets/icons/r10_logo.png')} />
                <View>
                <Text>
                    R10 is a conference that focuses on just about any topic related to dev.
                </Text>
                <Text>
                    Date & Venue
                </Text>
                <Text>
                    The R10 conference will take place on September 18, 2018 in Vancouver, BC.
                </Text>
                <Text>
                    Code of Conduct
                </Text>
                <TouchableOpacity>
                    title: 'Purpose'
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default About