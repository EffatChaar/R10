import React from 'react'
import { Platform, Text, View, ScrollView, Linking, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'


const Speaker = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
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
            <Text style={styles.aboutPart}>About The Speaker</Text>
            <View style={styles.speakerPart}>
                <View>
                    <Image 
                        source={{uri: data.Speaker.image}}
                        style={styles.image} />
                    <Text style={styles.speakerName}>{data.Speaker.name}</Text>
                    <Text style={styles.textStyle}>{data.Speaker.bio}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                    Linking.openURL(`https://en.wikipedia.org/wiki/${data.Speaker.name}`);
                        }}
                    >
                    <Text style={styles.botton}>Read More On Wikipedia</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Speaker