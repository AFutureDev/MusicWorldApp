import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { AlbumType } from '../../types';
import styles from './styles';

const AlbumHeaderProps = {
    album: AlbumType
}

const AlbumHeader = (AlbumHeaderProps) => {

    const { album } = AlbumHeaderProps;

    return (
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri }}  style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}> By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;