import * as React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// import image
import Image1 from "../assets/images/onboard3.png";

export default function OnboardThreeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.sliderImage} source={Image1} />
      </View>
      <Text style={styles.heading}>Managed by experts</Text>
      <Text style={styles.description}>
        All your investments are managed by trained experts who have real world
        expertise in the particular domain.
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
      <View style={styles.navIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("onboard1")}>
          <View style={styles.listIcon}>
            <Icon name="circle-o" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("onboard2")}>
          <View style={styles.listIcon}>
            <Icon name="circle-o" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listIcon}>
            <Icon name="circle" size={20} />
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
    // margin: 20,
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
