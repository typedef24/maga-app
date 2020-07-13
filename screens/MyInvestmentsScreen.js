import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";

// Import components
import MyInvestment from "../components/MyInvestment";
import Button from "../components/Button";
import { FlatList } from "react-native-gesture-handler";
import { PageTitle } from "../components/PageTitle";

import AsyncStorage from "@react-native-community/async-storage";

// API connection
import Strapi from "../api/Strapi";
import { ActivityIndicator } from "react-native-paper";
import globalStyles from "../constants/globalStyles";
import font from "../constants/fonts";

export default function MyInvestmentsScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState([""]);

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
      // retrive userId
      const id = token.user.id;
      const response = await Strapi.get("/investments?user=" + id, {
        headers: {
          // Authorization header
          Authorization: "Bearer " + token.jwt,
        },
      });
      const finalData = response.data;

      setData(finalData);
      console.log(finalData);
      // Set loading indicator to false
      setIsLoading(false);
    } catch (error) {
      // Set loading indicator to false
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <PageTitle title="My Investments" />
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
                onPress: () => navigation.navigate("details-screen", { item }),
              }}
            />
          )}
        />
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.textHeading}>
            You don't have any available investments, please add investment.
          </Text>
          <View style={styles.btnSearch}>
            <Button
              body={<Text style={globalStyles.btnLabel}>Add Investments</Text>}
              touchableStyleProps={{
                backgroundColor: "#52c41a",
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
    </SafeAreaView>
  );
}

// Implementing BorderShadow
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
  shadowStyle: elevationShadowStyle(5),
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textHeading: {
    fontSize: font.large,
    textAlign: "center",
    marginBottom: 30,
  },
});
