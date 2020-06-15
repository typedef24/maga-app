import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Iconfont from "@expo/vector-icons/FontAwesome5";

import Image1 from "../../assets/images/dish.png";

const Progress = () => {
  //   const opportunities = useState();
  return (
    <View style={styles.container}>
      <Text
        style={{ textAlign: "center", padding: 20, backgroundColor: "#F4FBFF" }}
      >
        Invesments Opportunities
      </Text>
      <View style={styles.progress}>
        <TouchableOpacity>
          <View style={styles.statusBar}>
            <View style={styles.status}>
              <Text style={styles.statusText}>Ongoing</Text>
              <Icon name="bookmark" size={20} />
            </View>
            <View style={styles.body}>
              <Text style={{ width: "90%" }}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
              <Image source={Image1} style={styles.Image}></Image>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.statistics}>
          <View style={styles.iconText}>
            <Icon
              name="alert-decagram"
              size={15}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              20.5{"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="square-inc-cash"
              size={15}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              6 {"Months"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Iconfont
              name="piggy-bank"
              size={15}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              {"$"}4,300
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 3,
    borderTopColor: "#003A8C",
    paddingBottom: 10,
  },
  progress: {
    borderTopWidth: 2,
    borderTopColor: "#003A8C",
    marginRight: 5,
    marginLeft: 5,
  },
  statusBar: {
    backgroundColor: "#F4FBFF",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statusText: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 5,
  },
  body: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 5,
    // backgroundColor: "#F4FBFF",
  },
  headingMain: {
    fontSize: 19,
    color: "#2F3D52",
    fontWeight: "bold",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F4FBFF",
    padding: 16,
  },
  iconText: {
    flexDirection: "row",
    color: "blue",
  },
  Image: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default Progress;
