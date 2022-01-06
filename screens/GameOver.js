import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import Card from "../components/Card";
import MyBtn from "../components/mybtn";
import Colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Sorry!!, Game Over</Text>
        <View style={styles.imgCon}>
          <Image
            style={styles.img}
            fadeDuration={1000}
            source={{
              uri: "https://ak.picdn.net/shutterstock/videos/1015733875/thumb/10.jpg",
            }}
            // source={require("../assets/bggameover.jpg")}
          />
        </View>
        <Card style={styles.cards}>
          <Text style={styles.innerText}>
            Number of rounds:{" "}
            <Text style={styles.txtNumber}>{props.roundsNumber}</Text>
          </Text>
          <Text style={styles.innerText}>
            Number was: <Text style={styles.txtNumber}>{props.userNumber}</Text>
          </Text>

          <MyBtn onPress={props.onRestart}>New Game</MyBtn>
        </Card>
      </View>
    </ScrollView>
  );
};
export default GameOver;

const styles = StyleSheet.create({
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
    // backgroundColor: Colors.lighterSky,
  },
  innerText: {
    fontFamily: "drivecorps",
    fontSize: Dimensions.get("window").width > 350 ? 30 : 20,
    color: Colors.colorTheme,
  },
  imgCon: {
    marginVertical: 40,
    borderRadius: (Dimensions.get("window").width * 0.3) / 2,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: Colors.customGreen,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  txtNumber: {
    color: Colors.customRed,
  },
});
