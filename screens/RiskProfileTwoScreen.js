import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { RiskProfileItem } from "../components/RiskProfileItem";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";

import globalStyles from "../constants/globalStyles";

export default function RiskProfileTwoScreen() {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Moderate Risk Tolerance",
      description:
        "willing to accept some risks as long as the risk can be managed on the run without extreme losses.",
      img: require("../assets/images/mid1.png"),
    },
    {
      id: "2",
      title: "Medium Term investment",
      description:
        "Willing to make medium term investments like three to five years. Something like buying real estate.",
      img: require("../assets/images/mid2.png"),
    },
    {
      id: "3",
      title: "Moderate Returns",
      description:
        "Expect moderate return which protects you from inflation. That’s not too long to be affected by inflation.",
      img: require("../assets/images/mid3.png"),
    },
    {
      id: "4",
      title: "Between 35 -75% asset allocation",
      description:
        "You are willing to allocate between 35% and 75% of your assets into your savings",
      img: require("../assets/images/mid4.png"),
    },
    {
      id: "5",
      title: "Good knowledge in investing",
      description:
        "Has very little/no knowledge about investing and mutual funds. Has no knowledge of it legal implications.",
      img: require("../assets/images/mid5.png"),
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
          body={<Text style={globalStyles.btnLabel}>Yes, I'm a Mid</Text>}
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
