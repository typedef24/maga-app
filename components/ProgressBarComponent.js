import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { ProgressBar } from "react-native-paper";

import Layout from "../constants/Layout";

export default function ProgressBarComponent(props) {
  return (
    <View style={[styles.container, { ...props.progressBarStyle }]}>
      <ProgressBar progress={0.8} color="#003A8C" style={styles.progressBar} />
      <View style={styles.person}>
        <Icon
          name="md-person"
          size={20}
          color="#4D7BF3"
          style={{ marginRight: 5 }}
        />
        <Text style={{ color: "#003A8C" }}>200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressBar: {
    width: Layout.window.width * 0.7,
    marginTop: 10,
  },
  person: {
    flexDirection: "row",
  },
});
