import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Banner from "../Components/Banner";

export default function Result({ navigation }) {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View>
        <Banner />
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
