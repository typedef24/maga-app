import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import fonts from "../constants/fonts";
import TransactionsHistoryScreen from "./TransactionsHistoryScreen";
import TransactionsPendingScreen from "./TransactionsPendingScreen";

const Tab = createMaterialTopTabNavigator();

export default function TransactionsScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: fonts.medium,
          fontWeight: "bold",
          textAlign: "center",
          marginLeft: 10,
        },
        style: {
          backgroundColor: "#f4fbff",
        },
      }}
    >
      <Tab.Screen name="History" component={TransactionsHistoryScreen} />
      <Tab.Screen name="Pending" component={TransactionsPendingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
