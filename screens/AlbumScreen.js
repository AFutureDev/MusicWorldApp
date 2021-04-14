import { useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import SongListITem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';

const AlbumScreen = (props) => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return(
        <View style={{ marginBottom: 70,}}>
            <FlatList 
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListITem song={item} />}
                keyExtractor ={(item) => item.id }
                ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
            />
        </View>
    )
}

export default AlbumScreen;