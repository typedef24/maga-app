import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Bar from "../components/Bar.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default class InvestmentPerformanceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "0",
          month: "August",
          amount: 255.6,
          percentage: 0.8,
        },
        {
          id: "1",
          month: "July",
          amount: 200,
          percentage: 0.7,
        },
        {
          id: "2",
          month: "June",
          amount: 600.2,
          percentage: 2.3,
        },
        {
          id: "3",
          month: "May",
          amount: 150,
          percentage: 0.3,
        },
        {
          id: "4",
          month: "April",
          amount: 255.6,
          percentage: 0.8,
        },
        {
          id: "5",
          month: "March",
          amount: 255.6,
          percentage: 0.8,
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            <Bar label="J" height={175} />
            <Bar label="F" height={150} />
            <Bar label="M" height={135} />
            <Bar label="A" height={75} />
            <Bar label="M" height={120} />
            <Bar label="J" height={175} />
            <Bar label="J" height={75} />
            <Bar label="A" height={65} />
            <Bar label="S" height={135} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "#f1fffd",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                borderWidth: 2,
                borderColor: "#d4f5c7",
                marginRight: 2,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#2699fb" }}>
                Total Fund
              </Text>
              <Text style={{ fontWeight: "bold", color: "#25589d" }}>
                $800,000
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#f1fffd",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                borderWidth: 2,
                borderColor: "#d4f5c7",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#2699fb" }}>
                Total Profits
              </Text>
              <Text style={{ fontWeight: "bold", color: "#25589d" }}>
                $255000
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
              color: "#2f3d52",
            }}
          >
            Return History
          </Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Item datum={item} />}
            keyExtractor={(item) => item.id}
            style={{ flex: 1 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function Item({ datum }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#f4fbff",
        marginBottom: 4,
        borderWidth: 1,
        borderColor: "#ccedff",
      }}
    >
      <Text>{datum.month}</Text>
      <Text style={{ fontWeight: "bold", color: "#25589d" }}>
        + ${datum.amount}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name="show-chart"
          size={24}
          color="#52c41a"
          style={{ marginRight: 2 }}
        />
        <Text style={{ fontWeight: "bold", color: "#52c41a" }}>
          {datum.percentage} %
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
});
