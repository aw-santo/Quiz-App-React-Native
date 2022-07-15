import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Quiz from "./Screens/Quiz";
import Result from "./Screens/Result";

import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Nav/MyStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
          <MyStack />
        {/* </View> */}
      </NavigationContainer>
      <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    // paddingHorizontal: 20,
  },
});
