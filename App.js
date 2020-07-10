import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

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
import FilterResultsScreen from "./screens/FilterResultsScreen";
import NoResultScreen from "./screens/NoResultScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PaymentScreen2 from "./screens/PaymentScreen2";
import PaymentScreen3 from "./screens/PaymentScreen3";
import CheckoutScreen from "./screens/CheckoutScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import DetailsInvestmentScreen from "./screens/DetailsInvestmentScreen";
import InvitationScreen from "./screens/InvitationScreen";
import WithdrawInvestmentTermsScreen from "./screens/WithdrawInvestmentTermsScreen";
import WithdrawConfirmationScreen from "./screens/WithdrawconfirmationScreen";
import CompareInvestmentsScreen from "./screens/CompareInvestmentsScreen";
import InvestmentPerformanceScreen from "./screens/InvestmentPerformance";
import RiskProfilesScreen from "./screens/RiskProfilesScreen";
import CompareTableScreen from "./screens/CompareTableScreen";
import AsyncStorage from "@react-native-community/async-storage";
import DrawerNavigation from "./navigation/DrawerNavigation";
import ResultScreen from "./screens/ResultsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyprofileScreen from "./screens/MyProfileScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App({ props }) {
  const isLoadingComplete = useCachedResources(1);

  const [isInstalling, setIsInstalling] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  //setIsInstalling(1);
  //alert(isInstalling);

  React.useEffect(() => {
    async function checkFirstInstall() {
      //alert("Hello");
      try {
        const jsonValue = await AsyncStorage.getItem("appInstalled");
        jsonValue != null ? JSON.parse(jsonValue) : null;
        if (jsonValue) {
          //not first time access
          //return false;
          setIsInstalling(false);
        } else {
          //store in AsyncStorage against next time lunch
          try {
            const jsonValue = JSON.stringify(true);
            await AsyncStorage.setItem("appInstalled", jsonValue);
            //return true;
            setIsInstalling(true);
          } catch (e) {
            // saving error
            console.warn(
              "Error saving to AsyncStorage! Hope your device supports AsyncStorage?"
            );
          }
        }
      } catch (e) {
        // error reading value
        console.warn(
          "Error reading from AsyncStorage! Hope your device supports AsyncStorage?"
        );
      }
    }
    // Check Logged In
    // async function checkLoggedIn() {
    //   //alert("Hello");
    //   try {
    //     const jsonValue = await AsyncStorage.getItem("loggedInUser");
    //     jsonValue != null ? JSON.parse(jsonValue) : null;
    //     if (jsonValue) {
    //       //not first time access
    //       // return true;
    //       setIsLoggedIn(true);
    //     } else {
    //       //store in AsyncStorage against next time lunch
    //       // return false;
    //       setIsLoggedIn(false);
    //     }
    //   } catch (e) {
    //     // error reading value
    //     console.warn(
    //       "Error reading from AsyncStorage! Hope your device supports AsyncStorage?"
    //     );
    //   }
    // }

    // checkLoggedIn();
    checkFirstInstall();
  }, []);

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator
            screenOptions={{
              gestureDirection: "horizontal",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              // ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            {/* OnBoarding Navigation Screen */}
            {isInstalling ? (
              <Stack.Screen
                name="onboard1"
                component={OnboardOneScreen}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  transitionSpec: {
                    open: config,
                    close: config,
                  },
                }}
              />
            ) : (
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
            )}

            {isInstalling && (
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
            )}

            <Stack.Screen
              name="onboard2"
              component={OnboardTwoScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <Stack.Screen
              name="onboard3"
              component={OnboardThreeScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,

                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <Stack.Screen
              name="onboard4"
              component={OnboardFourScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />

            {/* Nest Drawer Navigation */}
            {/* <Stack.Screen name="feed" component={DrawerNavigation} /> */}

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
              options={{
                title: "Target Investments",
              }}
            />
            <Stack.Screen
              name="investmentPerformanceScreen"
              component={InvestmentPerformanceScreen}
              options={{
                title: "Investment performance",
              }}
            />
            <Stack.Screen
              name="paymentScreen"
              component={PaymentScreen}
              options={{
                title: "Payment",
              }}
            />
            <Stack.Screen
              name="paymentScreen2"
              component={PaymentScreen2}
              options={{
                title: "Payment",
              }}
            />
            <Stack.Screen
              name="paymentScreen3"
              component={PaymentScreen3}
              options={{
                title: "Payment",
              }}
            />
            <Stack.Screen
              name="checkoutScreen"
              component={CheckoutScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="transactionsScreen"
              component={TransactionsScreen}
              options={{
                title: "Transactions",
              }}
            />
            <Stack.Screen
              name="result-filter"
              component={FilterResultsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="no-result"
              component={NoResultScreen}
              options={{
                headerTitle: false,
              }}
            />
            <Stack.Screen
              name="details-screen"
              component={DetailsInvestmentScreen}
              options={{
                title: "Details Investments",
              }}
            />

            <Stack.Screen
              name="result-screen"
              component={ResultScreen}
              options={{
                title: "Results",
              }}
            />

            {/* Invitation page */}
            <Stack.Screen
              name="invite-others"
              component={InvitationScreen}
              options={{
                title: "Invite Others",
              }}
            />

            <Stack.Screen
              name="withdraw-investment"
              component={WithdrawInvestmentTermsScreen}
              options={{
                title: "Withdraw Investment",
              }}
            />
            <Stack.Screen
              name="withdraw-confirmation"
              component={WithdrawConfirmationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="compare-investments"
              component={CompareInvestmentsScreen}
              options={{
                title: "Compare Investments",
              }}
            />
            <Stack.Screen
              name="compare-table"
              component={CompareTableScreen}
              options={{
                title: "Compare Investments",
              }}
            />

            {/* Risk profile */}
            <Stack.Screen
              name="risk-profiles"
              component={RiskProfilesScreen}
              options={{
                title: "Risk Profile",
              }}
            />
            <Stack.Screen
              name="profileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="myProfileScreen"
              component={MyprofileScreen}
              options={{
                title: "Edit profile",
                // headerShown: false,
              }}
            />

            {/* <Stack.Screen name="home" component={DrawerNavigation} /> */}
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
