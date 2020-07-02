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

// import API connection
import Strapi from "../api/Strapi";

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errorStr: "",
      submitErr: "",
      loading: "",
    };
  }

  async handleSignup() {
    try {
      this.setState({ loading: true });
      // Check if password matches
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({ errorStr: "Passwords didn't match" });
        this.setState({ loading: false });
      } else {
        const response = await Strapi.post("/auth/local/register", {
          username: "",
          email: this.state.email,
          password: this.state.password,
        });
        response
          ? this.props.navigation.navigate("login") ||
            this.setState({ loading: false })
          : null;
      }
    } catch (error) {
      this.setState({ loading: false });
      this.setState({ submitErr: "Fields can't be empty" });
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
            {/* Display error for incorrect password match */}
            {this.state.errorStr ? (
              <View style={styles.errorBox}>
                <FontAwesome
                  name="exclamation-triangle"
                  size={20}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Text style={globalStyles.label}>{this.state.errorStr}</Text>
              </View>
            ) : (
              <Text style={{ display: "none" }}></Text>
            )}

            {/* Display error for empty field submit */}
            {this.state.submitErr ? (
              <View style={[styles.errorBox, { backgroundColor: "red" }]}>
                <FontAwesome
                  name="exclamation-triangle"
                  size={20}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Text style={globalStyles.label}>{this.state.submitErr}</Text>
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
              <Text style={globalStyles.label}>Repeat Password</Text>
              <InputField
                inputStyle={
                  this.state.errorStr
                    ? { borderColor: "red", color: "red", borderWidth: 1 }
                    : {}
                }
                secureTextEntry={true}
                textContentType="password"
                value={this.state.confirmPassword}
                placeholder="Repeat password"
                onChangeText={(text) =>
                  this.setState({ confirmPassword: text })
                }
              />
            </View>
            <View style={{ marginTop: 30, marginBottom: 10 }}>
              <Button
                body={<Text style={globalStyles.btnLabel}>Signup</Text>}
                touchableStyleProps={{ backgroundColor: "#52c41a" }}
                touchableProps={{
                  onPress: () => {
                    this.handleSignup();
                  },
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text style={[globalStyles.btnLabel2, { fontWeight: "100" }]}>
                  Have an account?
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => this.props.navigation.navigate("login")}
                >
                  <Text style={globalStyles.btnLabel2}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.loading ? (
              <View>
                <ActivityIndicator size="large" color="white" />
              </View>
            ) : null}
            <View>
              <Text style={globalStyles.btnLabel2}>Signup with</Text>
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
    backgroundColor: "#4a7fba",
    marginBottom: 20,
    padding: 10,
    paddingBottom: 0,
  },
});
