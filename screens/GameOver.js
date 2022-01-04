import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Sorry!!, Game Over</Text>
      <Card style={styles.cards}>
        <Text style={styles.innerText}>
          Number of rounds: {props.roundsNumber}
        </Text>
        <Text style={styles.innerText}>Number was: {props.userNumber}</Text>

        <View style={styles.btn}>
          <Button title="New Game" onPress={props.onRestart} />
        </View>
      </Card>
    </View>
  );
};
export default GameOver;

const styles = StyleSheet.create({
  btn: { marginTop: "3%" },
  title: {
    marginTop: "10%",
    fontSize: 33,
    color: Colors.customRed,
    fontFamily: "rockabilly-1",
  },
  cards: { marginTop: "5%" },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.lighterSky,
  },
  innerText: {
    fontFamily: "drivecorps",
    fontSize: 35,
    color: Colors.colorTheme,
  },
});
