import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation} from 'aws-amplify';

import SongListITem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';

import { getAlbum } from '../src/graphql/queries';

const AlbumScreen = (props) => {

    const route = useRoute();
    const albumId = route.params.id;

    const [album, setAlbum] = useState(null);

    useEffect(() => {
        //console.log(albumId);
        const fetchAlbumDetails = async () => {
            try{
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId}));
                //console.log(data);
                setAlbum(data.data.getAlbum)
            } catch(e) {
                console.log(e);
            }
        }


        fetchAlbumDetails();
    }, [])

    if(!album) {
        return <Text>Loading</Text>
    }

    return(
        <View style={{ marginBottom: 70,}}>
            <FlatList 
                data={album.songs.items}
                renderItem={({ item }) => <SongListITem song={item} />}
                keyExtractor ={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album}/>}
            />
        </View>
    )
}

export default AlbumScreen;