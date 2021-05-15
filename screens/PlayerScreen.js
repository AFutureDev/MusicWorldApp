import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';
import tracks from '../data/playlist';

TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
})

const PlayerScreen = ({navigation}) => {

  const progress = TrackPlayer.useTrackPlayerProgress();
  const { position, bufferedPosition, duration } = useTrackPlayerProgress(1000, null)

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
      capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });

    return () => TrackPlayer.destroy();
  }, [])

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