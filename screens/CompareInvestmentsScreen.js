import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import CompareInvestmentsComponent from "../components/CompareInvestment";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Layout from "../constants/Layout";
import fonts from "../constants/fonts";

import img from "../assets/images/dish.png";

export default function CompareInvestmentsScreen({ route }) {
  const data = route.params.data;
  const [compareOne, setCompareOne] = useState();
  const [compareTwo, setCompareTwo] = useState();
  const [compareThree, setCompareThree] = useState();
  const [compareFour, setCompareFour] = useState();

  const [compareArray, setCompareArray] = useState([]);

  return (
    <SafeAreaView style={styles.containerMain}>
      <FlatList
        data={[data]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CompareInvestmentsComponent
            item={item}
            onClickFnx={() => {
              //alert("Clicked!!");
              setCompareArray("A");
              console.log("Compare Array: " + compareArray);
              //console.log("Item.image: " + item.image);
            }}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxSimple}>
            <Image
              source={img}
              style={{ height: 30, width: 30 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Image
              source={img}
              style={{ height: 30, width: 30 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Image
              source={img}
              style={{ height: 30, width: 30 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            <Image
              source={img}
              style={{ height: 30, width: 30 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              marginLeft: 5,
            }}
          >
            <Text
              style={{ padding: 3, color: "#0b4291", fontSize: fonts.large }}
            >
              Compare
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#e6f7ff",
    justifyContent: "space-between",
    padding: 10,
  },
  boxContainer: {
    // flex: 1,
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: "#c5eaff",
  },
  boxSimple: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
  },
});
