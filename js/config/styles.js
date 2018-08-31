import { StyleSheet, Platform } from 'react-native'

const stylesGlobal = StyleSheet.create({
    globalFont: {
        fontFamily: Platform.select({
            ios: 'Montserrat',
            android: 'Montserrat-Regular'
        })
    }
})

export default stylesGlobal

