import * as React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import CompareInvestmentsComponent from "../components/CompareInvestment";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Layout from "../constants/Layout";
import fonts from "../constants/fonts";

export default function CompareInvestmentsScreen() {
  const investments = [
    {
      id: "1",
      title:
        "Real estate investments funds in the dubai, los Angeles, new York and sub-saharan Africa.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 90,
      duration: 6,
      total: 2000,
    },
    {
      id: "2",
      title:
        "Online store specialized in casual outfits for both men and women of all sizes.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 90,
      duration: 6,
      total: 2000,
    },
    {
      id: "3",
      title:
        "Restaurant chain specialized in Mexican, Irish and African dishes.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 90,
      duration: 6,
      total: 2000,
    },
    {
      id: "4",
      title:
        "Real estate investments funds in the dubai, los Angeles, new York and sub-saharan Africa.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 90,
      duration: 6,
      total: 2000,
    },
  ];
  return (
    <SafeAreaView style={styles.containerMain}>
      <FlatList
        data={investments}
        renderItem={({ item }) => <CompareInvestmentsComponent item={item} />}
      />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxSimple}>
            <Text>Box</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Text>Box</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Text>Box</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Text>Box</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              marginLeft: 20,
            }}
          >
            <Text
              style={{ padding: 5, color: "#0b4291", fontSize: fonts.large }}
            >
              Compare
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#e6f7ff",
    padding: 10,
    // justifyContent: "space-between",
  },
  boxContainer: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: "#c5eaff",
    paddingRight: 10,

    // width: Layout.window.width * 0.7,
  },
  boxSimple: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    padding: 13,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },
});
