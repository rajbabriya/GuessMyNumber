import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const MyBtn = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.btnContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 30,
    overflow: "hidden",
  },
  btn: {
    marginTop: Dimensions.get("window").height > 600 ? "3%" : "1%",
    alignItems: "center",
    backgroundColor: Colors.customGreen,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderColor: Colors.colorTheme,
    borderWidth: 2,
  },
  btnText: {
    fontSize:
      Dimensions.get("window").width > 350 ||
      Dimensions.get("window").width > 600
        ? 22
        : 16,
    color: "#ffff",
    fontFamily: "rockabilly-1",
  },
});

export default MyBtn;
