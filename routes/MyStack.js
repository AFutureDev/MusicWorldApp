import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PlayerScreen from '../screens/PlayerScreen';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import PlayerWidget from '../components/PlayerWidget';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PlayerWidget" component={PlayerWidget} />
            <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        </Stack.Navigator>
    )
}

export default MyStack;
