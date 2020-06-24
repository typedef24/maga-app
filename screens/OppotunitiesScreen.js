import React, { useState } from "react";
import { Text, StatusBar, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { OppotunityPreview } from "../components/OppotunityPreview";
import { PageTitle } from "../components/PageTitle";

export default function OppotunitiesScreen({ navigation }) {
  const [items, setItems] = useState([
    {
      id: "1",
      title:
        "Real estate investments funds in the dubai, los Angeles, new York and sub-saharan Africa.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 90,
      duration: 6,
      total: 2000,
    },
    {
      id: "2",
      title:
        "Restaurant chain specialized in Mexican, Irish and African dishes.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 50,
      duration: 6,
      total: 3000,
    },
    {
      id: "3",
      title:
        "Online store specialized in casual outfits for both men and women of all sizes.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "closed",
      img: require("../assets/images/dish.png"),
      rate: 10,
      duration: 6,
      total: 500,
    },
    {
      id: "4",
      title:
        "Real estate investments funds in the dubai, los Angeles, new York and sub-saharan Africa.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "ongoing",
      img: require("../assets/images/dish.png"),
      rate: 80,
      duration: 6,
      total: 9000,
    },
  ]);

  return (
    <SafeAreaView>
      <PageTitle title="Investment Opportunities" />
      <FlatList
        data={items}
        style={{ marginBottom: 58 }}
        renderItem={({ item }) => <OppotunityPreview item={item} />}
      />
    </SafeAreaView>
  );
}
