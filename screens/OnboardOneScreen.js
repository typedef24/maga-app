import * as React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import image
import Image1 from "../assets/images/onboard1.png";

// const hideNav = navigationOptions({
//   //To hide the ActionBar/NavigationBar
//   header: null,
// });

export default function OnboardOneScreen({ navigation, navigationOptions }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.sliderImage} source={Image1} />
      </View>
      <Text style={styles.heading}>Make secure investments</Text>
      <Text style={styles.description}>
        Invest in many carefully selected businesses which are guaranteed to
        make good profits quicker.
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>GET STARTED</Text>
      </TouchableOpacity>
      <View style={styles.navIcon}>
        <TouchableOpacity>
          <View style={styles.listIcon}>
            <Icon name="circle" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("onboard2")}>
          <View style={styles.listIcon}>
            <Icon name="circle-o" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("onboard3")}>
          <View style={styles.listIcon}>
            <Icon name="circle-o" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("onboard4")}>
          <View style={styles.listIcon}>
            <Icon name="circle-o" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 50,
  },
  headerText: {
    textAlign: "right",
    fontSize: 14,
    padding: 10,
  },
  imgContainer: {
    alignItems: "center",
  },
  sliderImage: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    margin: 5,
  },
  btn: {
    backgroundColor: "#003A8C",
    padding: 9,
    height: 55,
    margin: 20,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
  navIcon: {
    flexDirection: "row",
    alignSelf: "center",
  },
  listIcon: {
    margin: 5,
    padding: 5,
  },
});
