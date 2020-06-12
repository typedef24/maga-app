import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import OnboardOneScreen from "../screens/OnboardOneScreen";
import OppotunitiesScreen from "../screens/OppotunitiesScreen";
import { Button } from "react-native";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-bulb" />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={OnboardOneScreen}
        options={{
          title: "Onboard One",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search"></TabBarIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="oppotunities"
        component={OppotunitiesScreen}
        options={{
          title: "Oppotunities Screen",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-settings"></TabBarIcon>
          ),
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
