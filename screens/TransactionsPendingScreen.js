import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { RiskProfileItem } from "../components/RiskProfileItem";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";

import globalStyles from "../constants/globalStyles";

export default function TransactionsPendingScreen() {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Low Risk Tolerance",
      description:
        "looking for a stable investment and is not comfortable with any complex fluctuation in business",
      img: require("../assets/images/risk1.png"),
    },
    {
      id: "2",
      title: "Short Term investment",
      description:
        "looking for liquidity in less than three years, to better take control over uncertainties in investments.",
      img: require("../assets/images/risk2.png"),
    },
    {
      id: "3",
      title: "Stable Returns",
      description:
        "Looking for guaranteed returns, tax efficiency and better option than bank deposits.",
      img: require("../assets/images/risk3.png"),
    },
    {
      id: "4",
      title: "Less than 35% asset allocation",
      description:
        "you’re  willing to allocate 35% of your assets in your savings. will default if this limit is reached.",
      img: require("../assets/images/risk4.png"),
    },
    {
      id: "5",
      title: "Limited knowledge in investing",
      description:
        "Has very little/no knowledge about investing and mutual funds. Has no knowledge of it legal implications.",
      img: require("../assets/images/risk5.png"),
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
          body={<Text style={globalStyles.btnLabel}>Yes, I'm a starter</Text>}
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
