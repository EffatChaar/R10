import React from 'react'
import { Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native'

const Speaker = ({ data, navigation }) => {
    return (
        <ScrollView>
            <View>
                <Ionicons
                    name="ios-close"
                    size={35}
                    color='#000'
                    onPress={() => navigation.pop()}
                />
                <Text>About The Speaker</Text>
            </View>
            <View>
                <Image source={{uri: data.Speaker.image}} />
                <Text>{data.Speaker.name}</Text>
                <Text>{data.Speaker.bio}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                Linking.openURL(`https://en.wikipedia.org/wiki/${data.Speaker.name}`);
                    }}
                >
                <Text>Read More On Wikipedia</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Speaker