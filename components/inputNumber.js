//Input field
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InputNumber = (props) => {
  return <TextInput {...props} style={{ ...styles.texts, ...props.style }} />;
};
export default InputNumber;

const styles = StyleSheet.create({
  texts: {
    borderBottomColor: Colors.customSkyBlue,
    height: 30,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
