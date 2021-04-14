import React from 'react';
 import {
   StyleSheet, View, Text, FlatList
 } from 'react-native';

import Album from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

// const album = {
//   id: '1',
//   imageUri: 'https://i.ytimg.com/vi/sw7mB_PfPc0/maxresdefault.jpg',
//   artistsHeadline: 'Zubi - JuJu (feat. Anatu & Rusalka)',
// }

// const albumCategory = {
//   id: '1',
//   title: 'Deep House',
//   albums: [
//     {
//       id: '1',
//       imageUri: 'https://i.ytimg.com/vi/sw7mB_PfPc0/maxresdefault.jpg',
//       artistsHeadline: 'Zubi - JuJu (feat. Anatu & Rusalka)'
//     },
//     {
//       id: '2',
//       imageUri: 'https://i.ytimg.com/vi/y1gNa3Kimg8/maxresdefault.jpg',
//       artistsHeadline: 'Ablaikan - Uletay (feat. VERA)'
//     },
//     {
//       id: '3',
//       imageUri: 'https://i.ytimg.com/vi/_rLGRvO6MPE/maxresdefault.jpg',
//       artistsHeadline: 'КИНО - Кукушка (Almaz Remix)'
//     },
//     {
//       id: '4',
//       imageUri: 'https://i1.sndcdn.com/artworks-8C9szN0kYyoL85wM-2edTiw-t500x500.png',
//       artistsHeadline: 'КУЧЕР & JANAGA - По щекам слёзы'
//     }
//   ]
// };
 
 
 const HomeScreen = () => {
   return (
     <View style={styles.container}>
      <FlatList 
        data={albumCategories}
        renderItem={({ item }) => 
          <AlbumCategory 
            title={item.title} 
            albums={item.albums}
          />}
          keyExtractor={(item) => item.id }
      />
     </View>
   )
 };
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 55,
  }
 });
 
 export default HomeScreen;
 