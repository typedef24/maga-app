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
import { MaterialIcons } from "@expo/vector-icons";
import CompareInvestmentsComponent from "../components/CompareInvestment";
import fonts from "../constants/fonts";
import AppConstants from "../constants/AppConstants";

import img from "../assets/images/dish.png";

export default function CompareInvestmentsScreen({ route, navigation }) {
  const data = route.params.data;

  const [compareArray, setCompareArray] = useState([]);

  return (
    <SafeAreaView style={styles.containerMain}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CompareInvestmentsComponent
            item={item}
            onClickFnx={() => {
              //ensure compareArray has less than 4 items
              if (compareArray.length < 4) {
                //ensure that item doesn't already exist in compareArray
                let isItemInCompareArray = false;
                for (let index = 0; index < compareArray.length; index++) {
                  if (compareArray[index].id == item.id) {
                    //item already in compareArray
                    isItemInCompareArray = true;
                    break;
                  }
                }
                if (!isItemInCompareArray) {
                  let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                  tempCompareArray.push(item); //add new item to tempCompareArray
                  setCompareArray(tempCompareArray);
                  console.log("Compare Array: " + JSON.stringify(compareArray, null, 2));
                  console.log("Item added to state: " + JSON.stringify(item, null, 2));
                } else {
                  Alert.alert(
                    "NOTICE!",
                    "Investment already in your compare list."
                  );
                }
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
          <View style={styles.boxSimple}>
            {compareArray[0] ? (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    marginRight: -11,
                    marginTop: -11,
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                    tempCompareArray.splice(0, 1); //Remove the item at index 0
                    setCompareArray(tempCompareArray);
                  }}
                >
                  <MaterialIcons name="cancel" size={25} color="red" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: AppConstants.strapiBaseURL + compareArray[0].img.url,
                  }}
                  style={{ height: 30, width: 30, marginTop: -10 }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <View style={{ height: 30, width: 30 }}></View>
            )}
          </View>
          <View style={styles.boxSimple}>
            {compareArray[1] ? (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    marginRight: -11,
                    marginTop: -11,
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                    tempCompareArray.splice(1, 1); //Remove the item at index 1
                    setCompareArray(tempCompareArray);
                  }}
                >
                  <MaterialIcons name="cancel" size={25} color="red" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: AppConstants.strapiBaseURL + compareArray[0].img.url,
                  }}
                  style={{ height: 30, width: 30, marginTop: -10 }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <View style={{ height: 30, width: 30 }}></View>
            )}
          </View>
          <View style={styles.boxSimple}>
            {compareArray[2] ? (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    marginRight: -11,
                    marginTop: -11,
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                    tempCompareArray.splice(2, 1); //Remove the item at index 0
                    setCompareArray(tempCompareArray);
                  }}
                >
                  <MaterialIcons name="cancel" size={25} color="red" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: AppConstants.strapiBaseURL + compareArray[0].img.url,
                  }}
                  style={{ height: 30, width: 30, marginTop: -10 }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <View style={{ height: 30, width: 30 }}></View>
            )}
          </View>
          <View style={styles.boxSimple}>
            {compareArray[3] ? (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    marginRight: -11,
                    marginTop: -11,
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    let tempCompareArray = compareArray.slice(); //copy compareArray to a temporal array
                    tempCompareArray.splice(3, 1); //Remove the item at index 0
                    setCompareArray(tempCompareArray);
                  }}
                >
                  <MaterialIcons name="cancel" size={25} color="red" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: AppConstants.strapiBaseURL + compareArray[0].img.url,
                  }}
                  style={{ height: 30, width: 30, marginTop: -10 }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <View style={{ height: 30, width: 30 }}></View>
            )}
          </View>
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
            onPress={() => {
              compareArray.length > 1
                ? navigation.navigate("compare-table", { compareArray: compareArray })
                : Alert.alert(
                    "NOTICE!",
                    "Please add at least 2 investemts to compare to proceed."
                  );
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
