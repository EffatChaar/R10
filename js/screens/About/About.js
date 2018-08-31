import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import stylesGlobal from '../../config/styles'
import ConductItem from '../../components/ConductItem'

const About = ({ aboutData }) => {
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.divider}>
                    <Image
                        source={require('../../assets/icons/r10_logo.png')}
                        style={styles.logo} />
                </View>
                <View>
                    <Text style={[ styles.allTexts, stylesGlobal.globalFont ]}>
                        R10 is a conference that focuses on just about any topic related to dev.
                    </Text>
                    <Text style={[ styles.heading, stylesGlobal.globalFont ]}>
                        Date & Venue
                    </Text>
                    <Text style={[ styles.allTexts, stylesGlobal.globalFont ]}>
                        The R10 conference will take place on September 18, 2018 in Vancouver, BC.
                    </Text>
                    <Text style={[ styles.heading, stylesGlobal.globalFont ]}>
                        Code of Conduct
                    </Text>
                    {aboutData.map( item => (
                        <View key={item.id}>
                            <ConductItem conduct={item}/>
                        </View>
                        ))}
                    <Text style={[ styles.allTexts, stylesGlobal.globalFont ]}>
                        © RED Academy 2018
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default About