import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Banner from "../Components/Banner";
import Title from "../Components/Title";

export default function Result({ navigation, route }) {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <Title text="Result" />
      <View style={styles.scoreCont}>
        <Text style={styles.score}>{"Score: " + score}</Text>
      </View>
      <Banner />
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    // backgroundColor: '#E6E6E6',
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    marginVertical: 30,
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
  },

  scoreCont: {
    marginTop: 30,
    // padding: 20,
    // borderColor: "black",
    // borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 27,
    borderRadius: 12,
    backgroundColor: "#f01d51",
  },

  score: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    alignSelf: "center",
  },
});
