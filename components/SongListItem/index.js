import React , { useContext } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { SongType } from '../../types';
import { AppContext } from '../../AppContext';

const SongListITemProps = {
    song: SongType,
}

const SongListITem = (SongListITemProps) => {

    const { song } = SongListITemProps;

    const { setSongId } = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
    }

        return (
            <TouchableOpacity onPress={onPlay}>
                <View style={styles.container}>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <TouchableOpacity>
                            <Text style={styles.title}>{song.title}</Text>
                            <Text style={styles.artist}>{song.artist}</Text>
                         </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

export default SongListITem;
