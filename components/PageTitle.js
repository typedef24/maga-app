import * as React from "react";
import { Text, StyleSheet } from "react-native";

import font from "../assets/fonts/ProductSans-Bold.ttf";

export function PageTitle({ title }) {
  return (
    <Text style={({ fontFamily: font }, styles.headerTitle)}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    padding: 20,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },
});
