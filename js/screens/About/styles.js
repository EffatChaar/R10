import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        fontFamily: 'Montserrat'
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#C5C6C5',
        marginBottom: 15
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    allTexts: {
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 20
    },
    sessionHeader: {
        color: '#9963ea',
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: 'bold'
    }

})

export default styles