import React, { useEffect, useState } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer, { usePlaybackState, STATE_PLAYING, useTrackPlayerEvents, TrackPlayerEvents } from 'react-native-track-player';

import tracks from '../../data/playlist';

import styles from './styles';


const songDet = {
    imageUri: 'https://images.genius.com/1227410d9cc1989bde09273b308addf8.640x640x1.jpg',
    title: 'JuJu',
    artist: 'Zubi',
    artwork: 'https://images.genius.com/1227410d9cc1989bde09273b308addf8.640x640x1.jpg',
}

const events = [
    TrackPlayerEvents.PLAYBACK_STATE,
    TrackPlayerEvents.PLAYBACK_ERROR
  ];

const PlayerWidget = () => {
    const playbackState = usePlaybackState();

    const [playerState, setPlayerState] = useState(null);

    const isPlaying = playerState === STATE_PLAYING;

    useTrackPlayerEvents(events, (event) => {
        if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
        console.warn('An error occured while playing the current track.');
        }
        if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
        setPlayerState(event.state);
     }
    });
    

    const setUpTrackPlayer = async () => {
        try{
          await TrackPlayer.setupPlayer();
          await TrackPlayer.add(tracks);
          console.log('Tracks added');
        } catch(e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        setUpTrackPlayer();
        TrackPlayer.updateOptions({
          stopWithApp: false,
          capabilities: 
          [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            TrackPlayer.CAPABILITY_STOP
        ],
          compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
           
          ],
        });
        setUpTrackPlayer();
    
        return () => TrackPlayer.destroy();
      }, [])

      const onPressPlayPauseButton = async () => {
          if (playbackState === TrackPlayer.STATE_PAUSED && playerState) {
            await TrackPlayer.play();
          } else {
            await TrackPlayer.pause();
          }
        }
      


        return (
            <View style={styles.container}>
                <Image source={{ uri: songDet.imageUri}} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{songDet.title}</Text>
                        <Text style={styles.artist}>{songDet.artist}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious}>
                            <Entypo name="controller-jump-to-start" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressPlayPauseButton}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} style={{ color: "#000"}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                            <Entypo name="controller-next" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

export default PlayerWidget;
