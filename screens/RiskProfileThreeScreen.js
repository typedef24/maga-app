import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { RiskProfileItem } from "../components/RiskProfileItem";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";

import globalStyles from "../constants/globalStyles";

export default function RiskProfileThreeScreen() {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "High Risk Tolerance",
      description:
        "Don’t mind investing in high fluctuating businesses and ventures with random behaviors at some time.",
      img: require("../assets/images/pro1.png"),
    },
    {
      id: "2",
      title: "Long term investments",
      description:
        "To achieve long terms goals like retirements funds ore children education investments.",
      img: require("../assets/images/pro2.png"),
    },
    {
      id: "3",
      title: "High Returns",
      description:
        "Interested in investments with the highest possible returns no matter the risks associated.",
      img: require("../assets/images/pro3.png"),
    },
    {
      id: "4",
      title: "75% asset allocation",
      description:
        "You’re willing to allocate 75% or more of your assets into your savings.",
      img: require("../assets/images/pro4.png"),
    },
    {
      id: "5",
      title: "Excellent knowledge in investing",
      description:
        "Know about investing, has some past experience in investing  and want to make more profits investing.",
      img: require("../assets/images/pro5.png"),
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <RiskProfileItem item={item} />}
      />
      <View style={styles.btnContainer}>
        <Button
          body={
            <Text style={globalStyles.btnLabel}>Yes, I'm a Pro Investor</Text>
          }
          touchableStyleProps={{ backgroundColor: "#52c41a" }}
          touchableProps={{
            onPress: () => {
              alert("Button clicked!");
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  btnContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
});
