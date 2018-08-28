import React from 'react'
import { Platform, Text, View, ScrollView, SectionList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import styles from './styles'

const Faves = ({ sessions, navigation, favesIds }) => {
    return (
        <ScrollView style={styles.container}>
            <SectionList
                renderItem = {({ item, index }) => (
                    <TouchableOpacity
                    activeOpacity= {0.5}
                    onPress= {() => {
                       navigation.navigate('Session', {sessionId: item.id})
                    }}>
                    <View style={styles.session} key= {index}>
                        <Text>{item.title}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                        {!favesIds.includes(item.id) ? (
                            <Text />
                        ) : (
                            <Icon
                                name= {Platform.select({
                                        ios: 'ios-heart',
                                        android: 'md-heart'
                                    })}
                                color= '#cf392a'
                                size= {18}
                                style={styles.icon}

                            />
                        )}
                    </View>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title} }) =>
                    ( <Text style={styles.header}>{moment(title).format('hh:mm A')}</Text>)}
                sections= {sessions}
                keyExtractor= { (item, index) => item + index}
            />
        </ScrollView>
    )
}
export default Faves