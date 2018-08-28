import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    icon: {
        alignSelf: 'flex-end'
    },
    lightColorText: {
        color: '#999999'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    time: {
        paddingTop: 5,
        paddingBottom: 15,
        color: '#cf392a'
    },
    texts: {
        lineHeight: 20,
        marginBottom: 20
    },
    speaker: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#C5C6C5',
        borderBottomWidth: 1
    },
    speakerImage: {
        borderRadius: 25,
        width: 50,
        height: 50,
        marginRight: 10
    },
    speakerName: {
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        paddingTop: 30,
        paddingBottom: 20
    }
})

export default styles