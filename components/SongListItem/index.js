import React from 'react'
import { Text, View, Image, FlatList } from 'react-native';

import styles from './styles';
import { SongType } from '../../types';

const SongListITemProps = {
    song: SongType,
}

const SongListITem = (SongListITemProps) => {

    const { song } = SongListITemProps;

        return (
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        )
    }

export default SongListITem;
