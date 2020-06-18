import React, { useState } from "react";
import { View, Text, Slider, StyleSheet } from "react-native";

import Layout from "../constants/Layout";

export function HorizontalSlider() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.slideTime}>
      <Slider
        step={1}
        minimumValue={0}
        maximumValue={36}
        value={value}
        onValueChange={(slideValue) => setValue(slideValue)}
        minimumTrackTintColor="#003a8c"
        maximumTrackTintColor="#bae7ff"
        thumbTintColor="#003a8c"
        style={styles.slider}
      />
      <Text>{value} months</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slideTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slider: {
    width: Layout.window.width * 0.8,
  },
});
