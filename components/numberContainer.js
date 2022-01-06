import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.textFont, ...props.style }}>
        {props.children}
      </Text>
    </View>
  );
};
export default NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderColor: Colors.customGreen,
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 15,
    padding: 5,
    backgroundColor: Colors.customSkyBlue,
    marginVertical: 10,
  },
  textFont: {
    color: Colors.customRed,
    // fontSize: 24,
  },
});
