import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import InputNumber from "../components/inputNumber";
import NumberContainer from "../components/numberContainer";
import Colors from "../constants/colors";

const FirstScreen = (props) => {
  const [getValue, setTextVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState("");
  const textHandler = (inputText) => {
    setTextVal(inputText.replace(/[^0-9]/g, ""));
  };

  const setResetHandler = () => {
    setTextVal("");
    setConfirmed(false);
  };

  const setConfirmHandler = () => {
    const numericdata = parseInt(getValue);
    if (isNaN(numericdata) || numericdata <= 0 || numericdata > 99) {
      Alert.alert(
        "Opps Something Went Wrong!!!!",
        "Invalid Input Enter Number between 0 To 99.",
        [{ text: "ok", style: "destructive", onPress: setResetHandler }]
      );
      return;
    }
    Keyboard.dismiss();
    setConfirmed(true);
    setConfirmedData(numericdata);
    setTextVal("");
  };

  let op;
  if (confirmed) {
    op = (
      <Card style={styles.opcontainer}>
        <Text style={{ textAlign: "center" }}>Selected Number</Text>
        <NumberContainer>{confirmedData}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStart(confirmedData)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.InputCon}>
          <Text>Select Number</Text>
          <InputNumber
            style={styles.numberInput}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={true}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={textHandler}
            value={getValue}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={setResetHandler}
                color={Colors.customRed}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={setConfirmHandler}
                color={Colors.customSkyBlue}
              />
            </View>
          </View>
        </Card>
        {op}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  numberInput: {
    width: "10%",
    textAlign: "center",
  },
  button: {
    width: 100,
  },
  InputCon: {
    width: 300,

    maxWidth: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.lighterSky,
  },
  opcontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});

export default FirstScreen;
