import React from 'react';
 import {
   View, 
   Text,
   Image,
   TouchableWithoutFeedback,
 } from 'react-native';
 import { useNavigation } from '@react-navigation/native'
 import styles from './styles';
 import { AlbumType } from '../../types';
import AlbumScreen from '../../screens/AlbumScreen';

const AlbumProps = {
    album: AlbumType,
 }
 
 
 const AlbumComponent = (AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    //console.warn(`Album Pressed ${AlbumProps.album.artistsHeadline}`)
    navigation.navigate('AlbumScreen', { id: AlbumProps.album.id});
  }

   return (
    <TouchableWithoutFeedback onPress={onPress}>
     <View style={styles.container}>
        <Image source={{ uri: AlbumProps.album.imageUri }} style={styles.image}/>
        <Text style={styles.text}>{AlbumProps.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
   )
 };

 export default AlbumComponent;
 