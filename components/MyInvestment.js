import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
// Import image
import Image1 from "../assets/images/investment.png";

export default function MyInvestment() {
  return (
    <View>
      {/* Bullish statistics */}
      {/* FIrst section */}
      <View style={[styles.container, styles.shadowStyle]}>
        <TouchableOpacity>
          <View style={styles.body}>
            <Text style={{ width: "90%" }}>
              Real estate investments funds in the dubai, los Angeles, new York
              and sub-saharan Africa.
            </Text>
            <Image source={Image1} style={styles.Image}></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.statistics}>
          <View style={styles.iconText}>
            <Icon
              name="line-chart"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              20.5{"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="calendar"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              6 {"Days ago"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="money"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {"$"}4,300
            </Text>
          </View>
        </View>
      </View>

      {/* Second Scetion */}
      <View style={[styles.container, styles.shadowStyle]}>
        <TouchableOpacity>
          <View style={styles.body}>
            <View style={{ width: "90%" }}>
              <Text style={styles.headingMain}>AWAA AND SONS LTD</Text>
              <Text style={styles.textMain}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
            </View>
            <Image source={Image1} style={styles.Image}></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.statistics}>
          <View style={styles.iconText}>
            <Icon
              name="line-chart"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              0.8{"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="calendar"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              6 {"Days ago"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="money"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {"$"}2,300
            </Text>
          </View>
        </View>
      </View>

      {/* Bearish Statistics */}
      <View style={[styles.dangerContainer, styles.shadowStyle]}>
        <TouchableOpacity>
          <View style={styles.body}>
            <View style={{ width: "90%" }}>
              <Text style={styles.headingMain}>BIGSITTER AND BRO LLC</Text>
              <Text style={styles.textMain}>
                Real estate investments funds in the dubai, los Angeles, new
                York and sub-saharan Africa.
              </Text>
            </View>
            <Image source={Image1} style={styles.Image}></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.dangerStatistics}>
          <View style={styles.iconText}>
            <Icon
              name="line-chart"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              -0.5{"%"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="calendar"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              28 {"Days ago"}
            </Text>
          </View>
          <View style={styles.iconText}>
            <Icon
              name="money"
              size={13}
              color="#fff"
              style={{ paddingTop: 4 }}
            />
            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
              {" "}
              {"$"}1,300
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
  shadowStyle: elevationShadowStyle(5),
  body: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 5,
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
  },
  Image: {
    alignItems: "center",
    marginTop: 10,
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
