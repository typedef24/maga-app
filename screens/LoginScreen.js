import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../components/InputField";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin() {
    //alert("Summitted data: " + JSON.stringify(this.state));
    this.props.navigation.navigate("Root");
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
                <Text style={[ globalStyles.btnLabel2, {fontWeight: "100"} ]}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    this.props.navigation.navigate("signup")
                  }
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
});
