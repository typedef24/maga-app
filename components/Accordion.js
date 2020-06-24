import React, { useState } from "react";
import { View, Picker, Text, StyleSheet } from "react-native";

import Layout from "../constants/Layout";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Picker
          {...this.props}
          style={styles.selectedValueStyle}
          {...this.props.children}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectedValueStyle: {
    // height: 50,
    width: Layout.window.width * 0.95,
    backgroundColor: "#e6f7ff",
  },
});
