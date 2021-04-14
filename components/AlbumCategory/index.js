import React from 'react';
 import {
   View, 
   Text,
   FlatList,
 } from 'react-native';
 import { AlbumType } from '../../types';
 import AlbumComponent from '../Album';
 import styles from './styles';

 const AlbumCategoryProps = {
     title: String,
     albums: [AlbumType],
 }

 const AlbumCategory = (AlbumCategoryProps) => {
     return (
         <View style={styles.container}>
            {/* Title of Category */}
            <Text style={styles.title}>{AlbumCategoryProps.title}</Text>
            {/* List of Albums*/}
            <FlatList 
                data={AlbumCategoryProps.albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
                keyExtractor={( item ) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
         </View>
     )
 }

 export default AlbumCategory;