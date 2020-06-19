import React, { useState } from "react";
import { View, Picker, Text, StyleSheet } from "react-native";

import Layout from "../constants/Layout";

export function Accordion({ label1, label2, label3 }) {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        style={styles.selectedValueStyle}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item label={label1} value={label1} />
        <Picker.Item label={label2} value={label2} />
        <Picker.Item label={label3} value={label3} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedValueStyle: {
    // height: 50,
    width: Layout.window.width * 0.95,
    backgroundColor: "#e6f7ff",
  },
});
