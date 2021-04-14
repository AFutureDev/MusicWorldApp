import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 65,
        height: 65,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    title: {
        color: '#000',
        fontSize: 17,
    },
    artist: {
        color: '#000',
        fontSize: 15,
    }
})

export default styles;