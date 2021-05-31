import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';
import tracks from '../data/playlist';
import { AppContext } from '../AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../src/graphql/queries';

TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
})

const PlayerScreen = ({navigation}) => {

  const progress = TrackPlayer.useTrackPlayerProgress();
  const { position, bufferedPosition, duration } = useTrackPlayerProgress(1000, null)
  const [song, setSong] = useState(null);

  const { songId } = useContext(AppContext);

  useEffect(() => {
    // fetch data about song 
    const fetchSong = async () => {
      try{
        const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
        console.log(data);
        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    }

    fetchSong();
  }, [songId])

  const getProgress = () => {
    return (position / duration) * 100;
  }

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

    return () => TrackPlayer.destroy();
  }, [])

  // if(!song){
  //   return null;
  // }

  return(
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${(position /duration)*100}%`, alignSelf: 'flex-start' }]}></View>
      {/* <Text style={styles.progress}>Buffered progress: {bufferedPosition} seconds buffered out of {duration} total</Text> */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.pause()}>
          <Text style={styles.text}>PAUSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
          <Text style={styles.text}>PLAY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToPrevious()}>
          <Text style={styles.text}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.skipToNext()}>
          <Text style={styles.text}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  progress: {
    height: 3,
    backgroundColor: '#adf802',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  }
})

export default PlayerScreen;