import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import fonts from "../constants/fonts";

// API connection
import Strapi from "../api/Strapi";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorStr: "",
      loading: "",
    };
  }

  async handleLogin() {
    // Request API for login routes
    try {
      this.setState({ loading: true });
      const response = await Strapi.post("/auth/local", {
        identifier: this.state.email,
        password: this.state.password,
      });
      response
        ? this.props.navigation.navigate("Root") ||
          this.setState({ loading: false })
        : null;
      // if (response) {
      //   this.props.navigation.navigate("Root");
      //   this.setState({ loading: false });
      // } else {
      //   return null;
      // }
    } catch (error) {
      this.setState({ loading: false });
      this.setState({
        errorStr: "Sorry password or email is incorrect\n Forget password?",
      });
      console.log("An error occured", error.response);
    }
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
            {this.state.errorStr ? (
              <View style={styles.errorBox}>
                <FontAwesome
                  name="exclamation-triangle"
                  size={20}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Text style={[globalStyles.label, { fontSize: fonts.medium }]}>
                  {this.state.errorStr}
                </Text>
              </View>
            ) : (
              <Text style={{ display: "none" }}></Text>
            )}
            <View>
              <Text style={globalStyles.label}>Email</Text>
              <InputField
                textContentType="emailAddress"
                value={this.state.email}
                placeholder="Your email address"
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Text style={globalStyles.label}>Password</Text>
              <InputField
                textContentType="password"
                secureTextEntry={true}
                value={this.state.password}
                placeholder="Your password"
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <View style={{ marginTop: 40, marginBottom: 20 }}>
              <Button
                body={<Text style={globalStyles.btnLabel}>Login</Text>}
                touchableStyleProps={{ backgroundColor: "#52c41a" }}
                touchableProps={{
                  onPress: () => {
                    this.handleLogin();
                  },
                }}
              />
              <TouchableOpacity
                style={{ alignItems: "flex-end" }}
                onPress={() =>
                  this.props.navigation.navigate("resetPasswordScreen")
                }
              >
                <Text style={globalStyles.btnLabel2}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            {this.state.loading ? (
              <View>
                <ActivityIndicator size="large" color="white" />
              </View>
            ) : null}

            <View>
              <Text style={globalStyles.btnLabel2}>Login with</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Button
                  body={
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="facebook" size={20} color="white" />
                      <Text style={globalStyles.btnLabel}>Facebook</Text>
                    </View>
                  }
                  touchableStyleProps={{
                    backgroundColor: "#4d7bf3",
                    flex: 1,
                    marginRight: 30,
                  }}
                  touchableProps={{
                    onPress: () => {
                      alert("Button clicked!!");
                    },
                  }}
                />
                <Button
                  body={
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="google" size={20} color="white" />
                      <Text style={globalStyles.btnLabel}>Google</Text>
                    </View>
                  }
                  touchableStyleProps={{ backgroundColor: "#4d7bf3", flex: 1 }}
                  touchableProps={{
                    onPress: () => {
                      alert("Button clicked!!");
                    },
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text style={[globalStyles.btnLabel2, { fontWeight: "100" }]}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => this.props.navigation.navigate("signup")}
                >
                  <Text style={globalStyles.btnLabel2}>Sign up</Text>
                </TouchableOpacity>
              </View>
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
  errorBox: {
    flexDirection: "row",
    backgroundColor: "#ff5252",
    marginBottom: 20,
    padding: 10,
    paddingBottom: 0,
  },
});
