import { StatusBar } from "expo-status-bar";
import GameView from "./screens/GameView.js";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header.js";
import FirstScreen from "./screens/firstScreen.js";

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const setuserNumberHandler = (inputno) => {
    setuserNumber(inputno);
  };
  let content = <FirstScreen onStart={setuserNumberHandler} />;
  if (userNumber) {
    // console.log(userNumber);
    content = <GameView userChoice={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess My Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
