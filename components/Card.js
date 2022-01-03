import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.cardLayout, ...props.style }}>
      {props.children}
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardLayout: {
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.8,
    backgroundColor: "#fff",
    padding: 20,
    shadowRadius: 6,
    borderRadius: 10,
  },
});
