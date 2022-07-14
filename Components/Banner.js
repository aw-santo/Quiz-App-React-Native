import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Banner({ source }) {

  let sourceURL = 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png';
  sourceURL = typeof(source)==='string' ? source : sourceURL;

  let sourceObj = {
    uri: sourceURL
  }
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={sourceObj}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  banner: {
    height: 300,
    width: 300,
  },
});
