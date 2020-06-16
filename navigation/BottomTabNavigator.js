import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import OnboardOneScreen from "../screens/OnboardOneScreen";
import OppotunitiesScreen from "../screens/OppotunitiesScreen";
import InvestmentsCardViewScreen from "../screens/InvestmentsCardViewScreen";

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
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="opportunities"
        component={OppotunitiesScreen}
        options={{
          title: "Opportunities",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="lightbulb" />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={OnboardOneScreen}
        options={{
          title: "Onboard One",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="search-dollar"></TabBarIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="investment-card"
        component={InvestmentsCardViewScreen}
        options={{
          title: "Onboard One",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="piggy-bank"></TabBarIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="oppotunities"
        component={OppotunitiesScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user"></TabBarIcon>
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
