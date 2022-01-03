import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/numberContainer";
import Colors from "../constants/colors";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min)) + min;
  if (ranNum == exclude) {
    return generateRandom(min, max, exclude);
  } else {
    console.log(ranNum);
    return ranNum;
  }
};
const GameView = (props) => {
  //   console.log(props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btn}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
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
});
