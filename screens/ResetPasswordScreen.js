import * as React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";

export default class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handlePassReset() {
    // alert("Summitted data: " + JSON.stringify(this.state));
    // handle password reset request with axios
    axios
      .post("http://68.183.20.98/auth/forgot-password", {
        email: this.state.email,
      })
      .then((response) => {
        this.props.navigation.navigate("resetPasswordConfirmationScreen");
        console.log("Email send");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {Platform.OS === "android" && (
            <StatusBar backgroundColor="#003A8C" barStyle="light-content" />
          )}
          <LinearGradient
            colors={["#003a8c", "#137fe9"]}
            style={styles.gradient}
          >
            <View>
              <Text style={globalStyles.label}>Email</Text>
              <InputField
                textContentType="emailAddress"
                value={this.state.email}
                placeholder="Your email address"
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
            <View style={{ marginTop: 50 }}>
              <Button
                body={<Text style={globalStyles.btnLabel}>Proceed</Text>}
                touchableStyleProps={{ backgroundColor: "#52c41a" }}
                touchableProps={{
                  //onPress: () => { this.handlePassReset() },
                  onPress: () => {
                    // this.props.navigation.navigate("resetPasswordConfirmationScreen");
                    this.handlePassReset();
                  },
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
});
