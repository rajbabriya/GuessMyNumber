import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import InputNumber from "../components/inputNumber";
import MyBtn from "../components/mybtn";
import NumberContainer from "../components/numberContainer";
import Colors from "../constants/colors";

const FirstScreen = (props) => {
  const [getValue, setTextVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState("");

  //checks dimention only first time when app loded and width by that dimensions thats why....
  //
  //
  // const [btnWidth, setBtnWidth] = useState(Dimensions.get("window").width / 4);

  // const setLayout = () => {
  //   setBtnWidth(Dimensions.get("window").width / 4);
  // };
  // Dimensions.addEventListener("change", setLayout);

  const [btnWidth, setBtnWidth] = useState(Dimensions.get("window").width / 4);

  useEffect(() => {
    const setLayout = () => {
      setBtnWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", setLayout);
    return () => {
      Dimensions.removeEventListener("change", setLayout);
    };
  });

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
        <Text style={({ textAlign: "center" }, styles.textselect)}>
          Selected Number
        </Text>
        <NumberContainer style={{ fontSize: 24 }}>
          {confirmedData}
        </NumberContainer>
        <MyBtn onPress={() => props.onStart(confirmedData)}>Start Game</MyBtn>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.InputCon}>
              <Text style={styles.textselect}>Select Number</Text>
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
                {/* <View style={styles.button}> */}
                <View style={{ width: btnWidth }}>
                  <Button
                    title="Reset"
                    onPress={setResetHandler}
                    color={Colors.customRed}
                  />
                </View>
                {/* <View style={styles.button}> */}
                <View style={{ width: btnWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  numberInput: {
    width: "10%",
    textAlign: "center",
  },
  // button: {
  //   // width: 100,
  //   width: Dimensions.get("window").width / 4,
  // },
  InputCon: {
    width: "80%",
    maxWidth: "85%",
    minWidth: 250,
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: "drive-corps-3D",
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
    // backgroundColor: Colors.lighterSky,
  },
  opcontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  textselect: {
    fontSize: 22,
    fontFamily: "drivecorps",
  },
});

export default FirstScreen;
