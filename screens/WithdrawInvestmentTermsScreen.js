import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";

import Button from "../components/Button";
import Fonts from "../constants/fonts";
import globalStyles from "../constants/globalStyles";
import ToastMessage from "../components/ToastMessage";
import CheckBox from "react-native-check-box";

export default class WithdrawInvestmentTermsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termsChecked: false,
      paymentMethod: "",
    };
  }

  // Handle Submit Button
  handleSubmit() {
    if (!this.state.termsChecked) {
      Alert.alert("NOTICE!", "Read and Agree to terms and condition");
    } else {
      this.props.navigation.navigate("withdraw-confirmation");
      return null;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <ToastMessage />
          <View style={[styles.terms, styles.shadowStyle]}>
            <Text style={styles.textStyle}>
              By withdrawing from any investments, you hereby accept that you
              won’t be entitled to any profits of any form from this investment
              as from this date henceforth.{"\n"}
              {"\n"}
              We return the rights to keep your financial data throughout your
              investment period to help make better investment decisions in the
              future. We won’t use use the data for any other purpose than the
              above stated. The transfer of your personal data into any 3rd
              party service is against
            </Text>
          </View>
          <View style={styles.checkBox}>
            <CheckBox
              style={{ flex: 1, padding: 10, marginTop: 5 }}
              onClick={() => {
                this.setState({
                  termsChecked: !this.state.termsChecked,
                });
              }}
              isChecked={this.state.termsChecked}
              rightText={"I've read and agreed to the terms and conditions."}
            />
          </View>
        </View>
        <Button
          touchableProps={{
            onPress: () => this.handleSubmit(),
          }}
          body={
            <Text
              style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}
            >
              Withdraw investment
            </Text>
          }
          touchableStyleProps={{
            backgroundColor: "#52c41a",
            marginRight: 5,
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </SafeAreaView>
    );
  }
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.7,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  shadowStyle: elevationShadowStyle(5),
  terms: {
    backgroundColor: "#f4fbff",
    padding: 15,
  },
  textStyle: {
    fontSize: Fonts.medium,
  },
  checkBox: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
});
