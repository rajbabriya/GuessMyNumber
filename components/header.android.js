//Comentted file is header.js
//
//
// import React from "react";
// import { StyleSheet, Text, View, Platform } from "react-native";
// import Colors from "../constants/colors";

// const Header = (props) => {
//   return (
//     // <View style={styles.heads}>
//     <View
//       style={{
//         ...styles.heads,
//         ...Platform.select({
//           ios: styles.iosHeads,
//           android: styles.androidHeads,
//         }),
//       }}
//     >
//       <Text style={styles.heading}>{props.title}</Text>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   heading: {
//     fontFamily: "drivecorps",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 22,
//   },
//   // heads: {
//   //   width: "100%",
//   //   height: 90,
//   //   paddingTop: 36,
//   //   backgroundColor: Platform.OS === "android" ? Colors.customGreen : "white",
//   //   alignItems: "center",
//   //   borderBottomColor: Platform.OS === "ios" ? "gray" : "black",
//   //   borderBottomWidth: Platform.OS === "ios" ? 2 : 4,
//   //   justifyContent: "center",
//   // },
//   heads: {
//     width: "100%",
//     height: 90,
//     paddingTop: 36,

//     alignItems: "center",

//     justifyContent: "center",
//   },
//   iosHeads: {
//     backgroundColor: "white",
//     borderBottomColor: "gray",
//     borderBottomWidth: 2,
//   },
//   androidHeads: {
//     backgroundColor: Colors.customGreen,
//     borderBottomColor: "black",
//     borderBottomWidth: 4,
//   },
// });
//
//
//
//
//
//

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
    backgroundColor: Colors.customGreen,
    borderBottomColor: "black",
    borderBottomWidth: 4,
    justifyContent: "center",
  },
});
