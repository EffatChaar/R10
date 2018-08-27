import React from 'react'
import { Platform, Text, View, ScrollView, SectionList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment'

const Faves = ({ sessions, navigation, favesIds }) => {
    return (
        <ScrollView>
            <SectionList
                renderItem = {({ item, index }) => (
                    <TouchableOpacity
                    activeOpacity= {0.5}
                    onPress= {() => {
                       navigation.navigate('Session', {sessionId: item.id})
                    }}>
                    <View key= {index}>
                        <Text>{item.title}</Text>
                        <Text>{item.location}</Text>
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
                            />
                        )}
                    </View>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title} }) =>
                    ( <Text>{moment(title).format('hh:mm A')}</Text>)}
                sections= {sessions}
                keyExtractor= { (item, index) => item + index}
            />
        </ScrollView>
    )
}
export default Faves