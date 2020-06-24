import * as React from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import CompareInvestmentsComponent from "../components/CompareInvestment";

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={investments}
        renderItem={({ item }) => {
          return (
            <View>
              <CompareInvestmentsComponent item={item} />
            </View>
          );
        }}
      />
      <Text>Hello</Text>
      <View style={styles.containerMain}>
        <View>
          <Text>Hello</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Compare</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerMain: {},
});
