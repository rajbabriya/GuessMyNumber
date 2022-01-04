import React, { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/numberContainer";
import Colors from "../constants/colors";
import GameOver from "./GameOver";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min)) + min;
  if (ranNum == exclude) {
    return generateRandom(min, max, exclude);
  } else {
    // console.log(ranNum);
    return ranNum;
  }
};
const GameView = (props) => {
  //   console.log(props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, props.userChoice)
  );
  const currLow = useRef(1);
  const currHigh = useRef(100);
  const [rounds, setRounds] = useState(0);
  // const setRoundsHandler = (rnds) => {
  //   setRounds(rnds);
  // };
  const { userChoice, onGameover } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameover(rounds);
    }
  }, [currentGuess, userChoice, onGameover]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("OOPS!!", "Wrong Guess", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    } else {
      if (direction === "lower") {
        currHigh.current = currentGuess;
      } else {
        currLow.current = currentGuess;
      }
      const nextNum = generateRandom(
        currLow.current,
        currHigh.current,
        currentGuess
      );
      setCurrentGuess(nextNum);
      setRounds((currounds) => currounds + 1);
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.textselect}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btn}>
        <Button title="Lower" onPress={() => nextGuessHandler("lower")} />
        <Button title="Greater" onPress={() => nextGuessHandler("greater")} />
      </Card>
    </View>
  );
};
export default GameView;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.lighterSky,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
  },
  textselect: {
    fontSize: 22,
    color: Colors.customGreen,
    fontFamily: "drivecorps",
  },
});
