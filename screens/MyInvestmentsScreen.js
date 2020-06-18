import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// Import components
import MyInvestment from "../components/MyInvestment";
import { ScrollView } from "react-native-gesture-handler";
import { PageTitle } from "../components/PageTitle";

export default function MyInvestmentsScreen() {
  return (
    <View>
      <PageTitle title="Investment Opportunities" />
      <ScrollView style={styles.container}>
        <MyInvestment />
      </ScrollView>
    </View>
  );
}

// Implementing BorderShadow
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.4,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  shadowStyle: elevationShadowStyle(5),
  container: {
    margin: 5,
  },
});
