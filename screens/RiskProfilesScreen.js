import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import fonts from "../constants/fonts";
import RiskProfileOneScreen from "./RiskProfileOneScreen";
import RiskProfileTwoScreen from "./RiskProfileTwoScreen";
import RiskProfileThreeScreen from "./RiskProfileThreeScreen";

const Tab = createMaterialTopTabNavigator();

export default function RiskProfilesScreen() {
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
      <Tab.Screen name="Starter" component={RiskProfileOneScreen} />
      <Tab.Screen name="Mid" component={RiskProfileTwoScreen} />
      <Tab.Screen name="Pro" component={RiskProfileThreeScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
  },
});
