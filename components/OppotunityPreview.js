import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Iconfont from "@expo/vector-icons/FontAwesome5";

import ProgressBarComponent from "./ProgressBarComponent";
import Layout from "../constants/Layout";

export function OppotunityPreview({ item }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          item.rate >= 50 ? styles.success : styles.progress,
          styles.shadowStyle,
        ]}
      >
        <View style={styles.statusBar}>
          <View style={styles.status}>
            <Text
              style={[
                item.status === "closed"
                  ? styles.dangerText
                  : styles.statusText,
              ]}
            >
              {item.status}
            </Text>
            <Icon
              name="bookmark"
              size={25}
              style={{ marginTop: -10 }}
              color="#003A8C"
            />
          </View>
          <TouchableOpacity>
            <View style={styles.body}>
              <Text style={{ width: Layout.window.width * 0.8 }}>
                {item.title}
              </Text>
              <Image source={item.img} style={styles.Image}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.statistics}>
          <View style={styles.iconText}>
            <Icon
              name="alert-decagram"
              size={20}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              {item.rate}
              {"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="square-inc-cash"
              size={20}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              6 {"months"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Iconfont
              name="piggy-bank"
              size={20}
              color="#4D7BF3"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{ color: "#003A8C", fontSize: 13, fontWeight: "bold" }}
            >
              {" "}
              {"$"}
              {item.total}
            </Text>
          </View>
        </View>
        <ProgressBarComponent data={item} />
      </View>
    </View>
  );
}

// Implementing BorderShaow
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.4,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 10,
    // marginBottom: 58,
  },
  shadowStyle: elevationShadowStyle(5),
  progress: {
    borderTopWidth: 3,
    borderTopColor: "red",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20,
    shadowColor: "red",
  },
  success: {
    borderTopWidth: 3,
    borderTopColor: "green",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20,
    shadowColor: "red",
  },
  statusBar: {
    backgroundColor: "#F4FBFF",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  statusText: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 5,
    padding: 4,
  },
  dangerText: {
    backgroundColor: "red",
    color: "#fff",
    borderRadius: 5,
    padding: 4,
  },
  body: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 5,
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
    alignItems: "center",
    color: "blue",
  },
  Image: {
    alignItems: "center",
    marginTop: 10,
  },
});
