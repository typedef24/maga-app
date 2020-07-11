import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, Picker } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import DatePicker from "react-native-datepicker";

import img from "../assets/images/profile.jpg";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Accordion from "../components/Accordion";
import Layout from "../constants/Layout";

import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
// import api url
import AppConstants from "../constants/AppConstants";

export default class MyprofileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      mobileNumber: "",
      dateOfBirth: "",
      risk_profile: "",
      gender: "",
      data: [],
      isLoggedIn: false,
      image: null,
    };
  }

  componentDidUpdate() {
    this.getPermissionAync();
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
      const response = await axios({
        method: "PUT",
        url: AppConstants.strapiBaseURL + "/users/" + id,
        headers: {
          Authorization: "Bearer " + data.jwt,
        },
        // pass data from state to strapi api
        data: {
          name: this.state.name,
          username: this.state.username,
          mobile_number: this.state.mobileNumber,
          risk_profile: this.state.risk_profile,
          gender: this.state.gender,
          profile_picture: this.state.image,
        },
      });
      if (response) {
        this.setState({ loading: false });
        return alert("Profile updated");
      } else {
        this.setState({ loading: true });
        console.log(error);
        return alert("Error");
      }
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  }

  // Grant permission to access the camera
  getPermissionAync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("Sorry, we need roll permissions to upload image");
      }
    }
  };

  // Pick image from Camera
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    let { image } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            {/*Top Large Image */}
            {image ? (
              <Image
                source={{ uri: image }}
                style={[styles.ProfileIcon, { width: 200, height: 200 }]}
              />
            ) : (
              <Image source={img} style={styles.ProfileIcon} />
            )}

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
                onPress: () => this._pickImage(),
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
            <View style={styles.containerSlider}>
              <Text
                style={[styles.textHeading, { marginTop: 20, marginBottom: 5 }]}
              >
                Gender
              </Text>
              <View style={styles.sliderStyle}>
                <Accordion
                  // Inherit prop from child
                  mode="dropdown"
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue) => {
                    this.setState({ gender: itemValue });
                  }}
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Accordion>
              </View>
            </View>
            <View style={styles.containerSlider}>
              <Text
                style={[styles.textHeading, { marginTop: 20, marginBottom: 5 }]}
              >
                Risk Level
              </Text>
              <View style={styles.sliderStyle}>
                <Accordion
                  // Inherit prop from child
                  mode="dropdown"
                  selectedValue={this.state.risk_profile}
                  onValueChange={(itemValue) => {
                    this.setState({ risk_profile: itemValue });
                  }}
                >
                  <Picker.Item label="Low" value="low" />
                  <Picker.Item label="Medium" value="medium" />
                  <Picker.Item label="High" value="high" />
                </Accordion>
              </View>
            </View>
            {/* <View style={{ marginTop: 20 }}>
              <DatePicker
                style={{ width: "100%" }}
                date={this.state.dateOfBirth}
                mode="date"
                placeholder="select date of birth"
                format="YYYY-MM-DD"
                minDate="1800-05-01"
                maxDate="2040-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    width: 0,
                    height: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  this.setState({ dateOfBirth: date });
                }}
              />
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
                marginBottom: 30,
              }}
              touchableProps={{
                onPress: () => {
                  this.updateProfile();
                },
              }}
            />
          </ScrollView>
        </View>
      </ScrollView>
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
  containerSlider: {
    // margin: 5,
    width: 80,
  },
  inputStyle: {
    width: Layout.window.width * 0.9,
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
