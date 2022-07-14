import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";

export default function Quiz({ navigation }) {

  const [questions, setQuestions] = useState([])

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results[0].question);
  }

  useEffect(() => {
    getQuiz();
  }, [])
  

  return (
    <View style={styles.container}>
      
      <View style={styles.question}>
        <Text style={styles.questionText}>Q. This is a question.</Text>
      </View>

      <View style={styles.options}>
        <Pressable style={styles.eachOption}>
          <Text style={styles.eachOptionText}>Opt 1</Text>
        </Pressable>
        <Pressable style={styles.eachOption}>
          <Text style={styles.eachOptionText}>Opt 2</Text>
        </Pressable>
        <Pressable style={styles.eachOption}>
          <Text style={styles.eachOptionText}>Opt 3</Text>
        </Pressable>
        <Pressable style={styles.eachOption}>
          <Text style={styles.eachOptionText}>Opt 4</Text>
        </Pressable>
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
        {/* <Pressable onPress={() => navigation.navigate('Result')}>
          <Text>End</Text>
        </Pressable> */}
      </View>
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

  question: {
    marginVertical: 20,

  },

  options: {
    marginVertical: 16,
    flex: 1,
    justifyContent: 'flex-start'
  },

  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    // paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: "#1A759F",
    padding: 14,
    width: '30%',
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
  },

  questionText: {
    fontSize: 25
  },

  eachOption: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    borderRadius: 12
  },

  eachOptionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fffff'
  }
});
