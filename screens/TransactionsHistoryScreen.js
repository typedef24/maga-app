import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { RiskProfileItem } from "../components/RiskProfileItem";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";

import globalStyles from "../constants/globalStyles";

export default function TransactionsHistoryScreen() {
  const [items, setItems] = useState([
    {
      id: "1",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "2",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "3",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "4",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "5",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "6",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "7",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "8",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "9",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
    {
      id: "10",
      date: "18 days ago",
      title: "Real estate investments funds",
      amount: "300,800.88",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={items}
        renderItem={({ item }) => <RiskProfileItem item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatListContainer: {
    padding: 15,
    paddingBottom: 5,
  },
});
