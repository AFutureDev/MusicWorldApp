import React, { useEffect, useState } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer, { usePlaybackState, 
                      STATE_PLAYING, 
                      useTrackPlayerEvents, 
                      TrackPlayerEvents, 
                      useTrackPlayerProgress,
                      getDuration,
                      getPosition,
                      } from 'react-native-track-player';

import tracks from '../../data/playlist';

import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerScreen from '../../screens/PlayerScreen';


// const songDet = {
//     id: '1',
//     imageUri: tracks.artwork,
//     title: 'JuJu',
//     artist: 'Zubi',
//     artwork: 'https://images.genius.com/1227410d9cc1989bde09273b308addf8.640x640x1.jpg',
// }
// const songDet2 = {
//     id: '1',
//     imageUri: tracks.artwork,
//     title: 'JuJu',
//     artist: 'Zubi',
//     artwork: 'https://images.genius.com/1227410d9cc1989bde09273b308addf8.640x640x1.jpg',
// }

// const songsDetails = [...songDet, ...songDet2];

const events = [
    TrackPlayerEvents.PLAYBACK_STATE,
    TrackPlayerEvents.PLAYBACK_ERROR
  ];

  const propsTrack = {
    trackDetails: tracks,
  }

const PlayerWidget = ({ navigation }) => {
  const goPlayerScreen = () => {
    navigation.navigate("Player")
  }

    const playbackState = usePlaybackState();
    // const progress = useTrackPlayerProgress();
    const [playerState, setPlayerState] = useState(null);
    // const [duration, setDuration] = useState(null);
    // const [position, setPosition] = useState(null);
    const { position, bufferedPosition, duration } = useTrackPlayerProgress(1000, null)
    const isPlaying = playerState === STATE_PLAYING;
    const [trackTitle, setTrackTitle] = useState("");
    const [trackArtwork, setTrackArtwork] = useState();
    const [trackArtist, setTrackArtist] = useState("");

    useTrackPlayerEvents(events, (event) => {
        if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
        console.warn('An error occured while playing the current track.');
        }
        if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
        setPlayerState(event.state);
        // setDuration(event.positionMilis);
        // setPosition(event.positionMilis);
        }
    });

    useTrackPlayerEvents(["playback-track-changed"], async event => {
      if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const { title, artist, artwork, } = track || {};
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);
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

        async function togglePlayback() {
          const currentTrack = await TrackPlayer.getCurrentTrack();
          if (currentTrack == null) {
            await TrackPlayer.reset();
            await TrackPlayer.add(tracks);
            await TrackPlayer.play();
          } else {
            if (playbackState === TrackPlayer.STATE_PAUSED) {
              await TrackPlayer.play();
            } else {
              await TrackPlayer.pause();
            }
          }
        }
    

        return (
            <View style={styles.container}>
              <View>
              {/* <View style={[styles.progress, { width: `${position}%`} ]} /> */}
              <View style={[styles.progress, { width: `${(position / duration)*100}%`, alignSelf: 'flex-start' }]}></View>
              {/* <Text>Track progress: {position} seconds out of {duration} total</Text> */}
              <View style={styles.row}>
              <Image source={{ uri: trackArtwork }} style={styles.image} />  
                <View style={styles.nameContainer}>
                  <Text style={styles.title}>{ trackTitle }</Text>
                  <Text style={styles.artist}>{ trackArtist }</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <AntDesign name="hearto" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={togglePlayback}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} style={{ color: "#000"}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                            <Entypo name="controller-next" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
              </View>
              </View>
         
        )
    }

export default PlayerWidget;
