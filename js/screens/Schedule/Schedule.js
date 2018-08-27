import React from 'react'
import { Platform, Text, View, SectionList, TouchableOpacity } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'


const Schedule = ({ sessions, navigation, favesIds }) => {
    return (
        <View>
            <SectionList
                renderItem = {({item, index}) => (
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                       navigation.navigate('Session', {sessionId: item.id})
                    }}>
                    <View key={index}>
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
                                color= '#ff0000'
                                size= {22}
                            />
                        )}
                    </View>
                </ TouchableOpacity>
                )
            }
            renderSectionHeader={({ section: { title} }) =>
                ( <Text>{moment(title).format('hh:mm A')}</Text>)   
            }
            sections= {sessions}
            keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

export default Schedule