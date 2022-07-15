import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import loader from '../assets/loading.gif';

export default function Loader() {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={loader}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    bannerContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: '#ffffff',
      height: '100%',
      width: '100%',
    },
  
    banner: {
      height: 300,
      width: 300,
    },
  });