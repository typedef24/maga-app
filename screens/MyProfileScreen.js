import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, Picker } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton, ActivityIndicator } from "react-native-paper";

import img from "../assets/images/profile.jpg";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import InputField from "../components/InputField";
import Accordion from "../components/Accordion";
import Layout from "../constants/Layout";
import CheckBox from "react-native-check-box";

// import api url
import Strapi from "../api/Strapi";
import AsyncStorage from "@react-native-community/async-storage";

export default class MyprofileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      mobileNumber: "",
      data: [],
      isLoggedIn: false,
    };
  }

  async updateProfile() {
    //   Update profileInfo
    try {
      // Check for userId in async Storage data
      const jsonValue = await AsyncStorage.getItem("loggedInUser");

      //   Create a variable and asign jsonValue to json
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(data.user.id);
      console.log(data.jwt);
      const id = data.user.id;
      //   Loading indicator
      this.setState({ loading: true });
      //  Update userProfile - PUT request
      const response = await Strapi.put("/users/1", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk0MTIxNTI5LCJleHAiOjE1OTY3MTM1Mjl9.6mm9Ek_DNAb6fSWb2C6b8BMCaxM19NlxZLSoG_Nzd_o",
        },
        body: {
          name: this.state.name,
          username: this.state.username,
          mobile_number: this.state.mobileNumber,
        },
      });
      if (response) {
        this.setState({ loading: false });
        return alert("Submitted");
      } else {
        console.log(error);
        return alert("Error");
      }
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          {/*Top Large Image */}
          <Image
            //source={{ uri: this.proileImage }}
            source={img}
            style={styles.ProfileIcon}
          />
          <Button
            body={
              <Text style={[globalStyles.btnLabel, { padding: 10 }]}>
                Upload Image
              </Text>
            }
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginTop: 8,
            }}
            touchableProps={{
              onPress: () => {
                alert("Button click");
              },
            }}
          />
        </View>
        {/*Divider between Top Image and edit Profile Options*/}
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15,
          }}
        />
        <ScrollView
          style={{ alignSelf: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            placeholder="Name"
            style={styles.inputStyle}
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            placeholder="Username"
            style={styles.inputStyle}
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            placeholder="Mobile Number"
            style={styles.inputStyle}
            value={this.state.mobileNumber}
            keyboardType="numeric"
            onChangeText={(number) => this.setState({ mobileNumber: number })}
          />

          {/* <View style={[styles.flexStyles, { marginTop: 15 }]}>
            <Text style={{ marginRight: 180 }}>Gender</Text>
            <View style={[styles.flexStyles, { marginRight: 10 }]}>
              <Text>M</Text>
              <RadioButton />
            </View>
            <View style={styles.flexStyles}>
              <Text>F</Text>
              <RadioButton />
            </View>
          </View> */}
          {/* <TextInput
            placeholder="Username"
            style={styles.inputStyle}
            //   onChangeText={(text) => this.setState({ text })}
          /> */}
          {/* <View
            style={{
              marginTop: 10,
            }}
          >
            <Text style={{ marginRight: 10 }}>Gender</Text>
            <View>
              <Text>Male</Text>
              <RadioButton value="first" />
            </View>
          </View> */}
          {this.state.loading ? (
            <View>
              <ActivityIndicator size="large" color="green" />
            </View>
          ) : null}
          <Button
            body={
              <Text style={[globalStyles.btnLabel, { padding: 10 }]}>
                Submit
              </Text>
            }
            touchableStyleProps={{
              backgroundColor: "#52c41a",
              marginTop: 50,
            }}
            touchableProps={{
              onPress: () => {
                this.updateProfile();
              },
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  ProfileIcon: {
    alignSelf: "center",
    // resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  inputStyle: {
    width: Layout.window.width * 0.8,
    height: 50,
    backgroundColor: "#f2f2f2",
    marginTop: 20,
    // marginLeft: 30,
    padding: 10,
    justifyContent: "center",
  },
  flexStyles: {
    flexDirection: "row",
  },
});
