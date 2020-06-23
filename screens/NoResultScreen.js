import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

import font from "../constants/fonts";
import globalStyles from "../constants/globalStyles";
import image from "../assets/images/no-result.png";
import Button from "../components/Button";
import fonts from "../constants/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

const NoResultScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={[styles.container, { marginTop: 20 }]}>
        <Text style={styles.textHeading}>
          Sorry, No current investment options meet your criteria
        </Text>
        <Image source={image} style={{ marginTop: 15 }} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          body={<Text style={globalStyles.btnLabel}>Return to search</Text>}
          touchableStyleProps={{ backgroundColor: "#52c41a" }}
          touchableProps={{
            onPress: () => {
              navigation.navigate("result-filter");
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
  },
  btnContainer: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  textHeading: {
    fontSize: font.large,
    textAlign: "center",
  },
});

export default NoResultScreen;
