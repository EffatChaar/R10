import React from 'react'
import { Platform, Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'



const Session = ({ data, navigation, context }) => {

    const allFaves = []
    context.favesIds.map( item => allFaves.push(item.id))
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
                    size= {20}
                    color= '#ff0000'
                />
            )}
            <Text>{data.Session.title}</Text>
            <Text>{moment(new Date(data.Session.startTime)).format('hh:mm A')}</Text>
            <Text>{data.Session.description}</Text>
            <Text>Presented by:</Text>
            <TouchableOpacity
                onPress= {() => navigation.navigate('Speaker', {speakerId: data.Session.speaker.id}) }>
                <View>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: data.Session.speaker.image }}
                        /> 
                    <Text>{data.Session.speaker.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {!existFaves ? context.addFav(data.Session.id) : context.removeFav(data.Session.id);
                }}
            >
            { !existFaves ? <Text>Add To Favs</Text> : <Text> Remove From Faves</Text>}    
            </TouchableOpacity>
        </View>
    )
}

export default Session