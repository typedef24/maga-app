import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Toast from "react-native-simple-toast";

import Icon from "@expo/vector-icons/FontAwesome";
import Font from "../constants/fonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Layout from "../constants/Layout";

export default class ToastMessage extends React.Component {
  // componentDidMount() {
  //   Toast.show("This is a long toast.", Toast.LONG);
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconTextStyle}>
          <Icon
            name="warning"
            size={30}
            color="white"
            style={{ marginBottom: 20, marginRight: 10 }}
          />
          <Text style={styles.textStyle}>
            You’re withdrawing prematurely and you’ll be loosing 20% of your
            initial investment because of this. Consider reading the terms of
            the investment
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF4D4F",
    marginTop: 5,
    marginBottom: 10,
  },
  iconTextStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  textStyle: {
    color: "white",
    fontSize: Font.medium,
    width: Layout.window.width * 0.75,
  },
});
