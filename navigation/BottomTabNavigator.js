import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import OppotunitiesScreen from "../screens/OppotunitiesScreen";
import MyInvestmentsScreen from "../screens/MyInvestmentsScreen";

import TargetInvestmentsScreen from "../screens/TargetInvestmentsScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "opportunities";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      {/* Render Opportunity as the main HomeScreen */}
      <BottomTab.Screen
        name="opportunities"
        component={OppotunitiesScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="home"
              bottomNavStyleProps={{ marginBottom: -3 }}
            />
          ),
        }}
      />

      {/* Search Screen */}
      <BottomTab.Screen
        name="target-investments"
        component={TargetInvestmentsScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="search-dollar"
              bottomNavStyleProps={{
                marginBottom: -3,
              }}
            ></TabBarIcon>
          ),
        }}
      />

      <BottomTab.Screen
        name="myinvestsments"
        component={MyInvestmentsScreen}
        options={{
          title: "Investments",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="piggy-bank"
              bottomNavStyleProps={{ marginBottom: -3 }}
            ></TabBarIcon>
          ),
        }}
      />
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="user"
              bottomNavStyleProps={{ marginBottom: -3 }}
            ></TabBarIcon>
          ),
        }}
      />
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
