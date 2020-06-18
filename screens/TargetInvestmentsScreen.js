import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// import components
import { PageTitle } from "../components/PageTitle";
import { HorizontalSlider } from "../components/HorizontalSlider";
import fonts from "../constants/fonts";

export default function TargetInvestmentsScreen() {
  return (
    <View>
      <PageTitle title="Target Investments" />
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <Text style={styles.textHeading}>Enter investment amount</Text>
          <TextInput style={styles.inputStyle} keyboardType="numeric" />
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.textHeading}>Investment Time</Text>
          <View>
            <HorizontalSlider />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    // justifyContent: "center",
  },
  containerContent: {
    marginTop: 10,
  },
  textHeading: {
    color: "#a28f8f",
    fontSize: fonts.large,
  },
  inputStyle: {
    backgroundColor: "#e6f7ff",
    height: 45,
    marginTop: 15,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#c5eaff",
  },
});
