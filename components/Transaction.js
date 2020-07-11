import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import fonts from "../constants/fonts";

import img from "../assets/images/dish.png";
import { Divider } from "react-native-paper";

export default class TransactionComponent extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.mainContainer}>
          <View style={styles.contaniner}>
            <View style={{ marginRight: 8 }}>
              <Image source={img} style={{ marginTop: 10 }} />
            </View>
            <View>
              <Text>18 days ago</Text>
              <Text>Real estates investments funds</Text>
              <Text style={styles.textStyles}>
                <Text style={{ fontSize: 12 }}>usd</Text> 300,800.88
              </Text>
            </View>
          </View>
          <Ionicons
            name="ios-arrow-forward"
            size={24}
            color="black"
            style={{ marginTop: 15, marginRight: 15 }}
          />
        </View>

        {/*Divider */}
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 5,
            marginRight: 20,
            marginLeft: 20,
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 10,
  },
  contaniner: {
    flexDirection: "row",
  },
  textStyles: {
    fontSize: 18,
    color: "#3A5EAA",
    fontWeight: "bold",
  },
});
