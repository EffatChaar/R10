import React from 'react'
import { Text, View, SectionList, TouchableOpacity } from 'react-native'
import moment from 'moment'

const Schedule = ( {sessions, navigation} ) => {
    console.log('SOSOS', navigation)
    console.log('SOSOSddd', sessions)
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
                    </View>
                </ TouchableOpacity>
                )

            }
            renderSectionHeader={({ section: { title} }) => ( <Text>{moment(title).format('hh:mm A')}</Text>)
               
            }
            sections={sessions}
            keyExtractor={(item, index) => item + index}
            />

        </View>
    )
}

export default Schedule