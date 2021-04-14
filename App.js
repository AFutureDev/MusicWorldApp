import React from 'react';
import {
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import PlayerWidget from './components/PlayerWidget';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerScreen from './screens/PlayerScreen';


const App = () => {
  return (
    <SafeAreaProvider>
      {/* <BottomTabNavigation /> */}
      <BottomTabNavigation />
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
