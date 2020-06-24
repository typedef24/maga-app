import React, { useState } from "react";
import { View, Text, Slider, StyleSheet } from "react-native";

import Layout from "../constants/Layout";

export default class HorizontalSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.slideTime}>
        <Slider {...this.props} style={styles.slider} />
        <Text>
          {this.props.value} {this.props.unit}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slideTime: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slider: {
    width: Layout.window.width * 0.72,
  },
});
