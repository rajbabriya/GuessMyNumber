import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    // <View style={styles.heads}>
    <View style={styles.heads}>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "drivecorps",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },

  heads: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    justifyContent: "center",
  },
});
