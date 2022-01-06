import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import MyBtn from "../components/mybtn";
import NumberContainer from "../components/numberContainer";
import Colors from "../constants/colors";
// import GameOver from "./GameOver";
import { AntDesign } from "@expo/vector-icons";
import { ScreenOrientation } from "expo"; //API used for locking screen to landscape or protrait or other operations like know orientation and onorientation change listner etc......

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

const renderListItem = (listLength, itemData) => (
  <View style={styles.items}>
    <Text>{listLength - itemData.index})</Text>
    <Text>{itemData.item}</Text>
  </View>
);
// const items = (value, rounds) => (
//   <View key={value} style={styles.items}>
//     <Text>{rounds})</Text>
//     <Text>{value}</Text>
//   </View>
// );

const GameView = (props) => {
  //   console.log(props.userChoice);
  const initlization = generateRandom(1, 100, props.userChoice);
  const [pastGuess, setPastGuess] = useState([initlization.toString()]);
  // const [pastGuess, setPastGuess] = useState([initlization]);
  const [currentGuess, setCurrentGuess] = useState(initlization);
  const currLow = useRef(1);
  const currHigh = useRef(100);
  const [rounds, setRounds] = useState(0);
  // const setRoundsHandler = (rnds) => {
  //   setRounds(rnds);
  // };
  const { userChoice, onGameover } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameover(pastGuess.length);
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
        currLow.current = currentGuess + 1;
      }
      const nextNum = generateRandom(
        currLow.current,
        currHigh.current,
        currentGuess
      );
      setCurrentGuess(nextNum);
      // setRounds((currounds) => currounds + 1);
      // setPastGuess((curpastGuess) => [nextNum, ...curpastGuess]);
      setPastGuess((curPastGuesses) => [nextNum.toString(), ...curPastGuesses]);
    }
  };

  const [availWidth, setAvailWidth] = useState(Dimensions.get("window").width);
  const [availHeight, setAvailHeight] = useState(
    Dimensions.get("window").height
  );
  useEffect(() => {
    const setLayout = () => {
      setAvailWidth(Dimensions.get("window").width);
      setAvailHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", setLayout);

    return () => {
      Dimensions.removeEventListener("change", setLayout);
    };
  });

  const btnSize = availHeight > 600 ? 30 : 17;

  if (availHeight < 600) {
    return (
      <View style={styles.screen}>
        <Text style={styles.textselect}>Opponent's Guess</Text>

        <Card style={{ alignItems: "center", ...styles.btn }}>
          <MyBtn onPress={() => nextGuessHandler("lower")}>
            <AntDesign name="arrowdown" size={btnSize} />
          </MyBtn>
          <NumberContainer style={{ fontSize: 20, marginVertical: 0 }}>
            {currentGuess}
          </NumberContainer>
          <MyBtn onPress={() => nextGuessHandler("greater")}>
            <AntDesign name="arrowup" size={btnSize} />
          </MyBtn>
        </Card>
        <View style={styles.itemCon}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuess}
            renderItem={renderListItem.bind(this, pastGuess.length)}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.textselect}>Opponent's Guess</Text>
      <NumberContainer style={{ fontSize: 24 }}>{currentGuess}</NumberContainer>
      <Card style={styles.btn}>
        {/* <MyBtn onPress={() => nextGuessHandler("lower")}>Lower</MyBtn>
        <MyBtn onPress={() => nextGuessHandler("greater")}>Greater</MyBtn> */}

        <MyBtn onPress={() => nextGuessHandler("lower")}>
          <AntDesign name="arrowdown" size={btnSize} />
        </MyBtn>
        <MyBtn onPress={() => nextGuessHandler("greater")}>
          <AntDesign name="arrowup" size={btnSize} />
        </MyBtn>
      </Card>
      <View style={styles.itemCon}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuess.map((guess, index) => items(guess, index + 1))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuess}
          renderItem={renderListItem.bind(this, pastGuess.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: "80%",
    maxWidth: "80%",
  },
  textselect: {
    fontSize: 22,
    color: Colors.customGreen,
    fontFamily: "drivecorps",
  },

  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  itemCon: {
    flex: 1,
    width: "70%",
    marginVertical: 20,
  },
  items: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.colorTheme,
    borderWidth: 1,
    marginTop: "2%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
