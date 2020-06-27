import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CompareTable from "../components/CompareTable";

import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";

export default class CompareTableScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CompareTable />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonConatiner}>
            <Text></Text>
          </View>
          <View style={styles.buttonConatiner}>
            <Button
              body={<Text style={globalStyles.btnLabel}>Invest</Text>}
              touchableStyleProps={{ backgroundColor: "#52c41a" }}
              touchableProps={{
                onPress: () => {
                  alert("Button clicked");
                },
              }}
            />
          </View>
          <View style={styles.buttonConatiner}>
            <Button
              body={<Text style={globalStyles.btnLabel}>Invest</Text>}
              touchableStyleProps={{ backgroundColor: "#52c41a" }}
              touchableProps={{
                onPress: () => {
                  alert("Button clicked");
                },
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonConatiner: {
    flex: 1,
    justifyContent: "center",
    marginRight: 5,
    marginBottom: 10,
  },
});
