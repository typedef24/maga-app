import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Clipboard,
} from "react-native";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Toast from "react-native-simple-toast";
import fonts from "../constants/fonts";

export default class InvitationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      clipboardContent: null,
    };
  }

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
              editable={false}
              // value={this.state.text}
              value={"invest@kemet.app"}
            />
          </View>
          <Button
            touchableProps={{
              onPress: () => {
                Clipboard.setString(this.state.text);
                Toast.showWithGravity(
                  "Coppied to your clipboard",
                  Toast.LONG,
                  Toast.BOTTOM
                );
              },
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
