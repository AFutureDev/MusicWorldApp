import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SearchScreen from '../screens/SearchScreen';
import PlayerScreen from '../screens/PlayerScreen';
import LibraryScreen from '../screens/LibraryScreen';
import AlbumScreen from '../screens/AlbumScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {

    return (
      <Tab.Navigator>
         <Tab.Screen 
            name="Home"
            options={{
              tabBarIcon: ({color}) => <FontAwesome name="home" size={30} style={{ marginBottom: -3 }} color={color}/>,
            }}  >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Music World"
                component={HomeScreen}  
              />
              <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen 
            name="Search"
            options={{
              tabBarIcon: ({color}) => <Feather name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
              }} >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Search"
                component={SearchScreen}  
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen 
            name="Library"
            options={{
              tabBarIcon: ({color}) => <MaterialIcons name="library-music" size={30} style={{ marginBottom: -3 }} color={color} />,
            }} >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Library"
                component={LibraryScreen}  
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        {/* <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => <FontAwesome name="home" size={30} style={{ marginBottom: -3 }} color={color}/>,
            }}      
        /> */}
        {/* <Tab.Screen 
            name="AlbumScreen"
            component={AlbumScreen} 
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="album" size={30} style={{ marginBottom: -3 }} color={color}/>,
            }}      
        /> */}
        {/* <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
                tabBarIcon: ({color}) => <Feather name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
            }}      
        /> */}
        {/* <Tab.Screen 
            name="Library" 
            component={LibraryScreen} 
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="library-music" size={30} style={{ marginBottom: -3 }} color={color} />,
            }}      
        /> */}
        <Tab.Screen
            name="Player"
            component={PlayerScreen}
            options={{
              tabBarIcon: ({color}) => <AntDesign name="playcircleo" size={30} style={{ marginBottom: -3 }} color={color} />,
            }}
             />
      </Tab.Navigator>
    )
  }

const BottomTabNavigation = () => {
    return (
      <NavigationContainer>
         <MyTabs />
      </NavigationContainer>
    );
  }

  export default BottomTabNavigation;

