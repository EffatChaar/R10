import { StyleSheet }  from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1
    },
    speakerPart: {
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    aboutHeader: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 40
    },
    aboutPart: {
        color: '#ffffff',
        fontSize: 20
    },
    backIcon: {
        marginLeft: 15,
        flex: 0.55
    },
    image: {
        alignSelf: 'center',
        borderRadius: 40,
        width: 80,
        height: 80,
        marginTop: 15
    },
    speakerName: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 20
    },
    textStyle: {
        paddingTop: 10,
        paddingBottom: 20,
        marginLeft: 10,
        marginRight: 5,
        lineHeight: 22,
        fontSize: 16  
    },
    button: {
        color: '#ffffff',
        fontSize: 16,
        paddingVertical: 20
    },
    linearGradient: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    }

})

export default styles