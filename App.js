import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet, TouchableHighlight, View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import PlayerWidget from './components/PlayerWidget';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerScreen from './screens/PlayerScreen';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaProvider>
       <BottomTabNavigation />
       <PlayerWidget />
    </SafeAreaProvider>
  )
};

export default App;
