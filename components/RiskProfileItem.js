import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import ImageRisk from "../assets/images/risk1.png";
import Layout from "../constants/Layout";
import fonts from "../constants/fonts";

export function RiskProfileItem({ item }) {
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <View style={{ backgroundColor: "#BAE7FF", padding: 10 }}>
          <Image
            source={item.img}
            style={{ height: 80, width: 90 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: fonts.medium, fontWeight: "bold" }}>
            {item.title}
          </Text>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#4daaff",
    borderRightWidth: 1,
    borderRightColor: "#4daaff",
    borderLeftWidth: 1,
    borderLeftColor: "#4daaff",
    borderBottomWidth: 1,
    borderBottomColor: "#4daaff",
  },
  textContainer: {
    width: Layout.window.width * 0.7,
    padding: 10,
  },
  descriptionStyle: {
    fontSize: 13,
    paddingRight: 20,
  },
});
