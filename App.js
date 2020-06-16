import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import OnboardOneScreen from "./screens/OnboardOneScreen";
import OnboardTwoScreen from "./screens/OnboardTwoScreen";
import OnboardThreeScreen from "./screens/OnboardThreeScreen";
import OnboardFourScreen from "./screens/OnboardFourScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ResetPasswordConfirmationScreen from "./screens/ResetPasswordConfirmationScreen"
import InvestmentsCardViewScreen from "./screens/InvestmentsCardViewScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen
              name="onboard1"
              component={OnboardOneScreen}
              options={{
                headerShown: false,
                // title: "Skip",
                // headerTitleAlign: "right",
                // headerStyle: {
                //   borderBottomColor: "#fff",
                // },
              }}
            />
            <Stack.Screen
              name="onboard2"
              component={OnboardTwoScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="onboard3"
              component={OnboardThreeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="onboard4"
              component={OnboardFourScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="opportunities" component={BottomTabNavigator} />
            <Stack.Screen
              name="signup"
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="investment-card"
              component={InvestmentsCardViewScreen}
            />
            <Stack.Screen
              name="resetPasswordScreen"
              component={ResetPasswordScreen} options={{
                headerShown: false,
              }} 
            />
            <Stack.Screen
              name="resetPasswordConfirmationScreen"
              component={ ResetPasswordConfirmationScreen } options={{
                headerShown: false,
              }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
