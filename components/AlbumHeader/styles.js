import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: 200,
        height: 200,
        margin: 5,
    },
    name: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: 'row',
    },
    creator: {
        color: 'grey',
        margin: 5,
        fontSize: 16
    },
    likes: {
        color: 'grey',
        margin: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
})

export default styles;
