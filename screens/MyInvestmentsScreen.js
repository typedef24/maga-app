import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

// Import components
import MyInvestment from "../components/MyInvestment";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { PageTitle } from "../components/PageTitle";

// API connection
import Strapi from "../api/Strapi";

export default function MyInvestmentsScreen({ navigation }) {
  const [data, setData] = useState();

  // Fetch for available investments
  const fetchInvestments = async () => {
    try {
      const response = await Strapi.get("/investments");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <PageTitle title="My Investments" />
      {/* <FlatList
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
      /> */}
      <MyInvestment
        touchableProps={{
          onPress: () => {
            navigation.navigate("details-screen");
          },
        }}
      />
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
});
