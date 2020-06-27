import * as React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

import image from "../assets/images/withdrawConfirm.png";
import Font from "../constants/fonts";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";

export default function WithdrawConfirmationScreen({ navigation }) {
  navigation.setOptions();
  return (
    <SafeAreaView style={styles.Maincontainer}>
      <View style={[styles.container, { marginTop: 50 }]}>
        <Text style={styles.textHeading}>
          You have successfully withdrawn your investment.
        </Text>
        <Image source={image} style={{ marginTop: 65 }} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          body={<Text style={globalStyles.btnLabel}>Compare Table</Text>}
          touchableStyleProps={{ backgroundColor: "#91d5ff" }}
          touchableProps={{
            onPress: () => {
              navigation.navigate("compare-table");
            },
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          body={<Text style={globalStyles.btnLabel}>Compare Investment</Text>}
          touchableStyleProps={{ backgroundColor: "#52c41a" }}
          touchableProps={{
            onPress: () => {
              navigation.navigate("compare-investments");
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  btnContainer: {
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  textHeading: {
    fontSize: Font.large,
    textAlign: "center",
    fontWeight: "bold",
  },
});
