import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function MyInvestmentPreview() {
  return (
    <View style={styles.statistics}>
      <View style={styles.dynamicText}>
        <Text style={styles.smallHeading}>Total investment: {"\n"}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#003A8C",
              fontSize: 7,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            USD{" "}
          </Text>
          <Text style={{ color: "#003A8C", fontSize: 16, fontWeight: "bold" }}>
            743675654
          </Text>
        </View>
      </View>
      <View style={styles.dynamicText}>
        <Text style={styles.smallHeading}>Growth {"\n"}</Text>
        <View style={styles.growth}>
          <Icon
            name="show-chart"
            size={20}
            color="green"
            style={{ marginTop: 5 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#003A8C" }}>
            {" "}
            10.6{"%"}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.dynamicText}>
        <Text style={styles.smallHeading}>your gain/loss {"\n"}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#003A8C",
              fontSize: 7,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            USD{" "}
          </Text>
          <Text style={{ color: "#003A8C", fontSize: 16, fontWeight: "bold" }}>
            743675654
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statistics: {
    flexDirection: "row",
    margin: 30,
    backgroundColor: "#fff",
  },
  dynamicText: {
    borderRightWidth: 1,
    borderRightColor: "#bae7ff",
    padding: 10,
  },
  smallHeading: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    color: "#968E8E",
  },
  growth: {
    flexDirection: "row",
  },
});
