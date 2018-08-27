import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'

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
                    <Text style={styles.allTexts}>
                        R10 is a conference that focuses on just about any topic related to dev.
                    </Text>
                    <Text style={styles.heading}>
                        Date & Venue
                    </Text>
                    <Text style={styles.allTexts}>
                        The R10 conference will take place on September 18, 2018 in Vancouver, BC.
                    </Text>
                    <Text style={styles.heading}>
                        Code of Conduct
                    </Text>
                    {aboutData.map(({ title, description, id }) => (
                        <View key={id}>
                            <Text style={styles.sessionHeader}>+ {title}</Text>
                            <Text style={styles.allTexts}>{description}</Text>
                        </View>
                        ))}
                    <Text style={styles.allTexts}>
                        © RED Academy 2018
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default About