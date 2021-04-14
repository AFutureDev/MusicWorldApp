import React from 'react';
 import {
   StyleSheet, View, Text
 } from 'react-native';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
 
 
 const SearchScreen = () => {
   return (
     <View>
         <View>
             <Text>Ola</Text>
             <FontAwesome name="home" size={30} color="#900" />
         </View>
     </View>
   )
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default SearchScreen;
 