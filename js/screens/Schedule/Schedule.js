import React from 'react'
import { Platform, Text, View, SectionList, TouchableOpacity } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'


const Schedule = ({ sessions, navigation, favesIds }) => {
    return (
        <View style={styles.container}>
            <SectionList
                renderItem = {({item, index}) => (
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                       navigation.navigate('Session', {sessionId: item.id})
                    }}>
                    <View style={styles.session} key={index}>
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
                                size= {22}
                                style={styles.icon}
                            />
                        )}
                    </View>
                </ TouchableOpacity>
                )
            }
            renderSectionHeader={({ section: { title} }) =>
                ( <Text style={styles.header}>{moment(title).format('hh:mm A')}</Text>)   
            }
            sections= {sessions}
            keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

export default Schedule