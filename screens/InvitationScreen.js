import React from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import Clipboard from "@react-native-community/clipboard";

import Layout from "../constants/Layout";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";

export default class InvitationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      clipboardContent: null,
    };
  }

  readFromClipboard = async () => {
    // alert("Copied text");
    const clipboardContent = await Clipboard.getString();
    this.setState({ clipboardContent });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerBody}>
          <View style={styles.textInputContainer}>
            <Text style={styles.bodyText}>
              Copy and share the link to below for others to come benefit from
              this investment opportunity. You get a $10 instant deposit on this
              investment for every referral who invests
            </Text>
            <TextInput
              placeholder="paste here..."
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>
          <Button
            touchableProps={{
              onPress: () => {
                this.props.navigation.navigate("withdraw-investment");
              },
            }}
            body={
              <Text
                style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}
              >
                withdraw investment
              </Text>
            }
            touchableStyleProps={{
              backgroundColor: "#c5eaff",
              marginRight: 5,
              marginLeft: 5,
              marginTop: 20,
            }}
          />
          <Button
            touchableProps={{
              // onPress: () => this.readFromClipboard(),
              onPress: () => alert("Text copied"),
            }}
            body={
              <Text
                style={[globalStyles.btnLabel, { textTransform: "uppercase" }]}
              >
                Copy Link
              </Text>
            }
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginRight: 5,
              marginLeft: 5,
              marginTop: 20,
            }}
          />
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
  containerBody: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  textInputContainer: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
  },
  bodyText: {
    fontSize: 17,
    textAlign: "center",
  },
  inputStyle: {
    height: 60,
    backgroundColor: "#f2f2f2",
    marginTop: 90,
    padding: 10,
  },
});
