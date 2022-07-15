import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";

export default function Quiz({ navigation }) {
  const [queObj, setQueObj] = useState();
  const [que, setQue] = useState(0);
  const [opts, setOpts] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986";

    const res = await fetch(url);
    const data = await res.json();

    setQueObj(data.results);

    // console.log(data.results);
    generateOptsShuffle(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Into effect");
    getQuiz();
    console.log("Out of effect");
  }, []);

  const handleNext = () => {
    setQue((current) => current + 1);
  };

  const handleresult = () => {
    navigation.navigate("Result", {score: score+1});
  };

  const generateOptsShuffle = (_arr) => {
    let array = [];
    _arr.map((curr) => {
      let arrN = [...curr.incorrect_answers, curr.correct_answer];
      array = [...array, arrN];
    });

    for (let i = 0; i < array.length; i++) {
      for (let j = array[i].length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [array[i][j], array[i][k]] = [array[i][k], array[i][j]];
      }
    }

    // console.log(array);
    setOpts(array);
  };

  const shuffleArray = (_array) => {
    for (let i = _array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
  };

  const optionClick = (_index) => {
    let valid = queObj[que]?.correct_answer === opts[que][_index];
    if (valid) {
      setScore(curr => (curr + 1));
    }
    que < 9 ? handleNext() : handleresult();

    console.log(valid + ` score: ${score}`);
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : queObj && (
        <View style={styles.parent}>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              {`Q${que+1}. ` + decodeURIComponent(queObj[que].question)}
            </Text>
          </View>

          <View style={styles.options}>
            {opts[que]?.map((curr, index) => (
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
                  },
                  styles.eachOption,
                ]}
                key={curr}
                android_ripple={{ color: "#cccccc" }}
                onPress={() => optionClick(index)}
              >
                <Text style={styles.eachOptionText}>
                  {`${String.fromCharCode(65 + index)}.  ` +
                    decodeURIComponent(curr)}
                </Text>
              </Pressable>
            ))}
            {/* <Pressable style={styles.eachOption}>
              <Text style={styles.eachOptionText}>Opt 2</Text>
            </Pressable>
            <Pressable style={styles.eachOption}>
              <Text style={styles.eachOptionText}>Opt 3</Text>
            </Pressable>
            <Pressable style={styles.eachOption}>
              <Text style={styles.eachOptionText}>Opt 4</Text>
            </Pressable> */}
          </View>

          <View style={styles.buttons}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Home</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={que < 9 ? handleNext : handleresult}
              android_ripple={{ color: "#cccccc" }}
            >
              <Text style={styles.buttonText}>{que < 9 ? 'Skip':'Result'}</Text>
            </Pressable>
            {/* <Pressable onPress={() => navigation.navigate('Result')}>
          <Text>End</Text>
        </Pressable> */}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    // backgroundColor: '#E6E6E6',
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: '#ffffff'
  },

  parent: {
    height: "100%",
  },

  question: {
    marginVertical: 20,
  },

  options: {
    marginVertical: 16,
    flex: 1,
    justifyContent: "flex-start",
  },

  buttons: {
    marginBottom: 12,
    paddingVertical: 16,
    // paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#1A759F",
    padding: 14,
    width: "30%",
    borderRadius: 16,
    alignItems: "center",
  },

  greyedButtton: {
    backgroundColor: "#a3a2a2",
    padding: 14,
    width: "30%",
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
  },

  questionText: {
    fontSize: 25,
    
  },

  eachOption: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    borderRadius: 12,
  },

  eachOptionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
  },
});
