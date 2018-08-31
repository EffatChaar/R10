import React from 'react'
import { Platform, Text, View, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import stylesGlobal from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient'



const Session = ({ data, navigation, favesIds }) => {
    const allFaves = []
    favesIds.favesIds.map( item => allFaves.push(item.id))
    const existFaves = allFaves.includes(data.Session.id)

    return (
        <View style={styles.container}>
            <Text style={[ styles.lightColorText, stylesGlobal.globalFont ]}>{data.Session.location}</Text>
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
            <Text style={[ styles.title, stylesGlobal.globalFont ]}>{data.Session.title}</Text>
            <Text style={[ styles.time, stylesGlobal.globalFont ]}>{moment(new Date(data.Session.startTime)).format('hh:mm A')}</Text>
            <Text style={[ styles.texts, stylesGlobal.globalFont ]}>{data.Session.description}</Text>
            {!data.Session.speaker ? (
                <Text />
            ) : (
                <View>
                    <Text style={[ styles.lightColorText, stylesGlobal.globalFont ]}>Presented by:</Text>
                    <TouchableOpacity
                        onPress= {() => { navigation.navigate('Speaker', {speakerId: data.Session.speaker.id}) }}>
                        <View style={[ styles.speaker, stylesGlobal.globalFont ]}>
                        {!data.Session.speaker.image ? (
                            <Text />
                        ) : (
                            <Image
                                style={styles.speakerImage}
                                source={{ uri: data.Session.speaker.image }}
                        />
                        )}
                            <Text style={[ styles.speakerName, stylesGlobal.globalFont ]}>{data.Session.speaker.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            <View>
                <LinearGradient
                    colors={['#9963ea', '#8797D6']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={styles.linearGradient}
                  >
                {!existFaves ? (
                    <TouchableOpacity
                        onPress={() => {favesIds.addFav(data.Session.id)
                        }}
                    >
                    <Text style={[ styles.button, stylesGlobal.globalFont ]} >Add To Faves</Text>    
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity
                        onPress={() => {favesIds.removeFav(data.Session.id);
                        }}
                    >
                    <Text style={[ styles.button, stylesGlobal.globalFont ]}>Remove from Favs</Text>
                </TouchableOpacity>
                )}
                </LinearGradient>
            </View>
        </View>
        
    )
}

export default Session