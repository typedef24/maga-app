import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import CompareInvestmentsComponent from "../components/CompareInvestment";
import Button from "../components/Button";
import globalStyles from "../constants/globalStyles";
import Layout from "../constants/Layout";
import fonts from "../constants/fonts";
import AppConstants from "../constants/AppConstants";

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
              //ensure compareArray has less than 4 items
              if (compareArray.length < 4) {
                let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                tempCompareArray.push(item); //add new item to tempCompareArray
                setCompareArray(tempCompareArray);
                console.log("Compare Array: " + JSON.stringify(compareArray));
                console.log("Item added to state: " + JSON.stringify(item));
              } else {
                Alert.alert(
                  "NOTICE!",
                  "You can add a maximum of four investments to compare."
                );
              }
            }}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.boxSimple}>
            {compareArray[0] && (
              <Image
                source={{
                  uri: AppConstants.strapiBaseURL + compareArray[0].img.url,
                }}
                style={{ height: 30, width: 30 }}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            {compareArray[1] && (
              <Image
                source={{
                  uri: AppConstants.strapiBaseURL + compareArray[1].img.url,
                }}
                style={{ height: 30, width: 30 }}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            {compareArray[2] && (
              <Image
                source={{
                  uri: AppConstants.strapiBaseURL + compareArray[2].img.url,
                }}
                style={{ height: 30, width: 30 }}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxSimple}>
            {compareArray[3] && (
              <Image
                source={{
                  uri: AppConstants.strapiBaseURL + compareArray[3].img.url,
                }}
                style={{ height: 30, width: 30 }}
                resizeMode="cover"
              />
            )}
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
