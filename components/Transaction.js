import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import img from "../assets/images/dish.png";

export default class TransactionComponent extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image source={img} />
        </View>
        <View>
          <Text>18 days ago</Text>
          <Text>18 days ago</Text>
          <Text>18 days ago</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
