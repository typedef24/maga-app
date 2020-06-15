import * as React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// import image
import Image1 from "../assets/images/onboard4.png";

export default function OnboardFourScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.sliderImage}
          source={Image1}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.heading}>Make Real profits</Text>
        <Text style={styles.description}>
          You invest with the end goal in mind. And when its time, you walk away
          with all the profits you deserve
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Root")}
      >
        <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.navIcon}>
        <TouchableOpacity>
          <View style={styles.listIcon}>
            <Icon
              name="circle-o"
              size={20}
              onPress={() => navigation.navigate("onboard1")}
            />
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
        <TouchableOpacity>
          <View style={styles.listIcon}>
            <Icon name="circle" size={20} />
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
    // justifyContent: "center",
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
    // alignSelf: "center",
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
