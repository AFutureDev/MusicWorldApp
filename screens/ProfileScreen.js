import React from 'react'
import { View, Text, Button } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <View>
            <Button title="p" onPress={() => navigation.navigate('Player')} />
        </View>
    )
}

export default ProfileScreen;
