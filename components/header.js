import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.heads}>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  heads: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.customGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
