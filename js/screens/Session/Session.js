import React from 'react'
import { Platform, Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'



const Session = ({ data, navigation, favesIds }) => {
console.log('something')
    const allFaves = []
    favesIds.favesIds.map( item => allFaves.push(item.id))
    const existFaves = allFaves.includes(data.Session.id)

    return (
        <View>
            <Text>{data.Session.location}</Text>
            {!existFaves ? (
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
            <Text>{data.Session.title}</Text>
            <Text>{moment(new Date(data.Session.startTime)).format('hh:mm A')}</Text>
            <Text>{data.Session.description}</Text>
            {!data.Session.speaker ? (
                <Text />
            ) : (
                <View>
                    <Text>Presented by:</Text>
                    <TouchableOpacity
                        onPress= {() => { navigation.navigate('Speaker', {speakerId: data.Session.speaker.id}) }}>
                        <View>
                        {!data.Session.speaker.image ? (
                            <Text />
                        ) : (
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: data.Session.speaker.image }}
                        />
                        )}
                            <Text>{data.Session.speaker.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            <View>
                {!existFaves ? (
                    <TouchableOpacity
                        onPress={() => {favesIds.addFav(data.Session.id)
                        }}
                    >
                    <Text>Add To Faves</Text>    
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity
                        onPress={() => {favesIds.removeFav(data.Session.id);
                        }}
                    >
                    <Text>Remove from Favs</Text>
                </TouchableOpacity>
            )}
            </View>
        </View>
        
    )
}

export default Session