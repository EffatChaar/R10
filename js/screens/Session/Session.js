import React from 'react'
import { Platform, Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'



const Session = ({ data, navigation, favesIds }) => {
console.log('something')
    const allFaves = []
    favesIds.favesIds.map( item => allFaves.push(item.id))
    const existFaves = allFaves.includes(data.Session.id)

    return (
        <View style={styles.container}>
            <Text style={styles.lightColorText}>{data.Session.location}</Text>
            {!existFaves ? (
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
            <Text style={styles.title}>{data.Session.title}</Text>
            <Text style={styles.time}>{moment(new Date(data.Session.startTime)).format('hh:mm A')}</Text>
            <Text style={styles.texts}>{data.Session.description}</Text>
            {!data.Session.speaker ? (
                <Text />
            ) : (
                <View>
                    <Text style={styles.lightColorText}>Presented by:</Text>
                    <TouchableOpacity
                        onPress= {() => { navigation.navigate('Speaker', {speakerId: data.Session.speaker.id}) }}>
                        <View style={styles.speaker}>
                        {!data.Session.speaker.image ? (
                            <Text />
                        ) : (
                            <Image
                                style={styles.speakerImage}
                                source={{ uri: data.Session.speaker.image }}
                        />
                        )}
                            <Text style={styles.speakerName}>{data.Session.speaker.name}</Text>
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