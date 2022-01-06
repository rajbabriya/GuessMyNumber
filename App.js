import { StatusBar } from "expo-status-bar";
import GameView from "./screens/GameView.js";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import FirstScreen from "./screens/firstScreen.js";
import GameOver from "./screens/GameOver.js";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    drivecorps: require("./assets/fonts/drivecorps.ttf"),
    "black-light1": require("./assets/fonts/TheBlacklight.ttf"),
    "drive-corps-3D": require("./assets/fonts/drivecorps3d.ttf"),
    "rockabilly-1": require("./assets/fonts/Rockabilly.ttf"),
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  const setRoundsHandler = (rnds) => {
    setRounds(rnds);
  };
  const setuserNumberHandler = (inputno) => {
    setuserNumber(inputno);
  };
  const configureNewGameHandler = () => {
    setRounds(0);
    setuserNumber(null);
  };
  let content = <FirstScreen onStart={setuserNumberHandler} />;
  // content = (
  //   <GameOver
  //     roundsNumber={1}
  //     userNumber={1}
  //     onRestart={configureNewGameHandler}
  //   />
  // );
  if (userNumber && rounds <= 0) {
    // console.log(userNumber);
    content = (
      <GameView userChoice={userNumber} onGameover={setRoundsHandler} />
    );
  } else if (rounds > 0) {
    content = (
      <GameOver
        roundsNumber={rounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
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
