import React, { Component } from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import MenuDrawer from "../components/MenuDrawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  return (
    <Drawer.Navigator drawerContent={(props) => <MenuDrawer {...props} />}>
      <Drawer.Screen name="home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
