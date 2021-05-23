import { StyleSheet } from 'react-native';
import { getDuration } from 'react-native-track-player';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 49,
        width: '100%',
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: '#000',
    },
    progress: {
        height: 3,
        backgroundColor: '#adf802',
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 5,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        justifyContent: 'space-evenly',
    },
    title: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 5,
    },
    artist: {
        color: '#000',
        fontSize: 12,
    },
})

export default styles;