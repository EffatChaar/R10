import React from 'react'
import { Platform, Text, View, ScrollView, Linking, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import stylesGlobal from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient'



const Speaker = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[ styles.aboutHeader, stylesGlobal.globalFont ]}>
                <Icon
                    name= {Platform.select({
                        ios: 'ios-close',
                        android: 'md-close'
                    })}
                    size= {32}
                    color= '#ffffff'
                    onPress= {() => navigation.pop()}
                    style={styles.backIcon}
                />
                <Text style={[ styles.aboutPart, stylesGlobal.globalFont ]}>About The Speaker</Text>
            </View>
            <View style={[ styles.speakerPart, stylesGlobal.globalFont ]}>
                <View>
                    <Image 
                        source={{uri: data.Speaker.image}}
                        style={styles.image} />
                    <Text style={[ styles.speakerName, stylesGlobal.globalFont ]}>{data.Speaker.name}</Text>
                    <Text style={[ styles.textStyle, stylesGlobal.globalFont ]}>{data.Speaker.bio}</Text>
                </View>
                <LinearGradient
                    colors={['#9963ea', '#8797D6']}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={styles.linearGradient}
                  >
                    <TouchableOpacity
                    onPress={() => {
                    Linking.openURL(`https://en.wikipedia.org/wiki/${data.Speaker.name}`);
                        }}
                    >
                    <Text style={[ styles.button, stylesGlobal.globalFont ]}>Read More On Wikipedia</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default Speaker