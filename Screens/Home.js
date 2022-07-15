import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../Components/Title";
import Banner from "../Components/Banner";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text="Quizing"/>
      <Banner
        source="https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png"
      />
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
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
});
