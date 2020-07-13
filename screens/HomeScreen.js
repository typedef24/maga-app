import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

// import components
import MyInvestmentPreview from "../components/MyInvestmentPreview";
import MyInvestment from "../components/MyInvestment";
import Button from "../components/Button";

import globalStyles from "../constants/globalStyles";
import font from "../constants/fonts";
import Icon from "@expo/vector-icons/Ionicons";

// API Connetion
import Strapi from "../api/Strapi";
import AsyncStorage from "@react-native-community/async-storage";

export default function HomeScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    fetchInvestments();
  }, []);

  // Fetch for available investments
  const fetchInvestments = async () => {
    try {
      // Set loading indicator to true
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem("loggedInUser");
      const token = jsonValue !== null ? JSON.parse(jsonValue) : null;
      // Retrive the userId from token
      const id = token.user.id;
      const response = await Strapi.get("/investments?user=" + id, {
        headers: {
          // Auth header
          Authorization: "Bearer " + token.jwt,
        },
      });
      setData(response.data);
      // Set loading indicator to false
      setIsLoading(false);
    } catch (error) {
      // Set loading indicator to false
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor="#003A8C" barStyle="light-content" />
        )}
        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <View></View>
            <View>
              <Text style={styles.mainText}>MA'AT</Text>
            </View>
            <TouchableOpacity
              // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              onPress={() => navigation.navigate("profileScreen")}
            >
              <Ionicons name="md-person" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.moneyValue}>CURRENT VALUE</Text>
            <Text style={styles.currencyText}>usd 36545643</Text>
            <MyInvestmentPreview />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.scrolHeading}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Portfiolio</Text>
            <TouchableOpacity
              style={styles.linkText}
              onPress={() => navigation.navigate("myinvestsments")}
            >
              <Text>see all </Text>
              <Icon name="ios-arrow-forward" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 60 }}>
            {isLoading ? (
              <View>
                <ActivityIndicator size="large" color="green" />
              </View>
            ) : null}
            {data.length ? (
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <MyInvestment
                    item={item}
                    touchableProps={{
                      onPress: () =>
                        navigation.navigate("details-screen", { item }),
                    }}
                  />
                )}
              />
            ) : (
              <View style={styles.infoContainer}>
                <Text style={styles.textHeading}>
                  You don't have any available investments, please add
                  investment.
                </Text>
                <View style={styles.btnSearch}>
                  <Button
                    body={
                      <Text style={globalStyles.btnLabel}>Add Investments</Text>
                    }
                    touchableStyleProps={{
                      backgroundColor: "#003A8C",
                      marginRight: 25,
                      marginLeft: 25,
                    }}
                    touchableProps={{
                      onPress: () => {
                        navigation.navigate("opportunities");
                      },
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#033c8d",
    padding: 20,
  },
  mainText: {
    color: "#fff",
    marginBottom: 30,
    fontSize: 34,
    fontWeight: "bold",
  },
  moneyValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  currencyText: {
    color: "#fff",
    fontSize: 37,
    fontWeight: "bold",
  },
  scrolHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingTop: 25,
    paddingBottom: 5,
  },
  linkText: {
    flexDirection: "row",
  },
  infoContainer: {
    marginTop: 20,
  },
  textHeading: {
    fontSize: font.medium,
    textAlign: "center",
    marginBottom: 30,
  },
});
