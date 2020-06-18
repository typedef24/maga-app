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
import ResetPasswordConfirmationScreen from "./screens/ResetPasswordConfirmationScreen";
import InvestmentsCardViewScreen from "./screens/InvestmentsCardViewScreen";
import InvestmentDetailsScreen from "./screens/InvestmentDetailsScreen";
import ContactSupportScreen from "./screens/ContactSupportScreen";
import MyInvestmentsScreen from "./screens/MyInvestmentsScreen";
import TargetInvestmentsScreen from "./screens/TargetInvestmentsScreen";
import MyInvestment from "./components/MyInvestment";

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
            {/* OnBoarding Navigation Screen */}
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

            {/* Bottom Nav */}
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

            {/* Authentication Nav */}
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="resetPasswordScreen"
              component={ResetPasswordScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="resetPasswordConfirmationScreen"
              component={ResetPasswordConfirmationScreen}
              options={{
                headerShown: false,
              }}
            />

            {/* Screens Nav */}
            <Stack.Screen
              name="investment-card"
              component={InvestmentsCardViewScreen}
            />
            <Stack.Screen
              name="investment-detail"
              component={InvestmentDetailsScreen}
              options={{
                title: "Investment Details",
              }}
            />
            <Stack.Screen
              name="contact-support"
              component={ContactSupportScreen}
              options={{
                title: "Send Message",
              }}
            />
            <Stack.Screen
              name="myinvestsments"
              component={MyInvestmentsScreen}
              options={{
                title: "My Investments",
              }}
            />
            <Stack.Screen
              name="target-investments"
              component={TargetInvestmentsScreen}
              option={{
                title: "Target Investments",
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
