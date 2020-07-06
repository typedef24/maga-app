import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";

export default function MyInvestment(props) {
  return (
    <View>
      {/* FIrst section */}
      <View
        style={[
          styles.shadowStyle,
          props.item.grow_rate <= 20
            ? styles.dangerContainer
            : styles.container,
        ]}
      >
        <TouchableOpacity {...props.touchableProps}>
          <View style={styles.body}>
            <Text style={{ width: "90%" }}>{props.item.opportunity.title}</Text>
            <Image
              source={props.item.opportunity.img}
              style={styles.Image}
            ></Image>
          </View>
        </TouchableOpacity>
        <View
          style={[
            props.item.grow_rate <= 20
              ? styles.dangerStatistics
              : styles.statistics,
          ]}
        >
          <View style={styles.iconText}>
            <Icon
              name="line-chart"
              size={20}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {props.item.grow_rate}
              {"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="calendar"
              size={20}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              {" "}
              6 {"Days ago"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="money"
              size={20}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {"$"}
              {props.item.current_earnings}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
  containerMain: {
    backgroundColor: "red",
  },
  container: {
    borderTopWidth: 3,
    borderTopColor: "#003A8C",
    margin: 5,
  },
  dangerContainer: {
    borderTopWidth: 3,
    borderTopColor: "red",
    margin: 5,
  },
  shadowStyle: elevationShadowStyle(5),
  body: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: "#F4FBFF",
  },
  headingMain: {
    fontSize: 19,
    color: "#2F3D52",
    fontWeight: "bold",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#003A8C",
    padding: 16,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    alignItems: "center",
    marginTop: 5,
  },

  // style for bearish statistics
  dangerContainer: {
    borderTopWidth: 3,
    borderTopColor: "#A8071A",
    // paddingBottom: 10,
    margin: 5,
  },
  dangerStatistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#A8071A",
    padding: 16,
  },
});
